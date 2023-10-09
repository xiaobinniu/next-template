"use client"

import MyButton from "@/components/common/MyButton";

export default function Test({ handleClose }: { handleClose: (data?: any) => void }) {
    return (
        <div className="g-mask">
            <MyButton onClick={() => handleClose(1)}>123456</MyButton>
        </div>
    )
}

