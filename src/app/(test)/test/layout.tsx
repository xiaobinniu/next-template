export default function TestLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <span className=" bg-slate-400">TestLayout</span>
            {children}
        </>
    )
}