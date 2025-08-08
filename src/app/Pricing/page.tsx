'use client';

import VideoBanner from '@/components/common/Video-banner';
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

function page() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <VideoBanner />

      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-6">
            Wedding Video Editing Price
          </h3>
          <p className="text-start text-gray-700 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
            We are fully committed to giving our clients cost-efficient wedding video editing services.
            We’re always striving to provide the best price–quality ratio so you’ll get the outcome you’re
            looking for at a reasonable price.
          </p>

          <ul className="text-gray-700 text-base sm:text-lg space-y-2 max-w-2xl mx-auto text-start">
            <li>1. The hours of raw footage</li>
            <li>2. The quality of the footage</li>
            <li>3. The number of cameras used</li>
            <li>4. The style and complexity of the final outcome</li>
            <li>5. The deadline</li>
            <li>6. The volume of work</li>
          </ul>

          <p className="text-start text-gray-700 text-base sm:text-lg mt-8 mb-8 max-w-3xl mx-auto">
            There isn’t a one-size-fits-all solution in terms of wedding video editing and post-production.
            We will create a tailored offer for you that will be based on those factors.
          </p>

          <div className="bg-pink-50 border border-pink-100 shadow-lg rounded-2xl p-10 md:p-14">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
              More time to focus and grow your business!
            </h3>
            <p className="text-center text-gray-800 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
              Outsourcing wedding video editing saves you a lot of time – you can dedicate this newfound time
              to finding new clients, shooting videos, and generating revenue for your business.
            </p>
            <p className="text-center text-gray-800 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
              Strategically speaking, a partnership with an experienced team like ours will enable you to
              optimise corporate processes, thus saving money and boosting your income.
            </p>
            <p className="text-center text-gray-800 text-base sm:text-lg max-w-3xl mx-auto">
              Looking for the biggest bargain in terms of wedding video editing isn’t always the best approach.
              There could be hidden fees and additional charges you weren’t made aware of in the beginning.
              <br />
              <span className="block mt-4 font-medium">
                At <span className="text-pink-600 font-semibold">Wedcuts</span>, we believe in complete transparency
                and offer competitive wedding video editing services that are reasonably priced even for the
                one-man team.
              </span>
            </p>

            <div className="text-center mt-10">
              <a
                href="/Pricing"
                className="inline-block px-8 py-3 rounded-full border border-pink-500 text-pink-700 font-medium bg-white/70 backdrop-blur-lg hover:bg-pink-600 hover:text-white transition"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Original Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <PricingCard
          price={200}
          features={[
            '3 - 8 min long',
            '1 - 3 cameras incl. drones',
            'Upto 10hrs of raw footage',
            'Three Revisions + Premiere files',
          ]}
        />
        <PricingCard
          price={300}
          features={[
            '10 - 15 min long',
            '1 - 3 cameras incl. drones',
            'Upto 10hrs of raw footage',
            'Three Revisions + Premiere files',
          ]}
        />
        <PricingCard
          price={325}
          features={[
            '30 - 60 min long',
            '1 - 3 cameras incl. drones',
            'Upto 12hrs of raw footage',
            'Three Revisions + Premiere files',
          ]}
        />
      </div>

      {/* Accordion Pricing Section */}
      <section className="w-full px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Wedding Video Editing Packages
        </h2>
<div className="flex flex-wrap justify-center gap-6 items-start">          <CollapsibleCard
            index={0}
            isOpen={activeIndex === 0}
            toggle={handleToggle}
            title="Package (1)"
            price={300}
            features={[
              '3 – 8 min highlight',
              '1 – 3 cameras incl. drones',
              'Up to 10 hours raw footage',
              'Three revisions + Premiere files',
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
            price={375}
            features={['1 min trailer', '3 – 8 min highlight', '30 – 60 min full length']}
          />
        </div>
      </section>
    </div>
  );
}

function PricingCard({ price, features }) {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-transparent border border-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-center">
          <span className="bg-white text-black px-4 py-1 rounded text-xl font-semibold">HIGHLIGHTS</span>
        </h2>
        <p className="text-lg text-center mt-2 font-medium">FROM</p>
        <p className="text-4xl text-center mt-2 font-medium">${price}</p>
        <ul className="flex flex-col gap-3 text-sm mt-6 items-center text-center">
          {features.map((item, idx) => (
            <li key={idx}>
              <CheckIcon /> <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="/Pricing"
          className="mt-6 inline-block px-6 py-2 rounded-md border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
        >
          View More
        </a>
      </div>
    </div>
  );
}

function CollapsibleCard({ index, title, features = [], price, isOpen, toggle }) {
  return (
    <div className="border rounded-xl bg-gray-50 p-6 shadow-md transition hover:shadow-lg w-full max-w-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <button onClick={() => toggle(index)} className="text-teal-500 hover:text-teal-700">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>

      {/* Animated Collapse Area */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        } overflow-hidden`}
      >
        <div className="overflow-hidden">
          <ul className="text-gray-700 space-y-2 text-sm mb-4">
            {features.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-gray-800 pb-1">
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
