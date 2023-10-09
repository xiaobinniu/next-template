"use client"
import MyButton from '@/components/common/MyButton';
import Test from '@/utils/Test';
import { myModal } from '@/utils/myModal';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '主页',
    description: '主页',
}

export default function Home() {

    const open = () => {
        myModal(Test).then((data: any) => {
            console.log(data);
        })
    }

    return (
        <div className="w-full h-full">
            <MyButton onClick={open}>弹窗</MyButton>
        </div>
    )
}
