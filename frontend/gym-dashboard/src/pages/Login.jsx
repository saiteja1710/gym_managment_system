import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/admin/login", { username, password });
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-3"
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3"
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
