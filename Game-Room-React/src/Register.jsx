import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:7071/auth/register", {
                username,
                email,
                password,
            });

            console.log(response.data);
            navigate("/login"); // Po rejestracji przekierowujemy do strony logowania
        } catch (err) {
            setError("Rejestracja nie powiodła się. Spróbuj ponownie.");
        }
    };

    return (
        <div className="register-form">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="neon-input"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="neon-input"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="neon-input"
                    />
                </div>
                <button className= "neon-button" type="submit">sign up</button>
            </form>
        </div>
    );
};

export default Register;