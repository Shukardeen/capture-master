import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen text-primary relative bg-black py-44 bg-cover flex items-center justify-center"
    >
      <video className="absolute w-full h-full object-cover opacity-30" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/2239241/2239241-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-10 max-w-6xl mx-auto flex flex-col justify-center items-center mt-8 md:m-0">
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight leading-tight whitespace-nowrap">
          Capture Master
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-300 font-light">
          Photography & Films
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="bg-primary hover:bg-white text-secondary px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
