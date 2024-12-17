import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import icon from '../assets/images/icon.png';
import { Link } from 'react-router-dom';

export const SlideTabsExample = () => {
    return <SlideTabs />;
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="relative">
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0,
                    }));
                }}
                className="relative mx-auto flex w-fit rounded-full border-2 bg-white p-1"
            >
                <Link to="/print-history">
                    <Tab setPosition={setPosition}>Lịch sử in ấn</Tab>
                </Link>
                <Link to="/add-printing">
                    <Tab setPosition={setPosition}>Danh sách máy in</Tab>
                </Link>
                <div onClick={() => setDropdownVisible(!isDropdownVisible)}>
                    <Tab setPosition={setPosition}>
                        <img src={icon} alt="icon" className="h-5 w-5" />
                    </Tab>
                </div>

                <Cursor position={position} />
            </ul>
            {isDropdownVisible && (
                <div
                    data-popover
                    id="dropdown"
                    className="absolute right-0 top-full z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li>
                            <a
                                href="/profile"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Hồ sơ
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
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
