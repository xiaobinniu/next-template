"use client"

import Image from 'next/image';
import asidebg from '@/assets/img/layout/asidebg.png'
import { useAppContext } from '@/context/AppContext';
import MyClose from '../common/MyClose';
import { ActionType } from '@/reducer/AppReducer';
import { useEffect } from 'react';

export default function Aside() {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        window.parent.postMessage({ data: 'Hello from Web!' }, '*');
        return () => {

        }
    }, []);

    return (
        <>
            <aside className={`flex-shrink-0 fixed left-0 top-0 md:relative w-[275px] h-screen bg-header ${state.asideShow ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"} transition-transform md:transition-none`}>
                <Image priority={true} src={asidebg} alt='asidebg' className='absolute top-[50px]' />
                {state.device === "mobile" ? <MyClose onClose={() => dispatch({
                    type: ActionType.UPDATE,
                    field: "asideShow",
                    value: false
                })} /> : null}

            </aside>
        </>
    )
}