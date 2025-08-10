import React from 'react'
import { Hero } from '../components/Home/Hero'
import Faq from '../components/Home/Faq'
import Story from "../components/Home/Story";
import Testimonial from "../components/Home/Testimonial";
import MarqueeDemo from "../components/Home/marquee-demo";
import ParallaxHero from "../components/Home/Parallax";
import Brands from "../components/Home/Brands";
import ContactForm from "../components/common/ContactForm";
import Pricing from "../components/Home/Pricing";

function Page() {
  return (
    <div>
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
          <Pricing />
        </section>
        <section className="relative z-10 bg-[#f5f5f5]">
          <ContactForm />
        </section>
    </div>
  );
}

export default Page;
