import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"; // استيراد framer-motion مع AnimatePresence
import logo from '../assets/logo.png';
import { MdClose } from "react-icons/md";
import { FaPhone, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import Button from "../locales/Button";
import { CiMenuFries } from 'react-icons/ci';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed bg-gradient-to-t z-50 to-[#ffffff] top-0 py-2 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex flex-col items-center space-x-4">
          <img src={logo} alt="Logo" className="w-16 h-16 object-cover" />
          <h6 className="text-sm">Dr. NOURA FOUAD</h6>
        </div>
        <div className="flex items-center gap-6">
          <Button />
          <button className="md:px-4 px-2 py-2 border bg-[#dfdcd4] text-black md:text-[14px] text-[10px] hover:bg-white hover:border-[#dfdcd4] transition duration-500">
            BOOK AN APPOINTMENT
          </button>
          <motion.button 
            whileHover={{ rotate: 90 }} 
            transition={{ duration: 0.3 }} 
            onClick={() => setIsMenuOpen(true)}
          >
            <CiMenuFries className='font-extralight' size={35} />
          </motion.button>
        </div>
      </div>

      {/* Full-screen menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#f8f6f3] z-50 h-auto flex justify-center items-center"
            onClick={() => setIsMenuOpen(false)} // إغلاق القائمة عند الضغط خارجها
          >
            <motion.div 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="container mx-auto w-full p-5 relative"
              onClick={(e) => e.stopPropagation()} // منع إغلاق القائمة عند النقر داخلها
            >
              <div className="flex justify-end">
                <motion.button 
                  whileHover={{ rotate: 90, scale: 1.2 }} 
                  transition={{ duration: 0.3 }}
                  className="absolute top-5 right-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdClose size={40} />
                </motion.button>
              </div>

              <div className="flex flex-col md:flex-row gap-5 md:justify-between justify-end mt-10 items-center w-full">
                <motion.nav 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xl space-y-6 mt-10"
                >
                  {["Home", "Journey of the Face", "3D Analysis", "Treatments", "About", "Academy", "Social Projects", "Press Articles"].map((item, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      whileHover={{ scale: 1.1, color: "#000" }} 
                      transition={{ duration: 0.2 }}
                      className="block text-gray-700 hover:text-black focus:text-black transition duration-300"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.nav>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-full md:w-1/3"
                >
                  <img src="" alt="Face" className="w-full object-cover rounded-lg shadow-lg" />
                </motion.div>
              </div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-5 md:justify-between justify-end p-10 items-center"
              >
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
                  <p className="mt-4 flex items-center gap-2">
                    <FaPaperPlane /> info@dromar.ch
                  </p>
                  <p className="mt-2 flex items-center gap-2">
                    <FaWhatsapp /> WhatsApp
                  </p>
                  <p className="mt-2 flex items-center gap-2">
                    <FaPhone /> Phone: +41 44 515 7744
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
