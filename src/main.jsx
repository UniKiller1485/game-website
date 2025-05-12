import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from './pages/aboutPage.jsx';
import './App.css'
import './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
   <Route index element={<App />} />
   <Route path ='/about' element={<AboutPage />} />
  </Routes>
</BrowserRouter>,
)
