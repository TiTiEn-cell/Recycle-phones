import React from 'react';
import './Login.css';
import loginImage from '../assets/images/login.png';
import logoImage from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-image">
                <img src={loginImage} alt="E-Waste Recycling" />
            </div>
            <div className="login-form">
                <div className="logo">
                    <img src={logoImage} alt="Logo" />
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
                <div className="signup-link">
                    <p>Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
