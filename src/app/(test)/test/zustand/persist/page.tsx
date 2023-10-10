"use client"

import MyButton from "@/components/common/MyButton";
import { usePersistStore } from "@/store/test/persistStore";
import { useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useStore } from "zustand";

export default function Persist() {
    const { bears, addBear } = useStore(usePersistStore, (state) => ({ bears: state.bears, addBear: state.addBear }));

    useEffect(() => {
        usePersistStore.persist.rehydrate();
    }, []);

    return (
        <>
            <div>bears: {bears}</div>
            <MyButton icon={AiOutlinePlusSquare} onClick={addBear}>Increase</MyButton>
        </>
    )
}