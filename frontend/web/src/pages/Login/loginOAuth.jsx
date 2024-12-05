import React from 'react'; //npm install jwt-decode
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google'; //npm install @react-oauth/google
import { useNavigate } from 'react-router-dom';

const LoginOauth = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (response) => {

        console.log('Đăng nhập thành công: ', response);
        
        const decoded = jwtDecode(response.credential);
        console.log('Thông tin người dùng từ token: ', decoded);

        
        const { name, email, picture } = decoded;
        console.log('Tên người dùng: ', name);
        console.log('Email: ', email);
        console.log('Ảnh đại diện: ', picture);
        
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
