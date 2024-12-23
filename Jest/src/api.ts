export async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.json();
    return result;
}

export async function fetchDataWithException(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.json();
    if (result.id == 1) {
        throw new Error("BAD_REQUEST")
    }
    return result;
}