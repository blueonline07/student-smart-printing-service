import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logobk from "../../assets/images/logobk.png";
import spss from "../../assets/images/spss.png";
import bg2 from "../../assets/images/bg2.png";
import google from "../../assets/images/google.png";
import DrawOutlineButton from "../../component/DrawOutlineButton";
import Button from "../../component/Button";

function Header() {
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48" />
                <div className="ml-auto">
                    <Button />
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

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-grow bg-cyan-600 bg-opacity-95 px-6 py-6 justify-center items-center">
                <div className="bg-gray-600 w-[400px] p-6 rounded-lg shadow-lg">
                    <h2 className="text-center text-xl font-bold text-white mb-4">
                        ĐĂNG NHẬP TÀI KHOẢN
                    </h2>
                    <div className="flex justify-center items-center">
                        <DrawOutlineButton>
                            <img src={google} alt="Google" className="h-5 w-5 mr-2"/>
                            Đăng nhập với Google
                        </DrawOutlineButton>
                    </div>
                    <p className="mt-4 text-xs text-center text-gray-400">
                        Your account is authenticated by HCMUT_SSO.
                    </p>
                </div>
                <img src={bg2} alt="Student Smart Printing Service" className="mx-10 flex h-5/6 w-1/3"/>
            </main>
            <Footer/>
        </div>
    );
}

export default LoginPage;