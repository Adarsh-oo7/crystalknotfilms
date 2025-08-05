"use client";


import { useState } from "react";
import About from '@/components/Home/About'
import { Loader } from '../components/common/Loader'
import FluidCursor from '../components/FluidCursor'
import { Hero } from '../components/Home/Hero'
import React from 'react'
import Moments from '../components/Home/Moments'
import Parallax from '../components/Home/Parallax'
import HomePortfolio from '../components/Home/HomePortfolio'
import { HowItWorks } from '@/components/Home/HowItWorks'
import Portfolio from '@/components/Home/Portfolio'
import Faq from '@/components/Home/Faq'

import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";


function page() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", link: "#about" },
    { name: "PORTFOLIO", link: "#Portfolio" },
    { name: "SERVICES", link: "#Service" },
    { name: "HOW IT WORKS", link: "#HowItWorks" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <div>
      {/* <Loader loadingTime={3000}>
      {" "} */}
      {/* The page content will appear after 3 seconds */}
      <FluidCursor />
      <Navbar>
        
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="#contact">Get in Touch</NavbarButton>
        </NavBody>

        
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-black dark:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="#contact">Get in Touch</NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <Hero />
      <About />
      <HowItWorks />
      <Faq />
      <Portfolio />
      {/* <Moments/> */}
      {/* <Parallax/> */}
      {/* <HomePortfolio/> */}
      {/* </Loader> */}
    </div>
  )
}

export default page
