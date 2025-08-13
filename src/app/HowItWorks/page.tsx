'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Edit, Film, CloudDownload } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Who are we?",
    answer:
      "We're a passionate team of 10 skilled editors, led by our founder and manager, working right here in India. With years of experience in wedding video editing and post-production, we've successfully completed over 3,000 projects — turning raw footage into unforgettable stories that couples and creators treasure for a lifetime.",
  },
  {
    question: "How much does same day edit service cost?",
    answer:
      "Our wedding video editing rates depend on a few key factors — the total hours of raw footage, video quality, number of camera angles, turnaround time, and the specific editing style you need. For urgent projects like same-day wedding edits, we request you contact us at least 2–4 days before the event so we can plan and deliver the best results.",
  },
  {
    question: "Our Motto?",
    answer:
      "We focus on helping wedding videographers and photographers who are busy capturing unforgettable moments but don't have the time or the right team to handle post-production. Our goal is to be the trusted editing partner they can rely on — delivering polished, cinematic films while they stay focused on what they do best: shooting the perfect moments.",
  },
  {
    question: "What software do we use?",
    answer:
      "For video editing, we work with industry-leading tools like DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro, After Effects, and Adobe Audition.\n\nFor photo editing, we use Adobe Lightroom and Photoshop.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept payments through Remitly and PayPal. If you prefer another payment method, let us know — we'll do our best to accommodate it.",
  },
  {
    question: "What's editing process like?",
    answer:
      "Our editing process is fully tailored to your style, requirements, and vision. We consider factors like raw footage length, quality, number of camera angles, and your deadline. Once we start, we'll deliver the final edit within the agreed timeframe. As part of our policy, every project includes unlimited revisions plus the complete project files (Premiere, DaVinci, or Final Cut) so you have everything you need.",
  },
  {
    question: "How long will it take to edit my footage?",
    answer:
      "Before we begin, we'll discuss the details of your wedding video — including the style, length, and complexity of the edit. Based on this, we'll give you both a quote and a delivery timeline. We always aim to meet your deadline, and for urgent needs, we offer same-day wedding video editing (limited to a maximum of 6–8 projects per month).",
  },
  {
    question: "Is there anything you don't do in terms of post-production?",
    answer:
      "Get in touch with us and let the team know exactly what you're looking for. We have years of experience in video editing and post-production. We can handle most types of projects, including specialised concert editing, podcasts (Feature, cinematographic, documentary, storytelling, etc..)",
  },
  {
    question: "Why should I outsource wedding video editing?",
    answer:
      "Editing a wedding film takes time — a lot of it. If you're juggling multiple clients and shoots, it can be challenging to deliver top-quality videos quickly, every single time. By outsourcing your wedding video edits to us, you get professional, high-quality results with fast turnarounds, while freeing up your schedule to focus on what truly matters — capturing more moments, building stronger client relationships, and growing your business.",
  },
  {
    question: "Will my data be saved, and will I get my original footage back?",
    answer:
      "By default, we keep your original footage until the final video is approved. After delivery, we typically store all files for up to 6 weeks. If you'd like us to keep them longer, just let us know in advance, and we'll arrange it as part of our agreement.",
  },
  {
    question: "Can you improve the quality of my wedding video?",
    answer:
      "Yes — depending on the quality and age of your footage. Our team has extensive experience in wedding video editing and post-production, and we'll always do our best to enhance and optimise your video. That said, the final result will largely depend on the original footage. Before we start, we'll review your files and let you know exactly what improvements are possible.",
  },
  {
    question: "How will I receive my finished product?",
    answer:
      "We deliver your final videos through Google Drive or Frame.io, ensuring fast, secure, and reliable file transfers. This also makes it easy for you to preview, download, and share your edits hassle-free.",
  },
];

