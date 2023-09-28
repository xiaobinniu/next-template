"use client"

import Button from "@/components/common/Button";
import { usePersistStore } from "@/store/persistStore";
import { useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useStore } from "zustand";

export default function Persist() {
    const { bears, addABear } = useStore(usePersistStore, (state) => ({ bears: state.bears, addABear: state.addABear }));

    useEffect(() => {
        usePersistStore.persist.rehydrate();
    }, []);

    return (
        <>
            <div>bears: {bears}</div>
            <Button icon={AiOutlinePlusSquare} onClick={addABear}>Increase</Button>
        </>
    )
}