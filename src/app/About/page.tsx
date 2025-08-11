"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
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
    { value: 2500, prefix: "+", label: "WEDDINGS EDITED" },
    { value: 500, prefix: "+", label: "SATISFIED CLIENTS" },
    { value: 11, prefix: "", label: "COUNTRIES" },
  ];

  return (
    <main className="flex flex-col bg-[#f5f5f5]">
      {/* Team Story */}
      <section className="max-w-6xl mx-auto pt-40 pb-15 px-4">
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > */}
        <h2
          className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-6"
          style={{ fontFamily: "Quicksand", letterSpacing: "0.1em", lineHeight: 1.4 }}
        >
          Team Story
        </h2>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed mb-4 text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          Our story didn&apos;t start with Macbooks and mouse clicks. It started in a tiny darkroom over 60 years ago — no AC, no presets, just pure passion and photo chemicals.
          My grandfather was the OG memory-maker. Film rolls, hand-developed photos, and hours of patience — that&apos;s how weddings were crafted back then. When my father stepped in at 20, he carried that legacy forward, editing and capturing love stories for four decades.
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          Now it&apos;s my turn — same blood, same love for storytelling… just with a faster render time
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          Welcome to Crystal Knot Films, where we don&apos;t carry cameras — we carry emotions into the edit timeline.
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          <br />
          Over the years, we&apos;ve worked behind the scenes on:
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] font-semibold leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          <br />
          100+ celebrity edits (yup, the kind that make you say &quot;who edited this??&quot;)
          <br />
          1000+ events with Flashbrush Productions
          <br />
          500+ wedding films with Aesthete Films
          <br />
          500+ photo edits with Palm Tree Content
        </p>
        {/* </motion.div> */}
      </section>

      <section className="max-w-6xl mx-auto px-4">
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > */}
        <h2
          className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-6"
          style={{ fontFamily: "Quicksand", letterSpacing: "0.1em", lineHeight: 1.4 }}
        >
          Why Crystal Knot?
        </h2>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed mb-4 text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          We&apos;ve literally spent more time on Premiere timelines than on family vacations (true story).
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          Let&apos;s be real — there are a thousand editors out there who can drag, drop, and export. But that&apos;s not editing. That&apos;s just Ctrl+C, Ctrl+V with background music.
          At Crystal Knot Films, editing is storytelling. It&apos;s feeling the mood of the moment, syncing every breath with the music, and knowing when to pause and when to punch.
          Whether it&apos;s fixing the color on a cloudy beach wedding or syncing that perfect vow moment to the right piano chord — we live for the details that most people miss.
        </p>
        {/* </motion.div> */}
      </section>

      <section className="max-w-6xl mx-auto mt-15 px-4">
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          > */}
        <h2
          className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-bold text-center mb-6"
          style={{ fontFamily: "Quicksand", letterSpacing: "0.1em", lineHeight: 1.4 }}
        >
          Our vibe?
        </h2>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed mb-4 text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          A little filmy, a little funny, and 100% emotion-first.
          Think: &quot;Candid-shandid, with color grading that slaps.&quot;
          Less posey-shosey, More story.
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          We work with creators, planners, and couples across the world who care about quality — not just quantity. So whether it&apos;s a luxury vineyard wedding in California, a cozy countryside ceremony in Italy, or a city elopement in New York — we treat every project like it&apos;s a feature film.
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-justify"
          style={{ fontFamily: "Quicksand" }}
        >
          Because your memories deserve more than filters and flashy effects.
          They deserve heart, rhythm, and a story that actually feels like you.
          So if you&apos;re looking for an editor who gets the vibe, nails the tone, and makes your footage feel like magic —
          you&apos;ve found your team.
        </p>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-center"
          style={{ fontFamily: "Quicksand" }}
        >
          Let&apos;s make something beautiful —&nbsp;frame&nbsp;by&nbsp;frame.
        </p>
        {/* </motion.div> */}
      </section>

      {/* Client Logos */}
      {/* <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center bg-white rounded-lg shadow-md py-8">
          <h3
            className="text-xl md:text-2xl font-semibold mb-8"
            style={{ fontFamily: "Quicksand", letterSpacing: "0.1em", lineHeight: 1.4 }}
          >
            Our Clients
          </h3> */}

      {/* First row - 3 logos */}
      {/* <div className="flex justify-center gap-8 mb-8">
            {clientLogos.slice(0, 3).map((logo, idx) => (
              <div key={idx} className="relative w-28 h-14">
                <Image src={logo} alt={`Client Logo ${idx}`} fill className="object-contain" />
              </div>
            ))}
          </div> */}

      {/* Second row - 2 logos */}
      {/* <div className="flex justify-center gap-8">
            {clientLogos.slice(3, 5).map((logo, idx) => (
              <div key={idx} className="relative w-28 h-14">
                <Image src={logo} alt={`Client Logo ${idx + 3}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
                    <CountUp start={0} end={stat.value} duration={2} prefix={stat.prefix} />
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

      <section className="bg-black py-16 text-center">
        <h2
          className="text-2xl md:text-3xl text-white font-semibold mb-6"
          style={{
            fontFamily: "Essential sans, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Looking for studio prices?
          
        </h2>
        <p
          className="text-md md:text-lg text-white font-semibold mb-6"
          style={{
            fontFamily: "Essential sans, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
         We offer discounts and fixed prices for small and big studios.
        </p>
        <Link
          href="/Contact/"
          className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b58e20] text-white px-6 py-2 rounded-full text-md font-medium hover:opacity-90 transition-opacity relative z-10"
          style={{ fontFamily: "Quicksand, sans-serif" }}
        >
          Get a discount now →
        </Link>
      </section>
    </main>
  );
}
