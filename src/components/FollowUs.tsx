"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaShare,
  FaTimes,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";

function FollowUs(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setIsVisible(false);
          setIsOpen(false); // Also close dropdown when hiding
        } else {
          // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-22 right-8 z-50 transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      {/* Main Floating Button */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`bg-white text-black hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 px-4 py-2 gap-2 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? <FaTimes className="text-lg" /> : <FaShare className="text-lg" />}
          <span className="text-sm font-medium animate-pulse">Follow Us</span>
        </button>

        {/* Animated Social Icons */}
        <div className={`absolute top-16 right-0 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          
          {/* Email */}
          <div className={`mb-3 transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
            <Link
              href="mailto:info@crystalknotfilms.com"
              className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 ml-auto animate-bounce"
              title="Email Us"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="text-lg" />
            </Link>
          </div>
          
          {/* WhatsApp */}
          <div className={`mb-3 transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
            <Link
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 ml-auto animate-bounce"
              title="WhatsApp"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: '0.1s' }}
            >
              <FaWhatsapp className="text-lg" />
            </Link>
          </div>
          
          {/* Instagram */}
          <div className={`mb-3 transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}>
            <Link
              href="https://www.instagram.com/crystalknotfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 ml-auto animate-bounce"
              title="Instagram"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: '0.2s' }}
            >
              <FaInstagram className="text-lg" />
            </Link>
          </div>
          
          {/* Facebook */}
          <div className={`mb-3 transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
            <Link
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 ml-auto animate-bounce"
              title="Facebook"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: '0.3s' }}
            >
              <FaFacebookF className="text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes wiggle {
          0%, 7%, 14%, 21% {
            transform: rotate(0deg);
          }
          3.5% {
            transform: rotate(-3deg);
          }
          10.5%, 17.5% {
            transform: rotate(3deg);
          }
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default FollowUs;