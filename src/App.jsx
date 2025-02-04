import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileSection from './Componts/ProfileSection'
import FaceJourney from './Componts/Hero'
import Cards from './Componts/cards'
import Footer from './Componts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FaceJourney/>
     <ProfileSection/>
     <Cards/>
     <Footer/>
    </>
  )
}

export default App
