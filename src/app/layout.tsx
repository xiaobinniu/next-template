"use client"

import Header from '@/components/test/Header'
import './globals.css'
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body>
                <title>App Home</title>
                <meta name='description' content="这是描述" />
                {pathname === "/" ? null : <Header ></Header>}
                {children}
            </body>
        </html>
    )
}
