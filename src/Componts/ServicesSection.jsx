import React from 'react';

const ServicesSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* 3D Analyse Section */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center overflow-hidden justify-center relative">
        <div className="absolute inset-0 bg-[#000000d2] "></div>
        <img 
          src="https://dromar.ch/wp-content/uploads/2023/01/Praxis_am_Zeltweg_0726-3-2048x1440-1.jpg.webp" 
          alt="3D Analyse" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-500 ease-in-out transform hover:scale-110" 

        />
        <div className="relative text-center w-[65%] text-white p-4">
          <h2 className="text-3xl font-semibold mb-4">3D Analyse</h2>
          <p className="mb-4">
            On the "Journey of the Face", Dr. Omar's holistic treatment concept, 
            we make our first stop at the 3D face and skin analysis.
          </p>
          <button className="text-sm font-bold tracking-widest border-b-2 border-white">MORE</button>
        </div>
      </div>

      {/* Morpheus 8 Section */}
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0  bg-[#000000d2]  "></div>
        <img 
          src="https://dromar.ch/wp-content/uploads/2023/02/Morpheus8-2048x1440-1.jpg.webp" 
          alt="Morpheus 8" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-500 ease-in-out transform hover:scale-110" 

        />
        <div className="relative text-center w-[65%] text-white p-4">
          <h2 className="text-3xl font-semibold mb-4">Morpheus 8</h2>
          <p className="mb-4">
            Morpheus8 is an advanced skin tightening and rejuvenation procedure 
            that uses a combination of microneedling and radio frequency energy.
          </p>
          <button className="text-sm font-bold tracking-widest border-b-2 border-white">MORE</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
