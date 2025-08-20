import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

const slides = [
  { image: "/Group.jpg", type: "community" },
  { type: "video", videoId: "KvezqgrNF5o" },
  { type: "video", videoId: "903of7FBtdY" },
];

const HeroSection = () => {
  const swiperRef = useRef(null);

  const ytOpts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      loop: 1,
      playlist: "",
    },
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        centeredSlides
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            data-swiper-autoplay={slide.type === "video" ? 6000 : 3000}
          >
            {slide.type === "video" ? (
              // 🎥 Video Slide
              <div className="w-full bg-black">
                <div className="relative pb-[56.25%] md:pb-0 md:h-[90vh]">
                  <YouTube
                    videoId={slide.videoId}
                    opts={{
                      ...ytOpts,
                      playerVars: {
                        ...ytOpts.playerVars,
                        playlist: slide.videoId,
                      },
                      width: "100%",
                      height: "100%",
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  {/* Overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
              </div>
            ) : (
              // 🖼️ Image Slide
              <div
                className="w-full h-[70vh] md:h-[90vh] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative text-center z-10 max-w-3xl px-4"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)] mb-4">
                    Microsoft Learn <br /> Students' Club
                  </h1>
                  <p className="text-yellow-400 text-lg md:text-2xl font-semibold tracking-wide drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] mb-10">
                    BE A FORCE FOR GOOD ✨
                  </p>

                  {/* 🌐 Social Links */}
                  <div className="flex justify-center gap-6">
                    {[
                      {
                        href: "https://www.linkedin.com/company/wce-mlsc/",
                        icon: "fab fa-linkedin",
                        color: "hover:text-blue-400",
                      },
                      {
                        href: "https://discord.gg/pYFknUjw",
                        icon: "fab fa-discord",
                        color: "hover:text-purple-400",
                      },
                      {
                        href: "http://youtube.com/@WCEMLSC",
                        icon: "fab fa-youtube",
                        color: "hover:text-red-500",
                      },
                      {
                        href: "https://chat.whatsapp.com/FYOmgQpITOsCPtd84Eme0x",
                        icon: "fab fa-whatsapp",
                        color: "hover:text-green-400",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-3xl md:text-4xl text-gray-300 ${social.color} transition transform hover:scale-110`}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
