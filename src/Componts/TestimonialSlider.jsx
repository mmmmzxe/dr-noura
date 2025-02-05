import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Jelena Cukic",
    rating: 5,
    text: "Das gesamte Team ist äusserst freundlich und kompetent. Dr. Haroon nimmt sich viel Zeit für seine Patienten/-innen und arbeitet makellos. Ich fühle mich stets gut aufgehoben und würde die Praxis jedem weiterempfehlen!"
  },
  {
    name: "Jelena Cukic",
    rating: 5,
    text: "Das gesamte Team ist äusserst freundlich und kompetent. Dr. Haroon nimmt sich viel Zeit für seine Patienten/-innen und arbeitet makellos. Ich fühle mich stets gut aufgehoben und würde die Praxis jedem weiterempfehlen!"
  },
  {
    name: "Jelena Cukic",
    rating: 5,
    text: "Das gesamte Team ist äusserst freundlich und kompetent. Dr. Haroon nimmt sich viel Zeit für seine Patienten/-innen und arbeitet makellos. Ich fühle mich stets gut aufgehoben und würde die Praxis jedem weiterempfehlen!"
  },
  {
    name: "Jelena Cukic",
    rating: 5,
    text: "Das gesamte Team ist äusserst freundlich und kompetent. Dr. Haroon nimmt sich viel Zeit für seine Patienten/-innen und arbeitet makellos. Ich fühle mich stets gut aufgehoben und würde die Praxis jedem weiterempfehlen!"
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    easing: "ease",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="max-w-2xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Patient Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" bg-[#e6e3dd] p-6 rounded-lg shadow-md">
            <div className=" p-4 bg-[#dfdcd4] rounded-t-lg font-semibold">
              {testimonial.name}
            </div>
            <div className=" p-6 rounded-b-lg">
              <div className="text-yellow-500 text-lg mb-2">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
