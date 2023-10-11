"use client"

import { useEffect, useState } from "react";

export type DeviceType = 'mobile' | 'desktop'

export default function useDevice() {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop'); // 默认设备类型为桌面

    useEffect(() => {
        const updateDeviceType = () => {
            const screenWidth = window.innerWidth;
            // else if (screenWidth < 1024) {
            //     setDeviceType('tablet');
            // }
            if (screenWidth < 768) {
                setDeviceType('mobile');
            } else {
                setDeviceType('desktop');
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

    return deviceType;
}