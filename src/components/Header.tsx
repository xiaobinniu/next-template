'use client';

import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname()

    return (
        <div>
            <button className="bg-blue-500" onClick={router.back}>Layout 返回 [{pathname}]</button>
        </div>
    )
}