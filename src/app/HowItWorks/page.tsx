'use client';
import { useState } from "react";
import { Edit, Film, CloudDownload  } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";


const faqs = [
  {
    question: "Who are you?",
    answer:
      "Our team consists of 15 editors and three managers based in London and Berlin. Each of the team members has at least five years of experience in outsourcing wedding video editing, post-production or shooting. Since the inception of the studio, we’ve edited more than 800 weddings – a noteworthy accomplishment that has resulted in many happy clients.",
  },
  {
    question: "How much does your service cost?",
    answer: "Our wedding video editing prices are dependent on several factors. These include hours raw footage, quality, number of cameras used, your deadline and the specifics of the editing work. If you’re looking for same day wedding video editing, you’ll have to be contact us atleast two – four days before the event",
  },
  {
    question: "How do I start?",
    answer: "Outsourcing wedding video editing is a fairly simple process. Contact us today via that form and send your project details. We will get back to you to discuss the specifics and provide you with a personalised, free of charge quote. If you’re happy with the offer, we can move onto our portal and take it from there.",
  },
  {
    question: "Which countries do you serve?",
    answer: "We have worked with clients from the US, UK, Canada, France, Australia etc… Our knowledge, experience and understanding of local audiences enable us to provide quality solutions, regardless of the customer’s background",
  },
  {
    question: "What software do you use?",
    answer: "We use Premiere Pro,  Final Cut Pro, After Effects, Audio Audition and Photoshop.",
  },
  {
    question: "How do I pay?",
    answer: "We use Paypal and we charge upfront. However, if you use other payment services let us know and we’ll see what we can do.",
  },
  {
    question: "How much time would it take you to edit my footage?",
    answer: "Before getting started with your project, we’d like to discuss the scope of the wedding video editing you need. Based on this information, we will calculate the price and determine the timeframe for delivery. We will do our best to meet your deadline and we do offer same day wedding video editing services (Max. 4 projects per month).",
  },
  {
    question: "Why should I outsource the wedding video editing process?",
    answer: "Wedding video editing can be very time-consuming and cumbersome. If you’re working with multiple clients, you’ll find it even more difficult to focus on the task at hand and produce a high quality outcome every single time with fast turnarounds.Outsourced wedding video editing services give you quality within a short period of time. While we’re working on putting the final video together, you’ll be free to nurture relationships with clients and grow your business",
  },
  {
    question: "What does your service entail?",
    answer: "We offer wedding video editing and post-production services that are tailored to your specific needs. You’ll simply have to let us know what you’re looking for and we’ll do our best to accommodate for your preferences.",
  },
  {
    question: "What’s your editing process like?",
    answer: "Our editing process is entirely based on your specifications and requirements. It depends on the hours raw footage, quality, number of cameras used and your deadline. We will work on editing and sending you the final outcome within the specified deadline. As per our work policy, clients are entitled to three rounds of revisions + the complete premiere files",
  },
  {
    question: "Will my data be saved and will you return my original footage?",
    answer: "It depends on the specific agreement between you and the client. We usually keep the original footage until the final video(s) are approved and we typically keep the files up to 6 weeks after delivery. If you need us to keep the files for a longer period of time, please let us know in advance. ",
  },
  {
    question: "Can you improve the quality of my wedding video?",
    answer: "Depends on your footage quality and age – We have extensive experience in wedding video editing and post-production, but keep in mind, however, that the quality of the footage will be determining for the final outcome. Our editors always do their best to optimise the quality but we’ll let you know before we start.",
  },
  {
    question: "Do you offer free revisions?",
    answer: "We offer three rounds of revisions + the complete premiere files. We charge a small fee for anything beyond that depending on scope.",
  },
  {
    question: "How will I get my finished product?",
    answer: "We’ll send the files for client approval via Dropbox or Frame.io to ensure fast, safe and reliable transfers of information.",
  },
  {
    question: "Is there anything you don’t do in terms of post-production?",
    answer: "Get in touch with us and let the team know exactly what you’re looking for. We have years of experience in video editing and post-production. We can handle most types of projects, including specialised wedding video production (Feature, cinematographic, documentary, storytelling, etc..)",
  },
  {
    question: "Can I tweak or customize my package?",
    answer: "Yes, we believe that personalised solutions are the only way to go. This is why our team members will carry out an initial consultation with you. Once we understand your goal and specifications, we will do our best to offer a personalised, 100% tailored wedding video editing package.",
  },
];

export default function Page() {

  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      label: 'Tell Us',
      description:
        'Which package? What’s your deadline? Fill in the form and get a free quote within 24 hrs.',
      icon: Edit,
    },
    {
      label: 'We Work',
      description:
        'We’ll start working and editing your footage as soon as we’ve the files & notes.',
      icon: Film ,
    },
    {
      label: 'Download the Videos',
      description:
        'We’ll send the first video within 7 – 30 days and we offer three revisions.',
      icon: CloudDownload,
    },
  ];



  return (
    <div>

      <div id="HowItWorks" className="w-full bg-white pt-40 pb-20 px-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section: How it works */}
          <h2
            className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center text-black mb-16"
            style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}
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
                  className="relative z-10 w-full md:flex-1 flex flex-col items-center text-center "
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay }}
                    className="flex flex-col items-center"
                  >
                    <div className="z-20   text-gray-800  ">
                      <Icon className="w-15 h-15  bg-transparent" style={{ color: '#58c7c7',backgroundColor: 'transparent' }} />
                    </div>

                    <p
                      className="text-base font-semibold mt-4 text-black"
                      style={{ fontFamily: '"Quicksand", sans-serif' }}
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
                      whileInView={{ scaleX: 0.8 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: delay + 0.6 }}
                      className="hidden md:block absolute top-8 right-[-62%] w-full h-0.5 bg-black origin-left  z-10 pointer-events-none"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <section className="max-w-2xl mx-auto px-4 py-12 mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="relative w-full flex justify-between items-center px-4 py-3 text-left text-black font-semibold focus:outline-none z-50"
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-teal-500" />
                    ) : (
                      <ChevronDown size={20} className="text-teal-500" />
                    )}
                  </button>
                  <div
                    className={`px-4 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out ${openIndex === index ? "block" : "hidden"
                      }`}
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {faq.answer || "Answer coming soon..."}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Why Choose Us */}

          {/* Section: Call to Action */}
          <section className="mt-24 text-center">
            <h3
              className="text-2xl font-bold text-black mb-6"
              style={{ fontFamily: '"Quicksand", sans-serif' }}
            >
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 mb-8" style={{ fontFamily: '"Quicksand", sans-serif' }}>
              Let’s bring your story to life. Contact us now and receive a personalized quote within 24 hours.
            </p>
            <Link
              href="/Contact"
              className="relative z-50 inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
              style={{ fontFamily: '"Quicksand", sans-serif', pointerEvents: "auto" }}
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
