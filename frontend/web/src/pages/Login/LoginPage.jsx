import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import logobk from "../../assets/images/logobk.png";
import spss from "../../assets/images/spss.png";
import bg2 from "../../assets/images/bg2.png";
import google from "../../assets/images/google.png";

function Header ()
{
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48"/>
                <div className="ml-auto">
                    {/* <button className="rounded-full bg-sky-600 px-4 py-1 text-lg font-medium text-white shadow-lg hover:bg-sky-700">
                        Đăng ký
                    </button> */}
                    <button
                        className="ml-3 rounded-full bg-sky-600 px-4 py-1 text-lg font-medium text-white shadow-lg hover:bg-sky-700">
                        Trang chủ
                    </button>
                </div>
            </div>
        </div>
    )
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
            <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
                <div className="flex items-center px-6 py-3">
                    <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48" />
                    <div className="ml-auto">
                        <button className="ml-3 rounded-full bg-sky-600 px-4 py-1 text-lg font-medium text-white shadow-lg hover:bg-sky-700">
                            Trang chủ
                        </button>
                    </div>
                </div>
            </div>

            <main className="flex flex-grow bg-cyan-600 bg-opacity-95 px-6 py-6 justify-center items-center">
                <div className="bg-gray-700 w-[400px] p-6 rounded-lg shadow-lg">
                    <h2 className="text-center text-xl font-bold text-white mb-4">
                        ĐĂNG NHẬP TÀI KHOẢN
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-white font-medium mb-2" htmlFor="username">
                                Tên đăng nhập:
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-2 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                                placeholder="Nhập tên đăng nhập"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-medium mb-2" htmlFor="password">
                                Mật khẩu:
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full p-2 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập mật khẩu"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 px-3 py-2 text-black font-semibold"
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className="h-5 w-5 text-gray-600"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-white">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4"
                        >
                            Đăng nhập
                        </button>
                        <button
                            type="button"
                            className="w-full bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                        >
                            <img src={google} alt="Google" className="h-5 w-5 mr-2" />
                            Đăng nhập bằng Google
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-center text-gray-400">
                        Your account is authenticated by HCMUT_SSO.
                    </p>
                </div>
                <img src={bg2} alt="Student Smart Printing Service" className="mx-10 flex h-5/6 w-1/3" />
            </main>
        </div>
    );
}

export default LoginPage