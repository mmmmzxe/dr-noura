import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import v1 from "../assets/Fonts/1.MP4";
import v2 from "../assets/Fonts/2.MP4";
import v3 from "../assets/Fonts/3.MP4";
import v4 from "../assets/Fonts/4.MP4";

const InstagramSection = () => {
  const videos = [
    {
      thumbnail: "/images/thumb1.jpg",
      videoSrc: v1,
      title: "A Legacy of Elegance & Enhancement",
    },
    {
      thumbnail: "/images/thumb2.jpg",
      videoSrc: v2,
      title: "Prevention & Regeneration",
    },
    {
      thumbnail: "/images/thumb3.jpg",
      videoSrc: v3,
      title: "Inside the World's Largest",
    },
    {
      thumbnail: "/images/thumb4.jpg",
      videoSrc: v4,
      title: "The Power of Skin Longevity",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold mb-6">Instagram</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        modules={[Navigation]}
        className="relative"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.play();
      const playTimeout = setTimeout(() => {
        vid.pause();
      }, 4000); // يوقف الفيديو بعد 4 ثواني

      return () => clearTimeout(playTimeout);
    }
  }, []);

  const handleMouseEnter = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.play();
      setIsPlaying(true);
      setTimeout(() => {
        vid.pause();
        setIsPlaying(false);
      }, 130000); // يوقف الفيديو بعد 4 ثواني
    }
  };

  const handleMouseLeave = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        muted
        loop
        poster={video.thumbnail}
      >
        <source src={video.videoSrc} type="video/mp4" />
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 bottom-[350px] left-36 flex items-center justify-center  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-200/40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default InstagramSection;