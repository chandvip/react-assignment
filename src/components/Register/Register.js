import React from 'react';
import { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [msg, setMsg] = useState("");
    let navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault();
        let res = await axios.get("http://localhost:3000/customers_info")
        let x = res.data.filter(item => item.name === name && item.password === password && item.email === email)
        if (x.length > 0) {
            console.log("you already have registered")
            setMsg("you already have registered")

        }
        else {

            let data = {
                "name": name, "password": password, "email": email
            }
            let res2 = await axios.post("http://localhost:3000/customers_info", data)
            console.log(res2.data)
            navigate('/')
        }
    }

    return (

        <>
            <div>
                <div className="register-container">
                    <form className="register-form" onSubmit={handleRegister}>
                        <h2>Register your information!</h2>
                        <input
                            type="name"
                            placeholder="name"

                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Register</button>
                        <div className='msg'>
                            {msg}
                        </div>
                    </form>
                </div>
            </div>
        </>)
}

export default Register;