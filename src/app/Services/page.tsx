"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
const services = [
  {
    title: "Wedding Editing",
    description: [
      "Teaser, Highlight, Feature, Full Length edits",
      "Tailored storytelling with cinematic feel",
      "Multiple style options – romantic, modern, classic",
      "Delivered in 4K with color grading",
      "Turnaround: 1-2 weeks, Unlimited revision rounds"
    ],
  },
  {
    title: "Concert / Event Recaps",
    description: [
      "Energetic highlight reels to capture the vibe",
      "Social-media optimized formats",
      "Quick turnaround for timely sharing",
      "Multi-camera & crowd coverage"
    ],
  },
  {
    title: "Corporate Promos / Birthdays / Product Edits",
    description: [
      "Teaser, Highlight, Feature, Full Length edits",
      "Tailored storytelling",
      "Delivered in 4K with color grading",
      "Turnaround: 1-2 weeks, Unlimited revision rounds"
    ],
  },
    {
    title: "Weddings / Events Photo Edits",
    description: [
      "Lightroom Culling, retouching, and color correction",
      " AI-powered Photoshop editing to remove distractions and enhance details",
      "Tailored editing style — romantic, modern, classic",
      "Skin tone perfection and background enhancement",
      "Delivered in high-resolution, print-ready format",
      "Turnaround: 1 week, Unlimited revision rounds"

    ],
  }
];


export default function ServicePage() {
  return (
    <div>

    <div className="hidden lg:flex bg-white h-5 items-center justify-around px-4">
      {/* Gmail */}
      <Link
        href="mailto:yourmail@gmail.com"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          alt="Gmail"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">Gmail</span>
      </Link>

      {/* WhatsApp with Number */}
      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">+91 98765 43210</span>
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com/yourusername"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">Instagram</span>
      </Link>


    </div>

    <section className="bg-[#111] text-white pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold tracking-wide"
          style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}
        >
          Our Premium Editing Services
        </motion.h2>
        <p className="mt-4 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] text-gray-400 max-w-3xl mx-auto"style={{ fontFamily: '"Quicksand", sans-serif' }}>
          Every frame we touch is crafted with precision, passion, and the intent
          to create timeless memories or impactful visuals for your audience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1E1E1E] rounded-2xl p-8 border border-gray-800 hover:border-yellow-500 transition-colors"
          >
            <h3 className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] font-semibold text-yellow-500 mb-4" style={{ fontFamily: '"Quicksand", sans-serif' }}>
              {service.title}
            </h3>
            <ul className="space-y-3 text-gray-300">
              {service.description.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15px]"style={{ fontFamily: '"Quicksand", sans-serif' }}>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
}
