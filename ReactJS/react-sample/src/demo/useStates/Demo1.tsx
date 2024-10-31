import { useState } from "react"

export const Demo1 = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>Counter: {counter}</div>
            <div>If this value changes which means the component got re-render: {Math.random()}</div>
            <button onClick={() => setCounter(prev => prev + 1)}>Increase</button>
        </>
    )
}