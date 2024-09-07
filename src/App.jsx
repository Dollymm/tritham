import React from 'react'
import Home from './pages/Home'

import Header from './pages/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './pages/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Explore from './pages/Explore'

import Roompage from './pages/Roompage'

const App = () => {
  return (
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/room' element={<Roompage/>}/>
    </Routes>
      
      <Footer/>
    
    </BrowserRouter>
  )
}

export default App