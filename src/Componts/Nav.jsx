import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { MdMenu, MdClose } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import Button from "../locales/Button";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed bg-gradient-to-t z-50 to-[#ffffffee] top-0 py-2 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-16 h-16 object-cover" />
          <h6 className="text-sm">Dr. Omar Haroon</h6>
        </div>
        <div className="flex items-center gap-6">
          <Button />
          <button className="px-4 py-2 border bg-[#dfdcd4] text-black text-[14px] hover:bg-white hover:border-[#dfdcd4] transition duration-500">
            BOOK AN APPOINTMENT
          </button>
          <button onClick={() => setIsMenuOpen(true)}>
            <MdMenu size={40} />
          </button>
        </div>
      </div>
      
      {/* Full-screen menu */}
      <div className={`fixed inset-0 bg-[#f8f6f3] z-50 h-auto flex justify-center items-center  transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <div className=' container mx-auto '>
     <div className='flex justify-around items-center  w-full'>
    
         
            <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
              <MdClose size={40} />
            </button>
         <div className='flex justify-between mt-10 items-center w-full'> 
         <nav className="text-xl space-y-6 mt-10">
              <a href="#" className="block font-semibold text-gray-700 hover:text-black">Home</a>
              <a href="#" className="block text-gray-700 hover:text-black">Journey of the Face</a>
              <a href="#" className="block text-gray-700 hover:text-black">3D Analysis</a>
              <a href="#" className="block text-gray-700 hover:text-black">Treatments</a>
              <a href="#" className="block text-gray-700 hover:text-black">About</a>
              <a href="#" className="block text-gray-700 hover:text-black">Academy</a>
              <a href="#" className="block text-gray-700 hover:text-black">Social Projects</a>
              <a href="#" className="block text-gray-700 hover:text-black">Press Articles</a>
            </nav>
        
         
      <div>
         
      <img src="../assets/face.jpg" alt="Face" className="w-full object-cover" />
      </div>

         </div>
     </div>

        <div className=" flex  justify-between p-10 items-center">
        <div className="text-sm text-gray-600">
            <p>Opening hours</p>
            <p>Practice Mo–Fr 09:30–18:30</p>
            <p>Phone Mo–Fr 09:30–12:00 & 13:00–18:30</p>
          </div>
          <div className="text-center text-gray-600">
            <p>Dr. Omar Haroon – Boutique Praxis</p>
            <p>Plastic & Aesthetic Surgery</p>
            <p>Zeltweg 48 | 8032 Zürich</p>
           
          </div>
          <div>
          <p className="mt-4 flex items-center justify-center gap-2">
              <FaPaperPlane /> info@dromar.ch
            </p>
            <p className="mt-2 flex items-center justify-center gap-2">
              <FaWhatsapp /> WhatsApp
            </p>
            <p className="mt-2 flex items-center justify-center gap-2">
              <FaPhone /> Phone: +41 44 515 7744
            </p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}