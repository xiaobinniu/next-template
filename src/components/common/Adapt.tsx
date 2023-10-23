"use client";

import { useAppContext } from "@/context/AppContext";
import { ActionType } from "@/reducer/AppReducer";
import Script from "next/script";
import { useEffect } from "react";

export default function Adapt() {
    const { dispatch } = useAppContext();

    useEffect(() => {
        setTimeout(() => {
            uni.postMessage({
                data: {
                    msg: "这是自定义消息"
                }
            });
        }, 1000);
        const updateDeviceType = () => {
            const screenWidth = window.innerWidth;
            // else if (screenWidth < 1024) {
            //     setDeviceType('tablet');
            // }
            if (screenWidth < 768) {
                dispatch({
                    type: ActionType.UPDATE,
                    field: "device",
                    value: "mobile"
                })
            } else {
                dispatch({
                    type: ActionType.UPDATE,
                    field: "device",
                    value: "desktop"
                })
            }
        };
        // 初始化时更新设备类型
        updateDeviceType();
        // 窗口大小变化时重新检测设备类型
        window.addEventListener('resize', updateDeviceType);

        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []); // 空依赖数组表示只在组件挂载和卸载时运行

    return (
        <>
            <Script type="text/javascript" src="https://unpkg.com/@dcloudio/uni-webview-js@0.0.3/index.js"></Script>
            <Script type="text/javascript" src="uniApp.js"></Script>
        </>
    )
}


