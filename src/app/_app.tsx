import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <h1>123</h1>
            <Component {...pageProps} />
        </>

    )
}