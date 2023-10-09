"use client"

import { useEffect, useState } from "react";
import Config from '@/GlobalConfig'

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
    }, []);

    return (
        <>
            <div className={`w-screen h-[5px] fixed top-0 left-0 z-[${Config.loadingProgress}]`}>
                <div className={`h-full w-[${progress / 100}] bg-gradient-to-r from-#271450 via-#211144 to-#2c1558`}></div>
            </div>
        </>
    )
}