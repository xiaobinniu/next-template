import Header from '@/components/layout/Header';
import './globals.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Aside from '@/components/layout/Aside';
import AppContextProvider from '@/context/AppContext';
import Adapt from '@/components/common/Adapt';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='h-screen bg-bg relative'>
                <title>This is Title</title>
                <meta name='description' content="This is a description" />
                <AppContextProvider>
                    <Adapt></Adapt>
                    <StyledComponentsRegistry>
                        <div className='w-full h-full flex'>
                            <Aside></Aside>
                            <center className={`flex-1 flex flex-col md:min-w-[925px] md:overflow-x-auto`}>
                                <Header></Header>
                                <div className='flex-1 overflow-y-auto'>{children}</div>
                            </center>
                        </div>
                    </StyledComponentsRegistry>
                </AppContextProvider>
            </body>
        </html>
    )
}
