import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./compoents/LandingPage";
import GamesPage from './compoents/GamesPage';
import ShopPage from './compoents/ShopPage';
import CapivaraRoleta from './compoents/CapivaraRoleta';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/GamesPage' element={<GamesPage/>} />
          <Route path='/ShopPage' element={<ShopPage/>} />
          <Route path='/CapivaraRoleta' element={<CapivaraRoleta/>} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
