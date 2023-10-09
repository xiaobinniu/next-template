"use client";

import { createRoot } from "react-dom/client";

/**
 * @param Compnent 
 * @returns 
 * @description 自定义组件要接收一个props.handleClose回调 
 */
export const myModal = (Compnent: any) => {
    return new Promise((resolve) => {

        const _root = document.body.children[0];
        const div = document.createElement('div');
        const root = createRoot(div!);
        _root?.appendChild(div);
        root.render(<Compnent handleClose={close} />)

        function close(data: any) {
            resolve(data);
            root.unmount();
            div.remove();
        }

    })
} 