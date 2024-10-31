import { useToggle } from "./useToggle";

export const Demo7 = () => {
    const { isToggle } = useToggle();

    return (
        <>{isToggle}</>
    )
}