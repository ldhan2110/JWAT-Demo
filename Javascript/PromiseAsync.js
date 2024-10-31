// Different between Async/Await & Promise
async function callAPIWithAsync() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("Async", await result.json());
    console.log("Hello World From Async");
}

async function callAPIWithPromise() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log("Promise", json))
    console.log("Hello World From Promise");
}
callAPIWithAsync();
callAPIWithPromise() // Hello From Async will always be called last


// Some other utility method in Promises
const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const promise2 = fetch('https://jsonplaceholder.typicode.com/comments/1');
const promise3 = fetch('https://jsonplaceholder.typicode.com/albums/1');
// This will run the fetch in parallel without waiting - however, it will fails if any promise failed (fail fast)
Promise.all([promise1, promise2, promise3, Promise.reject(new Error("Invalid"))])
    .then(async (result) => {
        for (const response of result) {
            console.log(await response.json());
        }
    })
    .catch((error) => console.log(`Error in promises ${error}`));

//With Promise Settled, all the promise will be executed no matter success or not. However, the result will contains the status and reponse
Promise.allSettled([promise1, promise2, promise3, Promise.reject(new Error("Invalid"))])
    .then(async (result) => {
        console.log(result);
    })
    .catch((error) => console.log(`Error in promises ${error}`));

// Promise any - Just like above, but in reject case, Promise.any will reject when all promises are rejected.
Promise.race([promise1, promise2, promise3, Promise.reject(new Error("Invalid"))])
    .then(async (result) => {
        console.log(result);
    })
    .catch((error) => console.log(`Error in promises ${error}`));

// Promise Race - racing between promise, only 1 API needed to be success => other will not need to do anymore.
Promise.race([promise1, promise2, promise3, Promise.reject(new Error("Invalid"))])
    .then(async (result) => {
        console.log(result);
    })
    .catch((error) => console.log(`Error in promises ${error}`));