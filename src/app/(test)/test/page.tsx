"use client"
import Button from '@/components/common/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { AiOutlinePlusSquare } from 'react-icons/ai';

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
            console.log('销毁');
        }
    }, [])

    return (
        <div>
            <h1 id="id">/Test/Page : {id}</h1>

            <Button icon={AiOutlinePlusSquare} onClick={add}>Id</Button>

            <Link href={`/test/${id.toString()}`} className=' bg-slate-400'> <Button icon={BiArrowFromLeft}>Id</Button> </Link>
            <Link href={`/test/context`}><Button icon={BiArrowFromLeft}>context</Button></Link>
            <Link href={`/test/reducer`}><Button icon={BiArrowFromLeft}>reducer</Button></Link>
            <Link href={`/test/zustand`}><Button icon={BiArrowFromLeft}>zustand</Button></Link>

        </div>
    );
}

