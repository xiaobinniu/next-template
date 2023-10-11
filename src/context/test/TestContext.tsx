"use client";

import { Action, State, initState, reducer } from '@/reducer/test/TestReducer';
import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from 'react';

type TestContentProps = {
    state: State
    dispatch: Dispatch<Action>
}

const TestContext = createContext<TestContentProps>(null!)

export const useTestContext = () => {
    return useContext(TestContext)
}

export default function TestContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const contextValue = useMemo(() => {  // state, setState 不变,  children 子组件就不会重新渲染
        return { state, dispatch }
    }, [state, dispatch])

    return <TestContext.Provider value={contextValue}>{children}</TestContext.Provider>
}