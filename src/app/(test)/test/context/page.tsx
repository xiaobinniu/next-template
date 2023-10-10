"use client"

import MyButton from "@/components/common/MyButton";
import { useAppContext } from "@/context/test/AppContext";
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function Context() {

    const { state, setState } = useAppContext();

    const add = () => {
        setState((v) => {
            return { ...v, count: v.count + 1 }
        })
    }

    return (
        <div>
            <div>count: {state.count}</div>
            <MyButton icon={AiOutlinePlusSquare} onClick={add}>count++</MyButton>
        </div>
    );
}

