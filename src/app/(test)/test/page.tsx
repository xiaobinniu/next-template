"use client"
import Button from '@/components/common/Button';
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

            <Button icon={AiOutlinePlusSquare} onClick={add}>Id</Button>

            <Link href={`/test/${id.toString()}`} className=' bg-slate-400'> <Button icon={BiArrowFromLeft}>Id</Button> </Link>
            <Link href={`/test/context`}><Button icon={BiArrowFromLeft}>context</Button></Link>
            <Link href={`/test/reducer`}><Button icon={BiArrowFromLeft}>reducer</Button></Link>
            <Link href={`/test/zustand`}><Button icon={BiArrowFromLeft}>zustand</Button></Link>

            <h1>子组件传值：</h1>
            <Child id={id} change={handleChange} />
        </div>
    );
}

