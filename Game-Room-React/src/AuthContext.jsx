import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = async (username, password) => {
        try {
            const res = await axios.post("https://localhost:7071/auth/login", { username, password });
            localStorage.setItem("token", res.data.token);
            setUser({ token: res.data.token });
        } catch (err) {
            console.error("Login failed", err);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};