import { useEffect, useState } from "react";

export const Demo2 = () => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("This will be run every re-render");
    })

    useEffect(() => {
        console.log("This will be run only once when component mounted.");
    }, [])

    useEffect(() => {
        console.log("This will be run whenever the counter changes");
    }, [counter])

    return (
        <>
            <div>Counter: {counter}</div>
            <div>If this value changes which means the component got re-render: {Math.random()}</div>
            <button onClick={() => setCounter(prev => prev + 1)}>Increase</button>

            <>{counter > 5 ? <ComponentA /> : <ComponentB />}</>
        </>
    )
}

const ComponentB = () => {
    useEffect(() => {
        return function () {
            console.log("This will be run when component B is unmounted.");
        }
    }, [])

    return (
        <>This is component B</>
    )
}

const ComponentA = () => {
    return (
        <>This is component A</>
    )
}