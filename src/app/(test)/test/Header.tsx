'use client';

import Button from "@/components/common/Button";
import { useRouter, usePathname } from "next/navigation";
import { BiArrowBack } from 'react-icons/bi'

export default function Header() {
    const router = useRouter();
    const pathname = usePathname()

    return (
        <div>
            <span className="bg-blue-500" onClick={router.back}> 当前: [{pathname}] <Button icon={BiArrowBack}>返回</Button></span>
        </div>
    )
}