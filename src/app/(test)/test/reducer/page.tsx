"use client"

import MyButton from "@/components/common/MyButton";
import { useTestContext } from "@/context/test/TestContext";
import { ActionType, TState } from "@/reducer/test/TestReducer";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Context() {

    const { state: { count }, dispatch } = useTestContext();

    const add = () => {
        dispatch({
            type: ActionType.UPDATE,
            field: "count",
            value: count + 1
        })
    }

    return (
        <div>
            <div>count: {count}</div>
            <MyButton icon={AiOutlinePlusSquare} onClick={add}>count++</MyButton>
        </div>
    );
}

