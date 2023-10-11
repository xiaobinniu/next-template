"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

type State = {
    token: string,
    count: number
}

type AppContentProps = {
    state: State
    setState: Dispatch<SetStateAction<State>>
}

const AppContext = createContext<AppContentProps>(null!)

export const useReducerContext = () => {
    return useContext(AppContext)
}

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState({ token: "", count: 0 });

    const contextValue = useMemo(() => {  // state, setState 不变,  children 子组件就不会重新渲染
        return { state, setState }
    }, [state, setState])

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}