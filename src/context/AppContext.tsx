"use client";

import { AppState, Action, appReducer, initAppState } from '@/reducer/AppReducer';
import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from 'react';

type AppReducerProps = {
    state: AppState
    dispatch: Dispatch<Action>
}

const AppContext = createContext<AppReducerProps>(null!)

export const useAppContext = () => {
    return useContext(AppContext)
}

export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, initAppState);

    const contextValue = useMemo(() => {  // state, setState 不变,  children 子组件就不会重新渲染
        return { state, dispatch }
    }, [state, dispatch])

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}