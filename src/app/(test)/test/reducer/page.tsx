"use client"

import Button from "@/components/common/Button";
import { useTestContext } from "@/context/TestContext";
import { Action, ActionType, TState } from "@/reducer/TestReducer";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Context() {

    const { state: { count }, dispatch } = useTestContext();

    const add = () => {
        dispatch({
            type: ActionType.UPDATE,
            field: TState.count,
            value: count + 1
        } as Action)
    }

    return (
        <div>
            <div>count: {count}</div>
            <Button icon={AiOutlinePlusSquare} onClick={add}>count++</Button>
        </div>
    );
}

