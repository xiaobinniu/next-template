"use client"

import MyButton from "@/components/common/MyButton";
import { useBearStore } from "@/store/test/zustandStore"
import Link from "next/link";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiArrowFromLeft } from "react-icons/bi";

export default function Zustand() {
    const { bears, removeAllBears } = useBearStore((state) => ({ bears: state.bears, removeAllBears: state.removeAllBears }));
    const { increasePopulation } = useBearStore(); // 不使用 selector 会导致组件在每次状态更改时都进行更新!
    const [asyncFun] = useBearStore(state => ([state.asyncFun]));

    const clear = async () => {
        const data = await asyncFun();
        alert(data);
    }

    return (
        <>
            <div>bears: {bears}</div>
            <MyButton icon={AiOutlinePlusSquare} onClick={() => increasePopulation(2)}>Increase</MyButton>
            <MyButton icon={AiOutlinePlusSquare} onClick={removeAllBears}>Clear</MyButton>
            <MyButton icon={AiOutlinePlusSquare} onClick={clear}>ClearAsync</MyButton>

            <Link href={`/test/zustand/persist`}><MyButton icon={BiArrowFromLeft}>persist</MyButton></Link>

        </>
    )
}