'use client';

import React from 'react';
import Link from 'next/link';

function Pricing() {
  return (
    <div className="bg-[#1E1E1E] py-20  text-white">
      {/* Top Heading */}
      <h1 

        className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-12"
        style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4 }}
      >
        PRICING
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">

        {[
          {
            title: 'HIGHLIGHTS',
            price: 200,
            features: [
              '3 - 8 min long',
              '1 - 3 cameras incl. drones',
              'Upto 10hrs of raw footage',
              'Three Revisions + Premiere files'
            ]
          },
          {
            title: 'FEATURE',
            price: 300,
            features: [
              '10 - 15 min long',
              '1 - 3 cameras incl. drones',
              'Upto 10hrs of raw footage',
              'Three Revisions + Premiere files'
            ]
          },
          {
            title: 'FULL LENGTH',
            price: 325,
            features: [
              '30 - 60 min long',
              '1 - 3 cameras incl. drones',
              'Upto 12hrs of raw footage',
              'Three Revisions + Premiere files'
            ]
          }
        ].map((plan, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-transparent border border-white rounded-xl shadow-sm p-6"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-center">
                <span
                  className="bg-[#D4AF37] text-white px-4 py-1 rounded text-xl font-semibold"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {plan.title}
                </span>
              </h2>

              <p
                className="text-lg text-center mt-2 font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                FROM
              </p>
              <p
                className="text-4xl text-center mt-2 font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ${plan.price}
              </p>

              <ul
                className="flex flex-col gap-3 text-sm mt-6 items-center text-center"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/Pricing"
                className="mt-6 inline-block px-6 py-2 rounded-md border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckIcon({ disabled = false }: { disabled?: boolean }) {
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

export default Pricing;
