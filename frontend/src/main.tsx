import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./compoents/LandingPage";
import GamesPage from './compoents/GamesPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/GamesPage' element={<GamesPage/>} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
