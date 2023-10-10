import Header from '@/components/layout/Header';
import './globals.css';
// import AppContextProvider from '@/context/test/AppContext';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Aside from '@/components/layout/Aside';
import styles from '../components/layout/layout.module.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className='h-screen overflow-auto bg-bg relative'>
                <title>This is Title</title>
                <meta name='description' content="This is a description" />
                {/* <AppContextProvider>{children}</AppContextProvider> */}
                <StyledComponentsRegistry>
                    <Header></Header>
                    <Aside></Aside>
                    <center className={`w-full ${styles.center} pl-[275px] pt-[75px]`}>
                        {children}
                    </center>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
