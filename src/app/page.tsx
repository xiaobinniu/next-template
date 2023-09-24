"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <h1>主页</h1>

            {index}
            <button onClick={() => { setIndex(index + 1) }}>++</button> <br></br>

            <Link href={`/test/${index}`} shallow>/test</Link>
        </div>
    )
}
