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
                font1: "#a08bf9", // 深
                font2: "#cbb5ff", // 浅
                white: "#d2ccdc", // 白
            },
            backgroundColor: {
                bg: "#1c0e3c",
                modal: "#311861", // 紫色
                modal2: "#9151fd", // 亮色边框
                header: "#13092b", // 顶部栏和侧边栏
            },
        },
    },
    plugins: [],
}
export default config
