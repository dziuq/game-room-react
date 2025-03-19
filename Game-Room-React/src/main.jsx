import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameList from './GameList.jsx'
import NeonNavbar from './NeonNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <NeonNavbar/>
    <GameList/>
    </>
    
  </StrictMode>,
)
