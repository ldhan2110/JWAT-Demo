const express = require("express");
const StudentRouter = express.Router();

StudentRouter.get("/", function(req, res) {
    res.send("This is Student Route for GET Method");
});

module.exports = StudentRouter;