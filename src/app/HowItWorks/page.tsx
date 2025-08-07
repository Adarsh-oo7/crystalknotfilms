'use client';

import { Pencil, Video, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  const steps = [
    {
      label: 'Tell Us',
      description:
        'Which package? What’s your deadline? Fill in the form and get a free quote within 24 hrs.',
      icon: Pencil,
    },
    {
      label: 'We Work',
      description:
        'We’ll start working and editing your footage as soon as we’ve the files & notes.',
      icon: Video,
    },
    {
      label: 'Download the Videos',
      description:
        'We’ll send the first video within 7 – 30 days and we offer three revisions.',
      icon: Download,
    },
  ];

  return (
    <div id="HowItWorks" className="w-full bg-white py-24 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section: How it works */}
        <h2
          className="text-3xl font-bold text-center text-black mb-16"
          style={{ fontFamily: '"Cinzel", serif' }}
        >
          HOW IT WORKS
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 relative w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const delay = index * 0.6;

            return (
              <div
                key={index}
                className="relative w-full md:flex-1 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-black bg-white text-gray-800 shadow-lg z-10">
                    <Icon className="w-8 h-8 text-[#000000]" />
                  </div>

                  <p
                    className="text-base font-semibold mt-4 text-black"
                    style={{ fontFamily: '"Cinzel", serif' }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-sm text-gray-800 mt-4 max-w-sm"
                    style={{ fontFamily: '"Quicksand", sans-serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delay + 0.6 }}
                    className="hidden md:block absolute top-10 right-[-50%] w-full h-0.5 bg-black origin-left z-0"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Section: Why Choose Us */}
        <section className="mt-24 text-center px-4">
          <h3
            className="text-2xl font-bold text-black mb-6"
            style={{ fontFamily: '"Cinzel", serif' }}
          >
            Why Choose Crystal Knot Films?
          </h3>
          <p
            className="text-gray-700 max-w-3xl mx-auto text-base"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
          >
            We are passionate about storytelling. With years of experience and a creative team of editors and designers,
            we deliver not just videos, but cinematic experiences. Fast turnaround, customized packages, and client-focused service set us apart.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">
                We value your time. Expect your first cut within 7–30 days.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-2">Professional Team</h4>
              <p className="text-sm text-gray-600">
                Our expert editors bring your vision to life with precision and care.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-2">Client-Centric</h4>
              <p className="text-sm text-gray-600">
                We work closely with you at every step to ensure you’re thrilled with the final product.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Call to Action */}
        <section className="mt-24 text-center">
          <h3
            className="text-2xl font-bold text-black mb-6"
            style={{ fontFamily: '"Cinzel", serif' }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-gray-700 mb-8" style={{ fontFamily: '"Quicksand", sans-serif' }}>
            Let’s bring your story to life. Contact us now and receive a personalized quote within 24 hours.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
