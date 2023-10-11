import img from '@/assets/img/layout/X.png';
import Image from 'next/image';

export default function MyClose({ onClose }: { onClose: () => void }) {

    return (
        <div className="absolute right-[15px] top-[15px]" onClick={onClose}>
            <Image src={img} alt="" width={20}></Image>
        </div>
    )
}


