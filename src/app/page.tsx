import { Metadata } from 'next';
import styles from '../components/layout/layout.module.css'
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: '主页',
    description: '主页',
}

export default function Home() {

    return (
        <div className="w-full relative">
            <video x5-video-player-type="h5" x-webkit-airplay="true" webkit-playsinline="true" loop autoPlay muted className={`w-full fixed top-0 z-0 object-cover opacity-40 ${styles.video} m-auto`}>
                <source src="https://xb-web.s3.sa-east-1.amazonaws.com/video/calica777slots_video.mp4" type="video/mp4" />
            </video>

            <Footer></Footer>
        </div>
    )
}
