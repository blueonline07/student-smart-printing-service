// student-smart-printing-service/frontend/web/src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import logo from '../../assets/images/logo.png';
import bg1 from '../../assets/images/bg1.png';
import hcmut from '../../assets/images/hcmut.png';
import logobk from '../../assets/images/logobk.png';
import spss from '../../assets/images/spss.png';
import Example from '../../component/DrawOutlineButton';
import DrawOutlineButton from '../../component/DrawOutlineButton';
import google from '../../assets/images/google.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48" />
                <div className="ml-auto">
                    <Link to="/login">
                        <DrawOutlineButton>Đăng nhập</DrawOutlineButton>
                    </Link>
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

function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-grow bg-cyan-600 bg-opacity-95 px-6 py-6">
                <div className="flex flex-col">
                    <h2 className="pt-2 text-5xl font-semibold text-[#D9D9D9]">
                        HỆ THỐNG IN ẤN THÔNG MINH
                    </h2>
                    <img src={hcmut} alt="HCMUT" className="mt-8 h-auto w-3/6" />
                    <p className="pt-8 text-2xl font-medium text-white">
                        Hệ thống in ấn thông minh dành cho sinh viên và giảng viên trường Đại học
                        Bách Khoa TPHCM.
                    </p>
                </div>
                <img
                    src={bg1}
                    alt="Student Smart Printing Service"
                    className="mx-6 flex h-5/6 w-1/3"
                />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
