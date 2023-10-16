"use client"

import { insertElementAtIndex, swapArrayElements } from "@/utils/Tool";
import { useEffect, useRef, useState } from "react"

export default function Dnd() {
    const [list, setList] = useState<Array<number>>([]);
    const nowDom = useRef<HTMLElement | null>(null!)

    useEffect(() => {
        setList(Array.from({ length: 20 }, (_, index) => index + 1))
        return () => {

        }
    }, [])

    function handleDrag(e: React.DragEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        // 做上下移动事件
        nowDom.current = target;
    }
    function handleDragStart(e: React.DragEvent<HTMLElement>) {
        // console.log("handleDragStart");
    }
    function handleEnd() {
        nowDom.current = null;
    }

    function handleDragEnter(e: React.DragEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        if (target.nodeName === "LI" && target !== nowDom.current) {
            // console.log("onDragEnter", target);
        }
    }
    function handleDrop(e: React.DragEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        // console.log("onDrop", target);
        const key = parseInt(target.innerHTML) - 1;
        if (target !== nowDom.current) {
            const indexNow = parseInt(nowDom.current!.innerHTML) - 1
            // let newList = swapArrayElements(list, indexNow, key)
            let newList = insertElementAtIndex(list, indexNow, key)
            setList(newList)
        }
    }


    return (
        <>
            <ul className="select-none transition-all"
                onDrag={handleDrag}
                onDragStart={handleDragStart}
                onDragEnd={handleEnd}
                onDragOver={(e) => e.preventDefault()}
                // 当拖拽元素进入目标元素时触发
                onDragEnter={handleDragEnter}
                // 当拖拽元素进入目标元素时触发
                onDrop={handleDrop}
            >
                {list.map((item) => {
                    return <li
                        draggable
                        className="w-[50px] h-[20px] my-1 bg-[#251751] transition-all"
                        key={item}
                    >{item}</li>
                })}
            </ul>
        </>
    )
}