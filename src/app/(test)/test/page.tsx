"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Test() {
    const [id, setId] = useState(0);

    const add = () => {
        setId(c => c + 1);
        setId(c => c + 1);
        setId(c => c + 1);
    }

    useEffect(() => {
        console.log(id);
        return () => {
            console.log('销毁');
        }
    }, [])

    return (
        <div>
            <h1 id="id">Test页 : {id}</h1>

            <button className='bg-blue-100' onClick={add}>add</button> <br />

            <Link href={`/test/${id.toString()}`} className=' bg-slate-400'> Id </Link>
        </div>
    );
}

