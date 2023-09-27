import { create } from 'zustand'


interface IBear {
    bears: number
}

const useBearStore = create<IBear>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))