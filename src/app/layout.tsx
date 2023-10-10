import Header from '@/components/layout/Header';
import './globals.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Aside from '@/components/layout/Aside';
import AppContextProvider from '@/context/test/AppContext';
import styles from './layout.module.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className='h-screen overflow-auto bg-bg relative'>
                <title>This is Title</title>
                <meta name='description' content="This is a description" />
                <AppContextProvider>
                    <StyledComponentsRegistry>
                        <Header></Header>
                        <Aside></Aside>
                        <center className={`w-full ${styles.center} pl-[275px] pt-[75px]`}>
                            {children}
                        </center>
                    </StyledComponentsRegistry>
                </AppContextProvider>
            </body>
        </html>
    )
}
