import { create } from 'zustand'

interface IBearStore {
    bears: number,
    increasePopulation: (num: number) => void,
    removeAllBears: () => void,
    asyncFun: () => Promise<any>
}

export const useBearStore = create<IBearStore>((set) => ({
    bears: 0,
    increasePopulation: (num: number) => set((state) => ({ bears: state.bears + num })),
    removeAllBears: () => set({ bears: 0 }),
    asyncFun: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                set((state) => ({ bears: 0 }))
                resolve(0)
            }, 1000);
        })
    }
}))