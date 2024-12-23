import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface CounterState {
    count: number;
    fish: number;
    increment: () => void;
    decrement: () => void;
    incrementFish: ()=> void;
    resetCounter: () => void;
}

export const useCounterStore = create<CounterState>()(devtools(persist((set, get) => ({
    count: 0,
    fish: 0,
    increment: () => set(() => ({ count: get().count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    incrementFish: ()=> set((state)=> ({fish: state.fish + 1})),
    resetCounter: () => set({ count: 0 })
}),{
    name: 'food-storage', // name of the item in the storage (must be unique)
    // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  },)));