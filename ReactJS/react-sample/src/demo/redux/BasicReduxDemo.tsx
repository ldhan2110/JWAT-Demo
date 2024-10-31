import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks/hooks"
import { increment } from "./redux-toolkit/reducer/counterReducer"

export function BasicReduxDemo() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counters.value)
    const dispatch = useAppDispatch()

    // omit rendering logic
    return (
        <>
            <div>Counter: {count}</div>
            <div>If this value changes which means the component got re-render: {Math.random()}</div>
            <button onClick={() => dispatch(increment())}>Increase</button>
        </>
    )
}