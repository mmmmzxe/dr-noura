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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FaceJourney/>
     <ProfileSection/>
     <Cards/>
     <ServicesSection/>
    <div className='text-center m-5 min-h-[260px] text-3xl w-[60%] mx-auto flex justify-center items-center my-5'>
    <h1>„Vitality and beauty are gifts of Nature for those who live according to its laws“</h1>
    </div>
    <HighlightTreatments/>
    <TestimonialSlider/>
    <img src='https://dromar.ch/wp-content/uploads/2023/03/Praxis_am_Zeltweg_1073-scaled.jpg.webp'></img>
     <FAQ/>
    
     <Footer/>
    
    </>
  )
}

export default App
