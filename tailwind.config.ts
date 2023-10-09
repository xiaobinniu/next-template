import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {

            },
            colors: {
                bg: "#1c0e3c",
                color1: "#a08bf9", // 深
                color2: "#cbb5ff", // 浅
                color3: "#d2ccdc"  // 白
            },
            backgroundColor: {
                bg: "#1c0e3c",
                color1: "#a08bf9",
                color2: "#cbb5ff",
                color3: "#d2ccdc"
            },
        },
    },
    plugins: [],
}
export default config
