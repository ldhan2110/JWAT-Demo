import { useId } from "react"

export const Demo10 = () => {
    return (
        <>
            <ComponentA />
            <ComponentA />
        </>
    )
}

const ComponentA = () => {
    const currentId = useId();
    return (
        <div id={currentId}>Hello World</div>
    )
}