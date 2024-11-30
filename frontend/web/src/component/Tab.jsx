import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import icon from "../assets/images/icon.png";

export const SlideTabsExample = () => {
    return (
        <SlideTabs />
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 bg-white p-1"
        >
            <Tab setPosition={setPosition}>Lịch sử in ấn</Tab>
            <Tab setPosition={setPosition}>Lịch sử mua trang</Tab>
            <Tab setPosition={setPosition}>Xử lý sự cố</Tab>
            <Tab setPosition={setPosition}>Cài đặt máy in</Tab>
            <Tab setPosition={setPosition}>
                <img src={icon} alt="icon" className="h-5 w-5" />
            </Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};