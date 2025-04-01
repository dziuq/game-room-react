import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) return <Navigate to="/login" />;

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;