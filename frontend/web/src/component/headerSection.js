import React from 'react';

const HeaderSection = ({ onLoginClick }) => {
    return (
        <header className="flex items-center justify-between bg-cyan-500 px-6 py-4 shadow-md">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
                <img
                    src="assets/header.png"
                    alt="Student Smart Printing Service Logo"
                    className="w-12 h-12"
                />
                <h1 className="text-white font-bold text-lg">Student Smart Printing Service</h1>
            </div>

            {/* Login Button */}
            <button
                onClick={onLoginClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-md transition"
            >
                Đăng nhập
            </button>
        </header>
    );
};

export default HeaderSection;
