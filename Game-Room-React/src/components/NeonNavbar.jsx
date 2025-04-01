import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";


const NeonNavbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <nav className="neon-navbar">
            <div className="logo">Video Games</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Top Games</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Contact</a></li>
                <li>  {user ? (
                    <button onClick={handleLogout} style={{ marginRight: "10px" }}>Logout</button>
                ) : (
                    <>
                        <button onClick={handleLogin} className="neon-button"  style={{ marginRight: "10px" }}>LOGIN</button>
                        <button onClick={handleRegister} className="neon-button" >SIGN UP</button>
                    </>
                )}</li>
            </ul>
            
        </nav>
    );
};

export default NeonNavbar;
