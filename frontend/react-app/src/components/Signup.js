import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css";
import loginImage from "../assets/images/login.png";
import logoApp from "../assets/images/logo.png";

const Signup = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không khớp.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/signup', {
                phone,
                password
            });
            setSuccess('Đăng ký thành công! Vui lòng đăng nhập.');
            setError('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
            // Bạn có thể chuyển hướng người dùng tới trang đăng nhập tại đây
        } catch (error) {
            console.error(error);
            setError('Đã có lỗi xảy ra trong quá trình đăng ký.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src={loginImage} alt="E-Waste Recycling" />
            </div>
            <div className="login-form">
                <div className="logo">
                    <img src={logoApp} alt="Logo" />
                </div>
                <h2>Đăng ký hệ thống</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="SĐT"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button type="submit">Đăng ký</button>
                </form>
                <div className="login-link">
                    <p>Đã có tài khoản? <Link to="/">Đăng nhập</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
