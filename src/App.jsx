import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileSection from './Componts/ProfileSection'
import FaceJourney from './Componts/Hero'
import Cards from './Componts/cards'
import Footer from './Componts/Footer'
import FAQ from './Componts/FAQ'
import ServicesSection from './Componts/ServicesSection'
import TestimonialSlider from './Componts/TestimonialSlider'
import HighlightTreatments from './Componts/HighlightTreatments'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componts/Layout/Home'
import Nav from './Componts/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    
     <Footer/>
    
    </BrowserRouter>
  )
}

export default App
