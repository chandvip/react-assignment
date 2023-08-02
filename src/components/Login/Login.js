import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        var res = await axios.get("http://localhost:3000/customers_info")
        console.log(res.data)
        var dt = res.data.filter(item => item.email === email && item.password === password)
        if (dt.length > 0) {
            console.log("Login succesful")
            navigate('/dashboard')
        }
        else {
            console.log("please enter correct info.")

        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"

                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <h6>Don't have you account?
                    <button className='btn'>
                        <NavLink className='register-link' to='/register'>
                            Register
                        </NavLink>
                    </button>
                </h6>
            </form>
        </div >
    );
};

export default Login;
