'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from "next/link";
// -------------------- Component Types --------------------

interface PricingCardProps {
    title: string;
    price: number;
    features: string[];
    addons?: string[];
}

interface CollapsibleCardProps {
    index: number;
    title: string;
    features: string[];
    price: number;
    isOpen: boolean;
    toggle: (index: number) => void;
    href: string;
}

interface CheckIconProps {
    disabled?: boolean;
}

// -------------------- Main Page Component --------------------

function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(1); // open first card by default

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f5f5f5]">
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
        href="https://wa.me/918310881045"
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
        href="https://www.instagram.com/crystalknotfilms/"
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

            {/* Section: Intro + List */}
            <section className="pt-40 pb-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px]  text-center text-gray-900 mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4 }}>
                        Wedding Video Editing Price
                    </h3>
                    <p className="text-start text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        We are fully committed to giving our clients cost-efficient wedding video editing services. We’re always striving to provide the best price – 2 – quality ratio so you’ll get the outcome you’re looking for at a reasonable price. Our professional wedding video editing price structure is based on several factors. To determine how much our service is going to cost, you’ll have to take the following in consideration:
                    </p>

                    <ul className="text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] space-y-2 max-w-2xl mx-auto text-start" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        <li>1. The hours of raw footage</li>
                        <li>2. The quality of the footage</li>
                        <li>3. The number of cameras used</li>
                        <li>4. The style and complexity of the final outcome</li>
                        <li>5. The deadline</li>
                        <li>6. The volume of work</li>
                    </ul>

                    <p className="text-start text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mt-8 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        There isn’t a one-size-fits-all solution in terms of wedding video editing and post-production. We will create a tailored offer for you that will be based on those factors.
                    </p>

                    <div className="border border-pink-100 shadow-lg rounded-2xl p-10 md:p-14 bg-[#e2e2e2df]">
                        <h3 className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-bold text-center text-gray-900 mb-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Elevate Your Business with Expert Editing
                        </h3>
                        <p className="text-center text-gray-800 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Outsourcing wedding video editing saves you a lot of time – You can dedicate this newfound time to finding new clients, shooting videos and generating revenue for your business.
                            Strategically speaking, a partnership with an experienced team like ours will enable you to optimise corporate processes, thus saving money and boosting your income.
                        </p>
                        <p className="text-center text-gray-800 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Looking for the biggest bargain in terms of wedding video editing isn’t always the best approach. There could be hidden fees and additional charges you weren’t made aware of in the beginning.<br />
                            <span className="block mt-4 font-medium">
                                At <span className="text-[#D4AF37] font-semibold" style={{ fontFamily: 'Ginger, sans-serif' }}>Crystal Knot Films</span>, we believe in complete transparency and we offer competitive wedding video editing services that are reasonably priced even for the one-man team.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Static Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
                <PricingCard
                    title="HIGHLIGHT"
                    price={150}
                    features={[
                        '3 - 8 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 10hrs of raw footage',
                        'Unlimited Rivisions + Davinci Project File',
                        '480p - 4K',
                        '7 - 30 days turnaround',
                    ]}
                    addons={['1 min Trailer']}
                />
                <PricingCard
                    title="FEATURE"
                    price={250}
                    features={[
                        '10 - 15 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 10hrs of raw footage',
                        'Unlimited Rivisions + Davinci Project File',
                        '480p - 4K',
                        '7 - 30 days turnaround',
                    ]}
                    addons={['1 min Trailer']}
                />
                <PricingCard
                    title="FULL LENGTH"
                    price={275}
                    features={[
                        '30 - 60 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 12hrs of raw footage',
                        'Unlimited Rivisions + Davinci Project File',
                        '480p - 4K',
                        '7 - 30 days turnaround',
                    ]}
                    addons={[
                        '1-Min Trailer',
                        '3 - 8 min Highlight OR',
                        '10 - 15 min feature',
                    ]}
                />
            </div>

            {/* Accordion Pricing Section */}
            <section className="w-full px-4 py-16 relative z-10">
                <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4 }}>
                    Wedding Video Editing Packages
                </h2>
                <div className="flex flex-wrap justify-center gap-6 items-start z-0">
                    <CollapsibleCard
                        index={0}
                        isOpen={activeIndex === 1}
                        toggle={handleToggle}
                        title="Package (1)"
                        price={325}
                        features={['1 min trailer', '3 – 8 min highlight']}
                        href="/Contact"
                    />
                    <CollapsibleCard
                        index={1}
                        isOpen={activeIndex === 1}
                        toggle={handleToggle}
                        title="Package (2)"
                        price={350}
                        features={['1 min trailer', '30 – 60 min full length']}
                        href="/Contact"
                    />
                    <CollapsibleCard
                        index={2}
                        isOpen={activeIndex === 2}
                        toggle={handleToggle}
                        title="Package (3)"
                        price={350}
                        features={['1 min trailer', '3 – 8 min highlight', '30 – 60 min full length']}
                        href="/Contact"
                    />
                </div>
            </section>
        </div>
    );
}

// -------------------- Pricing Card --------------------

function PricingCard({ title, price, features, addons = [] }: PricingCardProps) {
    return (
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-[#e2e2e2df] border border-gray-300 rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center">
                <h2 className="text-center">
                    <span className="bg-[#D4AF37] w-full text-white px-4 py-1 rounded text-xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>{title}</span>
                </h2>

                <p className="text-lg text-center mt-2 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>FROM</p>
                <p className="text-4xl text-center mt-2 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>${price}</p>

                <ul className="flex flex-col gap-3 text-sm mt-6 items-center text-center" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    {features.map((item, idx) => (
                        <li key={idx}>
                            <CheckIcon /> <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {addons.length > 0 && (
                    <div className="mt-6 w-full text-center">
                        <h4 className="text-sm font-bold mb-2 text-gray-800">Add-ons</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            {addons.map((addon, idx) => (
                                <li key={idx}>• {addon}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

// -------------------- Collapsible Card --------------------

function CollapsibleCard({ index, title, features = [], price, isOpen, toggle, href }: CollapsibleCardProps) {
    return (
        <div className="border rounded-xl bg-[#e2e2e2df] p-6 shadow-md transition hover:shadow-lg w-full max-w-sm relative cursor-pointer">
            <Link href={href} className="block">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-lg" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            {title}
                        </h3>
                        {/* Empty space or icon here if you want, but no button inside link */}
                    </div>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            } overflow-hidden`}
                    >
                        <div className="overflow-hidden">
                            <ul
                                className="text-gray-700 space-y-2 text-sm mb-4"
                                style={{ fontFamily: 'Quicksand, sans-serif' }}
                            >
                                {features.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                            <p
                                className="text-sm font-semibold text-gray-800 pb-1"
                                style={{ fontFamily: 'Quicksand, sans-serif' }}
                            >
                                <span className="text-black">Starting From </span>
                                <span className="text-teal-600">${price} USD</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Toggle button outside Link */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent Link navigation on toggle click
                    toggle(index);
                }}
                className="absolute top-4 right-4 text-teal-500 hover:text-teal-700"
                aria-label={isOpen ? 'Collapse' : 'Expand'}
                type="button"
            >
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
        </div>
    );
}

// -------------------- Check Icon --------------------

function CheckIcon({ disabled = false }: CheckIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-4 me-2 inline-block ${disabled ? 'text-green-400/50' : 'text-green-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );
}

export default Page;
