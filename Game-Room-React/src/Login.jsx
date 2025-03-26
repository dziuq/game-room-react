import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Wysyłamy dane logowania do backendu
            const response = await axios.post("http://localhost:7071/api/auth/login", {
                username,
                password,
            });

            console.log(response.data);
            navigate("/dashboard"); // Po udanym logowaniu przekierowujemy do dashboardu
        } catch (err) {
            setError("Logowanie nie powiodło się. Sprawdź dane.");
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register"); // Przekierowanie do strony rejestracji
    };

    return (
        <div className="login-container">
            <h2 className="neon-text">WELCOME BACK GAMER!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="neon-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="neon-input"
                />
                </div>
                  <button type="submit" className="neon-button">
                    <span className="button-text">INSERT<br />COIN</span>
                </button>
            </form>
            <p className="neon-text">
                No account, no problem{" "}
                <button  className="neon-button-signup" onClick={handleRegisterRedirect}>SIGN UP</button>
            </p>
        </div>
    );
};

export default Login;