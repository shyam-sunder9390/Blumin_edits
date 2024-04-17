import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Academia from './pages/Academia'
import Industry from './pages/Industry'
import ContactUs from './pages/ContactUs'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-16 p-5 min-h-full bg-[#f9f9f9]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academia' element={<Academia />} />
          <Route path='/industry' element={<Industry />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
