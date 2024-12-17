import logo from '../assets/images/logo.png';
import logobk from '../assets/images/logobk.png';
import spss from '../assets/images/spss.png';
import icon from '../assets/images/icon.png';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                <Link to="/print-history-staff">
                    <Tab setPosition={setPosition}>Lịch sử in ấn</Tab>
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
                                href="/profile-staff"
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

function Header() {
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <Link to="/home-staff">
                    <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48" />
                </Link>
                <div className="ml-auto flex flex-row">
                    <SlideTabs />
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="flex bg-gray-600 py-3 text-white">
            <div className="flex flex-col px-6">
                <h2 className="text-xl font-normal">Smart Printing Service Officer / SPSO</h2>
                <p>spso@hcmut.edu.vn</p>
                <p>(+84) 123456789</p>
                <p>101-BK.B1, Trường Đại học Bách khoa ĐHQG-HCM</p>
            </div>
            <div className="ml-auto flex flex-row items-center px-6">
                <img src={logobk} alt="BK" className="h-22 w-24" />
                <img src={spss} alt="SPSS" className="w-18 ml-4 h-28" />
            </div>
        </div>
    );
}

function LayoutStaff({ children }) {
    return (
        <div className="bg-bgColor flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

export default LayoutStaff;
