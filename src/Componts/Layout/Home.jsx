import React from 'react'
import ProfileSection from '../ProfileSection'
import Cards from '../cards'
import ServicesSection from '../ServicesSection'
import HighlightTreatments from '../HighlightTreatments'
import TestimonialSlider from '../TestimonialSlider'
import FAQ from '../FAQ'
import InstagramSection from '../Reals'
import FaceJourney from '../Hero'

export default function Home() {
  return (
    <div>
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
     <InstagramSection/>
    </div>
  )
}