export default function Page() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);
  const [currentVideoSource, setCurrentVideoSource] = useState(0);

  // Define video sources similar to Hero section
  const [videoSources] = useState(() => {
    const isProd = process.env.NODE_ENV === 'production'
    const basePath = isProd ? '/crystalknotfilms' : ''

    return [
      // Try GitHub raw URL first since we know it works for download
      isProd ? 'https://github.com/adarsh-oo7/crystalknotfilms/raw/main/public/videos/HIW.mp4' : `${basePath}/videos/HIW.mp4`,
      // Standard GitHub Pages path
      `${basePath}/videos/HIW.mp4`,
      // Media URL for LFS files (fallback)
      isProd ? 'https://media.githubusercontent.com/media/adarsh-oo7/crystalknotfilms/main/public/videos/HIW.mp4' : `${basePath}/videos/HIW.mp4`
    ]
  })

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", e.currentTarget.error);

    // Try next video source if available
    if (currentVideoSource < videoSources.length - 1) {
      console.log(`Trying next video source: ${videoSources[currentVideoSource + 1]}`);
      setCurrentVideoSource(prev => prev + 1);
      setVideoLoaded(false);
    } else {
      console.error("All video sources failed");
      setVideoError(true);
    }
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  const handleCanPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    setVideoRef(video);
    console.log("Video can start playing");
  };

  const steps = [
    {
      label: 'Tell Us',
      description:
        "Which package? What's your deadline? Fill in the form and get a free quote within 24 hrs.",
      icon: Edit,
    },
    {
      label: 'We Work',
      description:
        "We'll start working and editing your footage as soon as we've the files & notes.",
      icon: Film,
    },
    {
      label: 'Download the Videos',
      description:
        "We'll send the first video within 7 – 30 days and we offer three revisions.",
      icon: CloudDownload,
    },
  ];

  return (
    <div>
      <div id="HowItWorks" className="w-full bg-[#111] pt-40 pb-20 px-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section: How it works */}
          <h2
            className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center text-white mb-16"
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
                    <div className="z-20 text-gray-800">
                      <Icon className="w-15 h-15 bg-transparent text-yellow-500" style={{ backgroundColor: 'transparent' }} />
                    </div>

                    <p
                      className="text-base font-semibold mt-4 text-white"
                      style={{ fontFamily: '"Quicksand", sans-serif' }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-sm text-white mt-4 max-w-sm"
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
                      className="hidden md:block absolute top-8 right-[-62%] w-full h-0.5 bg-white origin-left z-10 pointer-events-none"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Enhanced Video Section with fallback handling */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              {playingVideo && !videoError ? (
                <video
                  key={currentVideoSource} // Force re-render when source changes
                  ref={setVideoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  onCanPlay={handleCanPlay}
                  preload="metadata"
                  crossOrigin={currentVideoSource === 0 ? undefined : "anonymous"}
                  style={{ backgroundColor: '#000' }}
                >
                  <source src={videoSources[currentVideoSource]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button
                  onClick={() => setPlayingVideo(true)}
                  className="group relative w-full h-full overflow-hidden bg-gray-900"
                  aria-label="Play video"
                >
                  {/* Thumbnail Image */}
                  <Image
                    src="./images/imgs.png"
                    alt="How It Works - Video Tutorial"
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                    priority
                    onError={() => {
                      console.error("Thumbnail image failed to load");
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="relative">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                      
                      {/* Play Button */}
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110">
                        <FaPlay className="text-black text-2xl ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Watch How It Works
                      </p>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        See our editing process in action
                      </p>
                    </div>
                  </div>
                </button>
              )}

              {/* Error Fallback */}
              {videoError && playingVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
                  <div className="text-center">
                    <p className="text-lg mb-2">Video temporarily unavailable</p>
                    <p className="text-sm text-gray-400">Please try again later</p>
                    <button
                      onClick={() => {
                        setVideoError(false);
                        setPlayingVideo(false);
                        setCurrentVideoSource(0);
                      }}
                      className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Debug info for development */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 text-white text-xs bg-black/70 p-3 rounded max-w-sm">
                <div>Current Video Source: {videoSources[currentVideoSource]}</div>
                <div>Source Index: {currentVideoSource + 1}/{videoSources.length}</div>
                <div>Video Error: {videoError ? 'Yes' : 'No'}</div>
                <div>Video Loaded: {videoLoaded ? 'Yes' : 'No'}</div>
                <div>Playing Video: {playingVideo ? 'Yes' : 'No'}</div>
                <div>Environment: {process.env.NODE_ENV}</div>
              </div>
            )}
          </div>

          <section className="max-w-2xl mx-auto px-4 py-12 mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg bg-[#111] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="relative w-full flex justify-between items-center px-4 py-3 text-left text-white font-semibold focus:outline-none z-50"
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-yellow-500" />
                    ) : (
                      <ChevronDown size={20} className="text-yellow-500" />
                    )}
                  </button>
                  <div
                    className={`px-4 pb-4 text-sm text-white transition-all duration-300 ease-in-out ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {faq.answer || "Answer coming soon..."}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Call to Action */}
          <section className="mt-24 text-center">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: '"Quicksand", sans-serif' }}
            >
              Ready to Get Started?
            </h3>
            <p className="text-white mb-8" style={{ fontFamily: '"Quicksand", sans-serif' }}>
              Let's bring your story to life. Contact us now and receive a personalized quote within 24 hours.
            </p>
            <Link
              href="/Contact"
              className="relative z-50 inline-block bg-[#1E1E1E] text-white px-8 py-3 rounded-md border-1 border-gray-800 hover:border-yellow-500 font-medium transition"
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