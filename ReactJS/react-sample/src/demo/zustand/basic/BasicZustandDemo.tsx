import { useCounterStore } from "./store/counterStore";

export const BasicZustandDemo = () => {
    const { count, increment, decrement, resetCounter } = useCounterStore();
    return (
        <div className="container">
            <h1>Zustand Tutorial</h1>
            <div>
                <div>
                    <h1>Count: {count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={resetCounter}>Reset Counter</button>
                </div>
            </div>
        </div>
    );
}