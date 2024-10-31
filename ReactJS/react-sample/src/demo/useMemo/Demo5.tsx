import React, { useMemo } from "react";

export const Demo5 = () => {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <>
            <ComponentA counter={counter} />
            <button onClick={() => setCounter(prev => {
                if (prev > 1) {
                    return prev - 1;
                } else return prev + 1;
            })}>Increase</button>
        </>
    )

}

const ComponentA = ({ counter }: { counter: number }) => {

    function doubleCounter(value: number) {
        console.log("Calculating");
        return value * 2;
    }

    const doubleValue = useMemo(() => {
        return doubleCounter(counter)
    }, [counter])

    return <>{doubleValue}</>
}