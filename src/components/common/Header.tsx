"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import StarBorder from "../starborder"; 
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="relative flex items-center justify-between p-6 lg:p-8 z-20 w-full">
        <div className="text-white">
          <h1 className="text-xl lg:text-2xl font-light tracking-wider">CRYSTALKnot</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a
            href="#Home"
            className="text-white/90 hover:text-white transition-colors text-sm lg:text-base tracking-wide"
          >
            HOME
          </a>
          <a
            href="#About"
            className="text-white/90 hover:text-white transition-colors text-sm lg:text-base tracking-wide"
          >
            ABOUT
          </a>
          <a
            href="#Portfolio"
            className="text-white/90 hover:text-white transition-colors text-sm lg:text-base tracking-wide"
          >
            PORTFOLIO
          </a>
          <a
            href="#Services"
            className="text-white/90 hover:text-white transition-colors text-sm lg:text-base tracking-wide"
          >
            SERVICES
          </a>

          {/* Desktop CONTACT button using StarBorder */}
          <StarBorder
            as="a"
            href="#contact"
            color="white"
            speed="4s"
            thickness={1}
            className="text-sm lg:text-base tracking-wide"
          >
            CONTACT
          </StarBorder>
        </nav>
      </header>

      {/* Mobile Menu Toggle Button */}
      {!isMenuOpen && (
        <button
          className="md:hidden text-white p-3 rounded-full bg-black/20 fixed top-6 right-6 z-30"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Close Button */}
          <button
            className="md:hidden text-white p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 fixed top-6 right-6 z-50"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Fullscreen Overlay Menu */}
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300">
            <nav className="flex flex-col items-center justify-center h-full space-y-12 px-6">
              <div className="text-center space-y-8">
                <a
                  href="#Home"
                  className="block text-white text-2xl tracking-wide hover:text-white/80 transition-colors transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#About"
                  className="block text-white text-2xl tracking-wide hover:text-white/80 transition-colors transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#Portfolio"
                  className="block text-white text-2xl tracking-wide hover:text-white/80 transition-colors transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PORTFOLIO
                </a>
                <a
                  href="#investments"
                  className="block text-white text-2xl tracking-wide hover:text-white/80 transition-colors transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICES
                </a>
              </div>

              {/* Mobile CONTACT button using StarBorder */}
              <StarBorder
                as="a"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                color="white"
                speed="4s"
                className="text-2xl tracking-wide"
              >
                CONTACT
              </StarBorder>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
