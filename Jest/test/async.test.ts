import { fetchData, fetchDataWithException } from "@src/api";

var TEMP_VALUE = 0;

// This will apply for the whole file and will be run before each Unit Test
beforeEach(()=>{
    console.log("This will be run before each Unit Test");
})

afterEach(()=>{
    console.log("This will be run After each Unit Test");
})

test('Assert TEMP_VALUE', async () => {
    expect(TEMP_VALUE).toBe(100);
});


describe("Testing Asynchronous Code", ()=>{
    beforeEach(()=>{
        TEMP_VALUE = 200;
    })

    test('Fetching Data using Async/Await', async () => {
        const data = await fetchData();
        expect(data).not.toBeNull();
        expect(data).toHaveProperty("id", 1);
    });
    
    test('Fetching Data using Async/Await but have error', async () => {
        try {
            await fetchDataWithException();
          } catch (error) {
            expect(error.message).toMatch("BAD_REQUEST");
          }    
    });

    test('Assert TEMP_VALUE in code blocks', async () => {
        expect(TEMP_VALUE).toBe(200);
    });
});
