import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Services from './pages/services/Services.jsx'
import Privacy from './pages/privacy/Privacy.jsx'
import Terms from './pages/terms/Terms.jsx'
import Consultancy from './pages/consultancy/Consultancy.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/consultancy" element={<Consultancy />}/>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
