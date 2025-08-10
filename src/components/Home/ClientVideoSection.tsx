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
        src: "https://www.youtube.com/embed/-mhTawVXNSk?si=Q8SEKEwfGtPs8r9W",
        title: "Wedding Highlight Reel 1",
        thumbnail: "./images/video-data/v1.png",
      },
      {
        id: "video2",
        src: "https://www.youtube.com/embed/Nr1mu8u2FeU?si=qTO2jsnc-03I_k-5",
        title: "Wedding Highlight Reel 2",
        thumbnail: "./images/video-data/v2.png",
      },
      {
        id: "video3",
        src: "https://www.youtube.com/embed/Uvq75p4yeq8?si=yegVq2hb_DVwjYkY",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/video-data/v3.png",
      },
      {
        id: "video4",
        src: "https://www.youtube.com/embed/HdYf4KAzb3g?si=x0ROIvqYiBUDJn87",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/video-data/v4.jpg",
      },
      {
        id: "video5",
        src: "https://www.youtube.com/embed/Ntfg592ufcs?si=sNu7wtPxq0oIMNiR",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/video-data/v5.png",
      },
      {
        id: "video6",
        src: "https://www.youtube.com/embed/YyTIZfHIALc?si=2LQgOj1Wo27JOZOb",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/video-data/v6.png",
      },
      {
        id: "video7",
        src: "https://www.youtube.com/embed/BQvWtk7BL_U?si=kLk2vsQKESv8fqXX",
        title: "Wedding Highlight Reel 3",
        thumbnail: "./images/video-data/v7.png",
      },
    ],
    "Corporate Events": [
      {
        id: "video4",
        src: "https://player.vimeo.com/video/1108518205?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Corporate Event Showcase 1",
        thumbnail: "./images/portfolio/c1.png",
      },
     
    ],
    Reels: [
      {
        id: "video6",
        src: "https://player.vimeo.com/video/1108519615?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Creative Reel 1",
        thumbnail: "./images/portfolio/r1.png",
      },
      {
        id: "video7",
        src: "https://player.vimeo.com/video/1108519680?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Creative Reel 2",
        thumbnail: "./images/portfolio/r2.png",
      },
      {
        id: "video8",
        src: "https://player.vimeo.com/video/1108519737?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Creative Reel 3",
        thumbnail: "./images/portfolio/r3.png",
      },
    ],
  };

  const photoContent = [
    { src: "../../images/1.jpg", alt: "Wedding Photography" },
    { src: "../../images/2.jpg", alt: "Corporate Event Photography" },
    { src: "../../images/3.jpg", alt: "Portrait Photography" },
    { src: "../../images/4.jpg", alt: "Landscape Photography" },
    { src: "../../images/5.jpg", alt: "Event Photography" },
    { src: "../../images/6.jpg", alt: "Product Photography" },
    { src: "../../images/7.jpg", alt: "Fashion Photography" },
    { src: "../../images/8.jpg", alt: "Street Photography" },
    { src: "../../images/9.jpg", alt: "Architectural Photography" },
    { src: "../../images/10.jpg", alt: "Nature Photography" },
    { src: "../../images/11.jpg", alt: "Sports Photography" },
    { src: "../../images/12.jpg", alt: "Event Photography" },     
    { src: "../../images/13.jpg", alt: "Wedding Photography" },
    { src: "../../images/14.jpg", alt: "Corporate Event Photography" },
    { src: "../../images/15.jpg", alt: "Portrait Photography" },
    { src: "../../images/16.jpg", alt: "Landscape Photography" },
    { src: "../../images/17.jpg", alt: "Event Photography" },
    { src: "../../images/18.jpg", alt: "Product Photography" },
    { src: "../../images/19.jpg", alt: "Fashion Photography" },
    { src: "../../images/20.jpg", alt: "Street Photography" },
    { src: "../../images/21.jpg", alt: "Architectural Photography" },
    { src: "../../images/22.jpg", alt: "Nature Photography" },
    { src: "../../images/23.jpg", alt: "Sports Photography" },
    { src: "../../images/24.jpg", alt: "Event Photography" },
                
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
                style={{ fontFamily: 'Quicksand, sans-serif' }}
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
