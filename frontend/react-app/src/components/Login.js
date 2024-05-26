import React from 'react';
import './Login.css'; // Tạo file CSS để style
import loginImage from '../assets/images/login.png'; // Đảm bảo đường dẫn tới hình ảnh đúng

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-image">
                <img src={loginImage} alt="E-Waste Recycling" />
            </div>
            <div className="login-form">
                <div className="logo">
                    <img src="https://example.com/logo.png" alt="Logo" /> {/* Thay bằng đường dẫn tới logo của bạn */}
                </div>
                <h2>Đăng nhập hệ thống</h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="SĐT" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
