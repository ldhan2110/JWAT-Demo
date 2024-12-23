const express = require("express")
const bodyParse = require("body-parser")
const StudentRouter = require("./student");
const app = express();

app.use(bodyParse.json());

app.use("/student", StudentRouter);


app.get("/",(req, res, next) => {
    console.log('This is the first middleware');
    next();
},
(req, res, next) => {
    console.log('This is the second middleware');
    next();
},
function(req, res){
    res.send("Hello World");
});

app.get("/product/:id", function(req, res){
   const {id} = req.params;
    res.setHeader("status", 200)
    res.send(`This is product ${id}`);
})

app.get("/product", function(req, res){
     const {id, sort} = req.query;
     res.setHeader("status", 200)
     res.send(`This is product ${id} ${sort}`);
 })

app.post("/product/create", function(req, res){
    console.log(req.body);
    res.send("Create Product successfully");
})

app.listen(3000, function(){
    console.log(`Node Server listening on 3000`)
})