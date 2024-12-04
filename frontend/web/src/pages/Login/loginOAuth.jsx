import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; //npm install @react-oauth/google
import { useNavigate } from 'react-router-dom';

const LoginOauth = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (response) => {
        // Bạn có thể xử lý token hoặc thông tin đăng nhập ở đây
        console.log('Đăng nhập thành công: ', response);
        



        // Chuyển hướng người dùng tới trang chính hoặc trang sau khi đăng nhập thành công
        navigate('/home');
    };

    const handleLoginFailure = (error) => {
        // Xử lý lỗi khi đăng nhập thất bại
        console.log('Đăng nhập thất bại: ', error);
    };

    return (
        <div className="login-container">
            <h2>Đăng nhập với Google</h2>
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                useOneTap
            />
        </div>
    );
};

export default LoginOauth;
