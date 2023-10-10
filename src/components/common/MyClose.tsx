
export default function MyClose({ onClose }: { onClose: () => void }) {

    return (
        <div className="absolute right-[15px] top-[15px]" onClick={onClose}>
            X
        </div>
    )
}


