import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameList from './components/GameList.jsx'
import NeonNavbar from './components/NeonNavbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/NeonNavbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> <AuthProvider>
            <Router>
                <NeonNavbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
   
    </>
    
  </StrictMode>,
)
