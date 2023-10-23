"use client"

import Image from "next/image";
import menu from '@/assets/img/layout/menu.png'
import { useAppContext } from "@/context/AppContext";
import { ActionType } from "@/reducer/AppReducer";

export default function Header() {
    const { state, dispatch } = useAppContext()

    return (
        <>
            <header className="w-full h-[75px] bg-header pt-[40px]">
                {state.device === "mobile" ? <Image src={menu} alt="menu" width={30} onClick={() => dispatch({
                    type: ActionType.UPDATE,
                    field: "asideShow",
                    value: true
                })}></Image> : null}
            </header>
        </>
    )
}