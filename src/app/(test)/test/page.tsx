"use client"
import { Metadata } from 'next'
import Link from 'next/link';
import { useState } from 'react';

export const metadata: Metadata = {
    title: 'Test',
}

export default function Test() {
    const [id, setId] = useState(0);

    return (
        <div>
            <h1>test页 {id}</h1>

            <button className='bg-blue-100' onClick={() => setId(id + 1)}>add</button> <br />

            <Link href={`/test/${id.toString()}`} className=' bg-slate-400'>id page</Link>
        </div>
    );
}

