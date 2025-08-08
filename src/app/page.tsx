

import { useState } from "react";
import { Loader } from '../components/common/Loader'
import FluidCursor from '../components/FluidCursor'
import { Hero } from '../components/Home/Hero'
import React from 'react'
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
import ParallaxHero from "@/components/Home/Parallax";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import Pricing from "@/components/Home/Pricing";

function Page() {
  return (
    <div>
      <Loader loadingTime={3000}>
        <FluidCursor />
        <div className="relative">
          <Hero />
          <Story />
        </div>
        <div className="relative inset-0 z-0">
          <ParallaxHero />
        </div>
        <section className="relative z-0 bg-[#1E1E1E]">
          <Testimonial />
        </section>
        <MarqueeDemo />
        <Faq />
        <Brands />
                <section className="relative z-10 bg-[#1E1E1E]">
<Pricing/>
        </section>
        <section className="relative z-10 bg-[#f5f5f5]">
          <ContactForm />
        </section>
        
      </Loader>
    </div>
  );
}

export default Page;
