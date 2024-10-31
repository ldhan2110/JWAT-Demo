import React, { useCallback } from "react";
export const Demo4 = () => {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <>
            <ComponentA counter={counter} />
            <button onClick={() => setCounter(prev => {
                return prev + 1;
            })}>Increase</button>
        </>
    )

}

const ComponentA = ({ counter }: { counter: number }) => {
    const doubleCounter = useCallback(function () {
        return counter * 2
    }, [counter])

    return <>{doubleCounter()}</>
}