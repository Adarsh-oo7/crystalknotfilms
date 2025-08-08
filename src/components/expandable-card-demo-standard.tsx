"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 z-50 bg-white dark:bg-neutral-800 p-2 rounded-full"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-lg h-fit bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl p-6"
            >
              <div className="flex flex-col gap-2">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-lg font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {active.description}
                </motion.p>
              </div>

              <div className="pt-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2"
                >
                  {typeof active.content === "function"
                    ? active.content({ expanded: true })
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 px-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-800 shadow"
          >
            <div className="flex flex-col items-start gap-2">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-lg font-semibold text-neutral-800 dark:text-neutral-200"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                {card.description}
              </motion.p>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 pt-2 space-y-1">
                {card.previewPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </div>
              <button className="text-sm text-blue-600 mt-4 underline">
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "HIGHLIGHT",
    description: "FROM $250",
    previewPoints: ["3 – 8 min long", "1 – 3 cameras incl. drones"],
    ctaText: "Book Now",
    ctaLink: "#",
    content: ({ expanded }: { expanded: boolean }) => (
      <div>
        <ul className="list-disc list-inside space-y-1">
          <li>3 – 8 min long</li>
          <li>1 – 3 cameras incl. drones</li>
          {expanded && (
            <>
              <li>Up to 10 hrs of raw footage</li>
              <li>Three Revisions + Premiere files</li>
              <li>480p – 4K</li>
              <li>7 – 30 days turnaround</li>
              <li>Add-on: 1 min trailer</li>
            </>
          )}
        </ul>
      </div>
    ),
  },
  {
    title: "FULL FEATURE",
    description: "FROM $500",
    previewPoints: ["15 – 30 min long", "3 cameras + gimbal + drone"],
    ctaText: "Book Now",
    ctaLink: "#",
    content: ({ expanded }: { expanded: boolean }) => (
      <div>
        <ul className="list-disc list-inside space-y-1">
          <li>15 – 30 min long</li>
          <li>3 cameras + gimbal + drone</li>
          {expanded && (
            <>
              <li>All-day coverage</li>
              <li>Color grading + audio mixing</li>
              <li>Multiple export formats</li>
              <li>Add-ons: Raw footage drive, Teaser cut</li>
            </>
          )}
        </ul>
      </div>
    ),
  },
  {
    title: "INSTAGRAM REEL",
    description: "FROM $100",
    previewPoints: ["30 – 60 sec vertical format", "Optimized for IG & TikTok"],
    ctaText: "Book Now",
    ctaLink: "#",
    content: ({ expanded }: { expanded: boolean }) => (
      <div>
        <ul className="list-disc list-inside space-y-1">
          <li>30 – 60 sec vertical format</li>
          <li>Optimized for IG & TikTok</li>
          {expanded && (
            <>
              <li>1 camera + stabilization</li>
              <li>Quick turnaround</li>
              <li>Add-ons: Music licensing, Subtitles</li>
            </>
          )}
        </ul>
      </div>
    ),
  },
];
