"use client"

import './globals.css';
import { usePathname, redirect } from 'next/navigation';
// import AppContextProvider from '@/context/test/AppContext';
import { useEffect } from 'react';
import useAuth from '@/hook/useAuth';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuth = useAuth();

    useEffect(() => {
        if (!isAuth && pathname !== "/") {
            console.log("登录弹窗");
            redirect('/');
        }
    }, [pathname]);

    return (
        <html lang="en">
            <body className='w-screen h-screen overflow-auto bg-bg'>
                <title>This is Title</title>
                <meta name='description' content="This is a description" />
                {/* <AppContextProvider>{children}</AppContextProvider> */}
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
