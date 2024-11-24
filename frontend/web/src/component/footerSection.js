import React from 'react';

const FooterSection = () => {
    return (
        <footer className="flex justify-between items-center bg-gray-700 text-white px-6 py-4">
            {/* Thông tin liên hệ */}
            <div>
                <p className="font-bold">Ban quản lý in ấn thông minh / SPSO</p>
                <p>
                    <span className="mr-2">📧 Email:</span>
                    <a
                        href="mailto:spso@hcmut.edu.vn"
                        className="text-teal-400 hover:underline"
                    >
                        spso@hcmut.edu.vn
                    </a>
                </p>
                <p>
                    <span className="mr-2">📞 ĐT (Tel.):</span> (84-8) 38647256 - 5258
                </p>
            </div>

            {/* Logo bên góc phải */}
            <div>
                <a href="https://www.hcmut.edu.vn" target="_blank" rel="noopener noreferrer">
                    <img
                        src="assets/hcmutlogo.png"
                        alt="BK Logo"
                        className="w-16 h-16"
                    />
                </a>
            </div>
        </footer>
    );
};

export default FooterSection;
