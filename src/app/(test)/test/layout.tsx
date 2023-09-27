import TestContextProvider from '@/context/TestContext'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Test Reducer',
}

export default function TestLayout({ children, parallel2, parallel1 }:
    { children: React.ReactNode, parallel2: React.ReactNode, parallel1: React.ReactNode }) {

    return (
        <div className="bg-green-100"> [TestLayout]
            {/* {parallel1}
            {parallel2} */}

            <TestContextProvider>{children}</TestContextProvider>
        </div>
    )
}