"use client"

import Button from "@/components/common/Button";
import { useAppContext } from "@/context/AppContext";
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
            <Button icon={AiOutlinePlusSquare} onClick={add}>count++</Button>
        </div>
    );
}

