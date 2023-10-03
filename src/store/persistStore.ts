
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Persist = {
    bears: number
    addABear: () => void
}

type Get = () => Persist

export const usePersistStore = create(
    persist(
        (set, get: Get) => ({
            bears: 0,
            addABear: () => set({ bears: get().bears + 1 }),
        }),
        {
            name: 'my-storage',
            skipHydration: true,
        }
    )
)


