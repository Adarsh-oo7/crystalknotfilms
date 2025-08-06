"use client";


import { useState } from "react";
import { Loader } from '../components/common/Loader'
import FluidCursor from '../components/FluidCursor'
import { Hero } from '../components/Home/Hero'
import React from 'react'
import { HowItWorks } from '@/components/Home/HowItWorks'
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
import Story from "@/components/Home/Story";
import Testimonial from "@/components/Home/Testimonial";
import MarqueeDemo from "@/components/Home/marquee-demo";


function Page() {

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
      <Loader loadingTime={3000}>
        {" "}
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
      <Story />
      <Testimonial />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <MarqueeDemo />
      </div>
      {/* <HowItWorks /> */}
      <Faq />

      </Loader>
    </div>
  )
}

export default Page
