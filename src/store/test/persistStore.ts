
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PersistData = {
    bears: number
    addBear: () => void
}

type Get = () => PersistData

export const usePersistStore = create(
    persist(
        (set, get: Get) => ({
            bears: 0,
            addBear: () => set({ bears: get().bears + 1 }),
        }),
        {
            name: 'my-storage',
            skipHydration: true,
        }
    )
)


