import { useCounterStore } from "./store/counterStore";

export const BasicZustandDemo = () => {
    const count = useCounterStore(state => state.count);
    const {  increment, decrement, resetCounter } = useCounterStore();
    console.log("Rerender Main Zustand")
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

                <div>
                    <ZustandFish/>
                </div>
            </div>
        </div>
    );
}

export const ZustandFish = ()=>{
    const fish = useCounterStore((state) => state.fish);
    const incrementFish = useCounterStore(state=>state.incrementFish);
    console.log("Rerender Main Fish")
    return (
    <>
        {fish}
        <button onClick={incrementFish}>Increment</button>
    </>)
}