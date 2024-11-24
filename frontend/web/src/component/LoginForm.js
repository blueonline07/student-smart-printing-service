import React, { useState } from 'react';

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="h-screen bg-blue-500 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-6">Đăng nhập tài khoản</h1>
            <div className="bg-white text-black p-8 rounded shadow-lg w-1/3">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Tên đăng nhập:</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Nhập tên đăng nhập"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Mật khẩu:</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="w-full p-2 border rounded"
                            placeholder="Nhập mật khẩu"
                        />
                        <button
                            className="absolute right-2 top-2 text-gray-500"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? 'Ẩn' : 'Hiện'}
                        </button>
                    </div>
                </div>
                <button className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">
                    Đăng nhập
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
