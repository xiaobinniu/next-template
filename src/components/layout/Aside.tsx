import Image from 'next/image';
import asidebg from '@/assets/img/layout/asidebg.png'
import MyButton from '../common/MyButton';

export default function Header() {

    return (
        <>
            <aside className={`w-[275px] h-screen fixed left-0 z-[9] bg-header`}>
                <Image src={asidebg} alt='asidebg' className='absolute top-[50px]' />
                <MyButton>123111111111111</MyButton>
            </aside>
        </>
    )
}