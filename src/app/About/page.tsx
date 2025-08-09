"use client";

import { useState } from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import VideoBanner from "@/components/common/Video-banner";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";




// Example client logos
const clientLogos = [
    "./images/brands/ninja-removebg-preview.png",
    "./images/brands/gerdau-logo-removebg-preview.png",
    "./images/brands/timeSquare-removebg-preview.png",
    "./images/brands/TV9-removebg-preview.png",
    "./images/brands/TEDx-Logo-500x281-removebg-preview.png",
];

export default function Page() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats = [
        { value: 500, prefix: "+", label: "WEDDINGS EDITED" },
        { value: 30, prefix: "+", label: "SATISFIED CLIENTS" },
        { value: 6, prefix: "", label: "COUNTRIES" },
    ];

    const isProd = process.env.NODE_ENV === "production";
    const basePath = isProd ? "/crystalknotfilms" : "";

    const [videoSources] = useState(() => [
        isProd
            ? "https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/intro.mp4"
            : `${basePath}/videos/intro.mp4`,
        `${basePath}/videos/intro.mp4`,
        isProd
            ? "https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/intro.mp4"
            : `${basePath}/videos/intro.mp4`,
    ]);

    return (
        <main className="flex flex-col bg-[#f5f5f5]">
            {/* Hero Section with Video */}
            <VideoBanner
                title={
                    <>
                        Where Your Vision Meets  <br /> Our Artistry
                    </>
                }
                videoSrc="/videos/intro.mp4" />

            {/* Team Story */}
            <section className="max-w-6xl mx-auto py-16 px-4">
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                > */}
                <h2
                    className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-6"
                    style={{ fontFamily: 'Quicksand', letterSpacing: '0.1em', lineHeight: 1.4 }}
                >
                    Team Story
                </h2>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}
                >
                    With years of experience and expertise across multiple formats, we
                    bring your vision to life with precision and creativity. Our work
                    spans weddings, corporate events, music videos, and branded content
                    — always tailored to tell a compelling story.
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    We believe in a collaborative model, supporting our clients from
                    concept to delivery. Our global reach allows us to bring diverse
                    perspectives to every project, ensuring that no two stories are ever
                    the same.
                </p>
                {/* </motion.div> */}
            </section>



            <section className=" py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <h2
                        className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-6"
                        style={{ fontFamily: 'Quicksand', letterSpacing: '0.1em', lineHeight: 1.4 }}
                    >
                        Why Choose Us
                    </h2>
                    <p className="text-center text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-600 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Quicksand' }}>
                        Several features set us apart from what the competition has to offer.
                        Here’s why you should consider partnering up with us.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 " style={{ fontFamily: 'Quicksand' }}>
                        {[
                            "Every video editor on the team has at least five years of experience editing or shooting wedding videos.",
                            "7 - 30 days turnaround per project.",
                            "Our team of 15 wedding video editors and three managers is based in London and Berlin.",
                            "Over the course of the studio’s existence, we’ve edited over 500 wedding videos.",
                            "Fast customer service and daily communication – a team member is available to address your inquiries 5 days a week over mail and phone.",
                            "We use professional video editing and post-production software to ensure a stellar outcome every single time.",
                            "We have developed well-established relationships with dozens of satisfied customers in the US, UK, Canada and Australia.",
                            "We provide tailor-made editing styles to match each couple’s unique vision and story."
                        ].map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                {/* Luxury Diamond Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2L2 9l10 13 10-13-10-7zm0 3.3l6.16 4.31-6.16 8.02-6.16-8.02L12 5.3z" />
                                </svg>
                                <p className="text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px]">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Client Logos */}
            <section className=" py-12">
                <div className="max-w-4xl mx-auto px-4 text-center bg-white rounded-lg shadow-md py-8">
                    <h3
                        className="text-xl md:text-2xl font-semibold mb-8"
                        style={{ fontFamily: 'Quicksand', letterSpacing: '0.1em', lineHeight: 1.4 }}
                    >
                        Our Clients
                    </h3>

                    {/* First row - 3 logos */}
                    <div className="flex justify-center gap-8 mb-8">
                        {clientLogos.slice(0, 3).map((logo, idx) => (
                            <div key={idx} className="relative w-28 h-14">
                                <Image
                                    src={logo}
                                    alt={`Client Logo ${idx}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second row - 2 logos */}
                    <div className="flex justify-center gap-8">
                        {clientLogos.slice(3, 5).map((logo, idx) => (
                            <div key={idx} className="relative w-28 h-14">
                                <Image
                                    src={logo}
                                    alt={`Client Logo ${idx + 3}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16" ref={ref}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-white border border-gray-200"
                                style={{
                                    background: "linear-gradient(145deg, #ffffff, #f8f8f8)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                                }}
                            >
                                <span
                                    className="text-4xl md:text-5xl font-bold"
                                    style={{
                                        color: "#1E1E1E",
                                        fontFamily: "Montserrat, sans-serif",
                                    }}
                                >
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={2}
                                            prefix={stat.prefix}
                                        />
                                    )}
                                </span>
                                <span
                                    className="mt-2 text-sm md:text-base tracking-wider text-gray-700"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="bg-[#f8f8f8] py-16 text-center">
                <h2
                    className="text-2xl md:text-3xl font-semibold mb-6"
                    style={{ fontFamily: 'Essential sans, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}
                >
                    Ready to bring your story <br /> to life with us?
                </h2>
                <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b58e20] text-white px-6 py-2 rounded-full text-md font-medium hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                    If yes, let’s talk →
                </Link>
            </section>

        </main>
    );
}
