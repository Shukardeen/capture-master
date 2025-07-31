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
      <div className="w-2/5 px-16 box-border">
        <h1 className="text-2xl font-bold tracking-tight">
          CaptureMaster
        </h1>
        <p className="text-sm font-medium">Photography & Films</p>
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
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden">
          <div className="px-6 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
            {["home", "services", "portfolio", "about", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
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
