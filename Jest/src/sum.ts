export function sum(a: number, b: number){
    return a+b;
}

export function concatObject(a:any, b:any){
    return {
        ...a,
        ...b
    }
}