"use client"

import { useEffect, useState } from "react"

export default function Loading() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress((c) => c + 1)
        }, 100);

        return () => {
            setProgress(100)
            if (timer) clearInterval(timer)
        }
    }, [])

    return (
        <>
            <div className="w-full h-full"> {`${(progress / 100).toFixed(2)}%`}</div>
        </>
    )
}