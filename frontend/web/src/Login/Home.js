import React from 'react';
import HeaderSection from "../component/headerSection";
import FooterSection from "../component/footerSection";

const Home = ({ navigateTo }) => {
    return (
        // <div className="h-screen flex">
        //     {/* Left Section */}
        //     <div className="flex-1.2 bg-[#00C0EF] flex flex-col justify-between items-center text-white">
        //         {/* Content for Left Section */}
        //     </div>
        //
        //     {/* Middle Section */}
        //     <div className="flex-7 bg-[#00C0EF] flex flex-col justify-between items-center text-white">
        //         {/* Header Section */}
        //         <div className="w-full flex justify-between items-center px-8 py-4 bg-blue-600">
        //             <div className="flex items-center gap-4">
        //                 <img
        //                     src="assets/hcmutlogo.png"
        //                     alt="Logo"
        //                     className="w-10 h-10"
        //                 />
        //                 <h1 className="text-lg font-bold uppercase">Student Smart Printing Service</h1>
        //             </div>
        //             <button
        //                 className="bg-teal-600 px-4 py-2 rounded hover:bg-teal-700"
        //                 onClick={() => navigateTo('login')}
        //             >
        //                 Đăng nhập
        //             </button>
        //         </div>
        //
        //         {/* Main Content */}
        //         <div className="flex flex-col items-center text-center px-8">
        //             <h1 className="text-4xl font-bold mb-6">HỆ THỐNG IN ẤN THÔNG MINH HCMUT_SSPS</h1>
        //             <p className="mb-8 text-lg">
        //                 Đây là hệ thống in ấn tài liệu tại Trường Đại học Bách khoa - ĐHQG-HCM được thiết kế để tự động hóa và tối ưu trải nghiệm người dùng.
        //             </p>
        //             <img
        //                 src="assets/homepage.png"
        //                 alt="Illustration"
        //                 className="w-1/2 max-w-md"
        //             />
        //             <button
        //                 className="mt-6 bg-gray-700 px-6 py-2 rounded hover:bg-gray-800"
        //                 onClick={() => navigateTo('moreInfo')}
        //             >
        //                 Tìm hiểu thêm
        //             </button>
        //         </div>
        //
        //         {/* Footer */}
        //         <footer className="w-full bg-gray-800 py-4 text-center text-sm">
        //             <p>Ban quản lý in ấn thông minh / SPSO</p>
        //             <p>Email: <a href="mailto:spso@hcmut.edu.vn" className="text-teal-400 hover:underline">spso@hcmut.edu.vn</a></p>
        //             <p>ĐT (Tel.): (84-8) 38647256 - 5258</p>
        //         </footer>
        //     </div>
        //
        //     {/* Right Section */}
        //     <div className="flex-1.8 bg-[#6A737B] flex flex-col justify-between items-center text-white">
        //         {/* Content for Right Section */}
        //     </div>
        // </div>
        <div className = "h-screen flex">
            <div className = "h-screen">
                <HeaderSection onLoginClick={() => navigateTo('login')} />
            </div>

            {/* Middle Section */}

            <div className = "h-screen flex flex-col justify-between">
                <FooterSection/>
            </div>
        </div>
    );
};

export default Home;