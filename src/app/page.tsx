// "use client"
import { Metadata } from 'next';
import styles from './layout.module.css'
import Footer from '@/components/layout/Footer';
import { useEffect, useState } from 'react';
import { ReadStream } from 'fs';

export const metadata: Metadata = {
    title: '主页',
    description: '主页',
}

export default async function Home({ }) {

    // const [token, setToken] = useState("")

    const data = {
        address: "newxiaobin@gmail.com",
        password: "123456",
        smsCode: ""
    }

    const { data: Data } = await fetch("https://ass.arkfungames.com/v1/account/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())

    // useEffect(() => {
    //     fetch("https://ass.arkfungames.com/v1/account/login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }).then(response => response.json()).then((data) => {
    //         console.log(data.data.token);
    //         setToken(data.data.token)
    //     })
    // }, [])

    return (
        <div className="w-full relative">
            <video x5-video-player-type="h5" x-webkit-airplay="true" webkit-playsinline="true" loop autoPlay muted className={`w-full fixed top-[75px] z-[-1] object-cover opacity-40 ${styles.video} m-auto`}>
                <source src="https://xb-web.s3.sa-east-1.amazonaws.com/video/calica777slots_video.mp4" type="video/mp4" />
            </video>

            <div className='h-[3000px]'>{Data.token}</div>
            <Footer></Footer>
        </div>
    )
}


