"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import VideoBanner from "@/components/common/Video-banner";

const services = [
  {
    title: "Wedding Editing",
    description: [
      "Highlight, Feature, Full Length edits",
      "Tailored storytelling with cinematic feel",
      "Multiple style options – romantic, modern, classic",
      "Delivered in 4K with color grading",
      "Turnaround: 2–4 weeks, 2 revision rounds"
    ],
  },
  {
    title: "Concert / Event Recaps",
    description: [
      "Energetic highlight reels to capture the vibe",
      "Social-media optimized formats",
      "Quick turnaround for timely sharing",
      "Multi-camera & crowd coverage",
    ],
  },
  {
    title: "Podcast-to-Video",
    description: [
      "Full episode edit with branding",
      "Clipped highlights for social media",
      "Clean audio sync & noise removal",
    ],
  },
  {
    title: "Reels / Short Form",
    description: [
      "Trending transitions & effects",
      "Optimized for Instagram & TikTok",
      "Fast delivery for content batches",
    ],
  },
  {
    title: "Corporate Promos / Testimonials / Product Edits",
    description: [
      "Professional storytelling to boost brand image",
      "Testimonial videos to build trust",
      "Cinematic product showcases",
    ],
  },
];

export default function ServicePage() {
  return (

    <div>

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
