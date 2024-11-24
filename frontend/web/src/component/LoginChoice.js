import React from 'react';

const LoginChoice = ({ navigateTo }) => {
    return (
        <div className="h-screen bg-blue-500 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">HỆ THỐNG IN ẤN THÔNG MINH HCMUT_SSPS</h1>
            <div className="flex items-center gap-4">
                <img
                    src="assets/hcmutlogo.png" //
                    alt="Logo"
                    className="w-10 h-10"
                />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
                <button
                    className="bg-teal-600 px-8 py-4 rounded text-2xl hover:bg-teal-700"
                    onClick={() => navigateTo('loginForm')}
                >
                    SPSO
                </button>
                <button
                    className="bg-teal-600 px-8 py-4 rounded text-2xl hover:bg-teal-700"
                    onClick={() => navigateTo('loginForm')}
                >
                    PS
                </button>
            </div>
        </div>
    );
};

export default LoginChoice;
