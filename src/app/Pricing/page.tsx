'use client';

import VideoBanner from '@/components/common/Video-banner';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

function page() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f5f5f5]">
            <VideoBanner
                title="The Clarity You Deserve"
                videoSrc="/videos/intro.mp4" />

            <section className="py-20 px-6 md:px-16 ">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px]  text-center text-gray-900 mb-6" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}>
                        Wedding Video Editing Price
                    </h3>
                    <p className="text-start text-gray-700 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        We are fully committed to giving our clients cost-efficient wedding video editing services.
                        We’re always striving to provide the best price–quality ratio so you’ll get the outcome you’re
                        looking for at a reasonable price.
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
                        There isn’t a one-size-fits-all solution in terms of wedding video editing and post-production.
                        We will create a tailored offer for you that will be based on those factors.
                    </p>

                    <div className="border border-pink-100 shadow-lg rounded-2xl p-10 md:p-14 bg-[#e2e2e2df]">
                        <h3 className="ext-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-bold text-center text-gray-900 mb-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Elevate Your Business with Expert Editing
                        </h3>
                        <p className="text-center text-gray-800 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Outsourcing wedding video editing saves you a lot of time – you can dedicate this newfound time
                            to finding new clients, shooting videos, and generating revenue for your business.
                        </p>
                        <p className="text-center text-gray-800 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Strategically speaking, a partnership with an experienced team like ours will enable you to
                            optimise corporate processes, thus saving money and boosting your income.
                        </p>
                        <p className="text-center text-gray-800 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] max-w-3xl mx-auto" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            Looking for the biggest bargain in terms of wedding video editing isn’t always the best approach.
                            There could be hidden fees and additional charges you weren’t made aware of in the beginning.
                            <br />
                            <span className="block mt-4 font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                At <span className="text-[#D4AF37] font-semibold" style={{ fontFamily: 'Ginger, sans-serif' }}>Crystal Knot Films</span>, we believe in complete transparency
                                and offer competitive wedding video editing services that are reasonably priced even for the
                                one-man team.
                            </span>
                        </p>


                    </div>
                </div>
            </section>

            {/* Original Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-6 px-4" >
                <PricingCard
                    title="HIGHLIGHT"
                    price={200}
                    features={[
                        '3 - 8 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 10hrs of raw footage',
                        'Three Revisions + Premiere files',
                        '480p - 4K',
                        '7 - 30 days turnaround',
                    ]}
                    addons={[
                        '1 min Trailer',
                    ]}
                />
                <PricingCard
                    title="FEATURE"
                    price={300}
                    features={[
                        '10 - 15 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 10hrs of raw footage',
                        'Three Revisions + Premiere files',
                        '480p - 4K',
                        '7 - 30 days turnaround',
                    ]}
                    addons={[
                        '1 min Trailer',

                    ]}
                />
                <PricingCard
                    title="FULL LENGTH"
                    price={325}
                    features={[
                        '30 - 60 min long',
                        '1 - 3 cameras incl. drones',
                        'Upto 12hrs of raw footage',
                        'Three Revisions + Premiere files',
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
            <section className="w-full px-4 py-16">
                <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center text-gray-900 mb-10" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}>
                    Wedding Video Editing Packages
                </h2>
                <div className="flex flex-wrap justify-center gap-6 items-start">
                    <CollapsibleCard
                        index={0}
                        isOpen={activeIndex === 0}
                        toggle={handleToggle}
                        title="Package (1)"
                        price={325}
                        features={[
                            '1 min trailer',
                            '3 – 8 min highlight',

                        ]}
                    />
                    <CollapsibleCard
                        index={1}
                        isOpen={activeIndex === 1}
                        toggle={handleToggle}
                        title="Package (2)"
                        price={350}
                        features={['1 min trailer', '30 – 60 min full length']}
                    />
                    <CollapsibleCard
                        index={2}
                        isOpen={activeIndex === 2}
                        toggle={handleToggle}
                        title="Package (3)"
                        price={350}
                        features={['1 min trailer', '3 – 8 min highlight', '30 – 60 min full length']}
                    />
                </div>
            </section>
        </div>
    );
}

function PricingCard({ title, price, features, addons = [] }) {
    return (
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-[#e2e2e2df] border border-gray-300 rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center">
                <h2 className="text-center">
                    <span className="bg-[#D4AF37] w-full text-white px-4 py-1 rounded text-xl " style={{ fontFamily: 'Quicksand, sans-serif' }}>{title}</span>
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

                {/* Add-ons */}
                {addons.length > 0 && (
                    <div className="mt-6 w-full text-center">
                        <h4 className="text-sm font-bold mb-2 text-gray-800" style={{ fontFamily: 'Quicksand, sans-serif' }}>Add-ons</h4>
                        <ul className="text-sm text-gray-600 space-y-1 " style={{ fontFamily: 'Quicksand, sans-serif' }}>
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


function CollapsibleCard({ index, title, features = [], price, isOpen, toggle }) {
    return (
        <div className="border rounded-xl bg-[#e2e2e2df] p-6 shadow-md transition hover:shadow-lg w-full max-w-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Quicksand, sans-serif' }}>{title}</h3>
                <button onClick={() => toggle(index)} className="text-teal-500 hover:text-teal-700">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
            </div>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    } overflow-hidden`}
            >
                <div className="overflow-hidden">
                    <ul className="text-gray-700 space-y-2 text-sm mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        {features.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                        ))}
                    </ul>
                    <p className="text-sm font-semibold text-gray-800 pb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        <span className="text-black">Starting From </span>
                        <span className="text-teal-600">${price} USD</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

function CheckIcon({ disabled = false }) {
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

export default page;
