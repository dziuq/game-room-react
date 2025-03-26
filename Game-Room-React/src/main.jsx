import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameList from './GameList.jsx'
import NeonNavbar from './NeonNavbar.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./NeonNavbar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";

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
