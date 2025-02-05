import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const treatments = [
  {
    title: "Breast enlargement with autologous fat",
    description:
      "Breast augmentation with autologous fat, also known as lipofilling, is an excellent alternative for many women to enlarge their breasts with a natural appearance without having to resort to traditional breast surgery with implants.",
    image: "/path-to-image1.jpg",
  },
  {
    title: "Breast enlargement with implants",
    description:
      "Breast augmentation with implants is a proven method for women seeking a natural appearance without relying on the use of autologous fat.",
    image: "/path-to-image2.jpg",
  },
  {
    title: "Profile Balancing",
    description:
      "Treatment with fillers such as hyaluronic acid can enlarge lips, correct the shape of the nose or model the chin. Profile Balancing, also known as Profiloplasty, is a holistic treatment that combines various procedures.",
    image: "/path-to-image3.jpg",
  },
];

const HighlightTreatments = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="w-full bg-[#dfdcd4] min-h-screen  py-20 text-center relative">
     <div className=" mx-auto ">
     <div className="flex items-center justify-around mb-6">
        <button
          className="text-[#5b4b3c] hover:text-black mr-4"
          onClick={() => sliderRef.current.slickPrev()}
        >
           <AiOutlineArrowLeft size={40} />
        </button>
        <h2 className="text-3xl font-semibold">Highlight-Treatments</h2>
        <button
          className="text-[#5b4b3c] hover:text-black ml-4"
          onClick={() => sliderRef.current.slickNext()}
        >
                 <AiOutlineArrowRight size={40} />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings} className="relative w-[70%] flex items-center text-left justify-center mx-auto">
        {treatments.map((treatment, index) => (
          <div key={index} className="px-4">
            <div className=" rounded-lg h-[600px]  flex flex-col justify-around overflow-hidden ">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{treatment.title}</h3>
                <p className="text-[#5b4b3c] mb-4">{treatment.description}</p>
                <a
                  href="#"
                  className="text-black font-semibold flex items-center justify-center"
                >
                  MORE <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
     </div>

    </div>
  );
};

export default HighlightTreatments;
