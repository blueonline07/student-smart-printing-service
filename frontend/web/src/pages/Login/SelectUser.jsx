import React from 'react';
import logo from "../../assets/images/logo.png";
import hcmut from "../../assets/images/hcmut.png";
import logobk from "../../assets/images/logobk.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import Example from "../../component/Example";
import ButtonWrapper from "../../component/Button";

function Header() {
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48"/>
                <div className="ml-auto">
                    <ButtonWrapper />
                </div>
            </div>
        </div>
    );
}

function SelectUser() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header/>
            <div className="flex flex-grow bg-cyan-600 bg-opacity-95 px-6 py-6 justify-center">
                <div className="flex flex-col items-center">
                    <h2 className="pt-2 text-5xl font-semibold text-[#ffffff]">
                        HỆ THỐNG IN ẤN THÔNG MINH
                    </h2>
                    <img src={hcmut} alt="HCMUT" className="mt-8 h-auto w-3/6 mx-auto"/>
                    <img src={logobk} alt="logobk" className="mt-8 h-auto w-2/6 mx-auto"/>
                    <div className="flex mt-8 space-x-4">
                        <Example text="SPSO" icon={icon2} />
                        <Example text="PS" icon={icon1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectUser;