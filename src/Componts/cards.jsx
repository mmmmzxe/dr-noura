import React, { useState } from "react";

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col gap-10 items-center py-10">
        <h1 className="text-5xl font-bold text-center text-black">Wählen Sie hier Ihre Journey aus
        </h1>
       <div>
       <p  className="text-md  text-center text-black">Wir bieten das gesamte Spektrum der operativen und nicht-operativen
       </p>
       <p className="text-md text-center  text-black"> Verjüngung und Verschönerung des Gesichtsbereichs an.</p>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {[{
          title: "Refresh",
          age: "Ab 20 Jahren",
          image: "https://img.freepik.com/free-photo/girl-nude-face-steam-shadow_114579-9289.jpg",
          details: ["HAUT", "BOTOX", "FILLER", "SKIN TIGHTENING", "OPERATIONEN"]
        }, {
          title: "Reshape",
          age: "35-55 Jahren",
          image: "https://img.freepik.com/free-photo/girl-nude-face-steam-shadow_114579-9289.jpg",

          details: ["HAUT", "BOTOX", "FILLER", "SKIN TIGHTENING", "OPERATIONEN"]
        }, {
          title: "Restore",
          age: "Ab 55 Jahren",
          image: "https://img.freepik.com/free-photo/girl-nude-face-steam-shadow_114579-9289.jpg",

          details: ["HAUT", "BOTOX", "FILLER", "SKIN TIGHTENING", "OPERATIONEN"]
        }].map((item, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 w-10 h-10 border-2 border-white  bg-opacity-50 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{activeIndex === index ? '×' : '+'}</span>
             
            </div>
            <div className="absolute bottom-4 right-30 ">
            <h2 className="text-xl font-semibold text-white mb-2">{activeIndex === index ? '' : `${item.title}`}</h2>
            <p className="text-lg mb-4 text-white">{activeIndex === index ? '' : `${item.age}`}</p>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#00000050] to-[#ffffffb7] bg-opacity-50 flex flex-col justify-end p-6 transition-all duration-500 transform ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
              <p className="text-lg mb-4 text-white">{item.age}</p>
              <ul className={`transition-all duration-500 transform ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {item.details.map((detail, i) => (
                  <li key={i} className="border-b border-white py-2 flex justify-between items-center text-white">
                    {detail} <span>+</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;