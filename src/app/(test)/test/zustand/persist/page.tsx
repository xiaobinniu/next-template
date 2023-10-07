"use client"

import Button from "@/components/common/Button";
import { usePersistStore } from "@/store/persistStore";
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
            <Button icon={AiOutlinePlusSquare} onClick={addBear}>Increase</Button>
        </>
    )
}