"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function ClientVideoSection() {
  const [activeCategory, setActiveCategory] = useState("Wedding");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const videoContent = {
    Wedding: [
      {
        id: "video1",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Wedding Highlight Reel 1",
        thumbnail: "./images/A7405701.jpg",
      },
      {
        id: "video2",
        src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        title: "Wedding Highlight Reel 2",
        thumbnail: "./images/A7405470.jpg",
      },
      {
        id: "video3",
        src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/A7405566.jpg",
      },
    ],
    "Corporate Events": [
      {
        id: "video4",
        src: "https://www.youtube.com/embed/LXb3EKWsInQ",
        title: "Corporate Event Showcase 1",
        thumbnail: "./images/A7405701.jpg",
      },
      {
        id: "video5",
        src: "https://www.youtube.com/embed/y6Sxv-sUYtM",
        title: "Corporate Event Showcase 2",
        thumbnail: "./images/Abbey&Andy_Previews (21 of 37).jpg",
      },
    ],
    Reels: [
      {
        id: "video6",
        src: "https://www.youtube.com/embed/M7lc1UVf-VE",
        title: "Creative Reel 1",
        thumbnail: "./images/Chelsea&Liam (11 of 24).jpg",
      },
      {
        id: "video7",
        src: "https://www.youtube.com/embed/k_9g_2_2_2g",
        title: "Creative Reel 2",
        thumbnail: "./images/Jaymi-lee & Michael Previews (1 of 26).jpg",
      },
      {
        id: "video8",
        src: "https://www.youtube.com/embed/o_a_a_a_a_a",
        title: "Creative Reel 3",
        thumbnail: "./images/SONY (1272).jpg",
      },
    ],
  };

  const photoContent = [
    { src: "./images/A7401967.jpg", alt: "Wedding Photography" },
    { src: "./images/A7405701.jpg", alt: "Corporate Event Photography" },
    { src: "./images/A7405470.jpg", alt: "Portrait Photography" },
    { src: "./images/A7405566.jpg", alt: "Landscape Photography" },
    { src: "./images/SONY (1272).jpg", alt: "Event Photography" },
    { src: "./images/Jaymi-lee & Michael Previews (1 of 26).jpg", alt: "Product Photography" },
  ];

  return (
    <section id="Portfolio" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl text-black pb-10" style={{ fontFamily: "Cinzel" }}>
              PORTFOLIO
            </h2>
            <p
              className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              style={{ fontFamily: "Quicksand, serif" }}
            >
              Explore our diverse collection of work, from captivating wedding films to dynamic corporate event coverage and stunning photography.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 py-10 z-10">
            {["Wedding", "Corporate Events", "Reels", "Photos"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setPlayingVideoId(null);
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 backdrop-blur-md border ${
                  activeCategory === category
                    ? "bg-black/60 text-white border-white/10 shadow-lg"
                    : "bg-black/30 text-white border-white/10 hover:bg-black/50 hover:text-white shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {activeCategory !== "Photos"
            ? videoContent[activeCategory as keyof typeof videoContent].map((video) => (
                <div key={video.id} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg z-10">
                  {playingVideoId === video.id ? (
                    <iframe
                      src={`${video.src}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full border-0"
                    />
                  ) : (
                    <button onClick={() => setPlayingVideoId(video.id)} className="group relative w-full h-full">

                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <FaPlay className="text-white text-4xl opacity-90 hover:scale-110 transition-transform" />
                      </div>
                    </button>
                  )}
                </div>
              ))
            : photoContent.map((photo, index) => (
                <div key={index} className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={photo.src || "./placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
