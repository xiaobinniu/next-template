
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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
            storage: createJSONStorage(() => localStorage)
        }
    )
)