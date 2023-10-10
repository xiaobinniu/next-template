import { SystemStore } from "@/store/systemStore";
import { useEffect } from "react";
import { useStore } from "zustand";

export default function useAppStore() {
    const { token, setToken } = useStore(SystemStore, (state) => ({ token: state.token, setToken: state.setToken }));

    useEffect(() => {
        SystemStore.persist.rehydrate();
    }, []);

    return { token, setToken }
}