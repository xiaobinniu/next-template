"use client"

import './globals.css';
import { usePathname } from 'next/navigation';
import AppContextProvider from '@/context/AppContext';
import Header from './(test)/test/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className=' w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-[#f7f8fa]'>
                <title>App Home</title>
                <meta name='description' content="这是描述" />
                {pathname === "/" ? null : <Header ></Header>}
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    )
}
