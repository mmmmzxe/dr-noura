import React from "react";

import Nav from "./Nav";
const FaceJourney = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://img.freepik.com/free-photo/woman-morning-with-black-white-effect_23-2147656965.jpg"
        alt="Face Close-up"
        className="absolute w-full h-full object-cover brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
    
      <div className="absolute left-14 bottom-32 text-left max-w-md">
        <h1 className="text-4xl font-bold text-black">Journey of the Face<sup>®</sup></h1>
        <p className="mt-4 text-black text-lg">
          Life is a journey. We change over the years. We cannot stop the time, even if we wanted. But the clock all leave inconspicuously slightly slower ticking?
        </p>
        <a href="#" className="mt-6 inline-block text-black font-bold underline">MORE →</a>
      </div>
     <Nav/>
    
    </div>
  );
};

export default FaceJourney;
