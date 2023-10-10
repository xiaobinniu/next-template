
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SystemData = {
    token: string,
    setToken: (token: string) => void
}

type Get = () => SystemData;

export const SystemStore = create(
    persist(
        (set, get: Get) => ({
            token: "",
            setToken: (token: string) => set({ token: token }),
        }),
        {
            name: 'system-store',
            skipHydration: true,
        }
    )
)


