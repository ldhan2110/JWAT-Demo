import { create } from 'zustand'

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    resetCounter: () => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCounter: () => set({ count: 0 })
}));