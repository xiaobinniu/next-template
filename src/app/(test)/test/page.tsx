"use client"
import MyButton from '@/components/common/MyButton';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import Child from './Child';

export default function Test() {
    const [id, setId] = useState(0);

    const add = () => {
        setId(c => c + 1);
        setId(c => c + 1);
        setId(c => c + 1);
    }

    useEffect(() => {
        console.log('useEffect');
        setId(1);
        return () => {
            console.log('destory');
        }
    }, [])

    const handleChange = (n: number) => {
        setId(c => n);
    }

    return (
        <div>
            <h1 id="id">/Test/Page : {id}</h1>

            <MyButton icon={AiOutlinePlusSquare} onClick={add}>Id</MyButton>

            <Link href={`/test/${id.toString()}`} className=' bg-slate-400'> <MyButton icon={BiArrowFromLeft}>Id</MyButton> </Link>
            <Link href={`/test/context`}><MyButton icon={BiArrowFromLeft}>context</MyButton></Link>
            <Link href={`/test/reducer`}><MyButton icon={BiArrowFromLeft}>reducer</MyButton></Link>
            <Link href={`/test/zustand`}><MyButton icon={BiArrowFromLeft}>zustand</MyButton></Link>

            <h1>子组件传值：</h1>
            <Child id={id} change={handleChange} />
        </div>
    );
}

