import React, { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScolled(scrollTop > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 h-20 w-full ${!!isScrolled ? "bg-black/70 backdrop-blur-2xl shadow-lg" : "bg-transparent"} text-primary z-50 transition-all duration-300 flex justify-between items-center`}>
      <div className="w-1/2 md:w-2/5 pl-4 md:px-16 box-border flex flex-col">
        <h2 className="text-lg md:text-2xl font-bold tracking-tight">
          CaptureMaster
        </h2>
        <p className="text-sm font-medium whitespace-nowrap">Photography & Films</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden w-3/5 pl-16 box-border md:block">
        <div className="ml-12 flex items-baseline space-x-8">
          {["home", "services", "portfolio", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={(e) => scrollToSection(item)}
              className="px-4 py-3 rounded-lg text-sm font-medium hover:text-white transition-all duration-200 relative group cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden w-1/2 flex justify-end items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none p-2 rounded-lg transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-4">
          <div className="h-full px-10 py-3 flex flex-col justify-center items-center gap-3 rounded-md bg-white">
            {["home", "services", "portfolio", "about", "contact"].map(
              (item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item)}
                  className="w-full text-base font-medium text-secondary transition-all duration-200"
                >
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
