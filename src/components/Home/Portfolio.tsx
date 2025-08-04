"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Wedding")
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  const videoContent = {
    Wedding: [
      {
        id: "video1",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Wedding Highlight Reel 1",
        thumbnail: "/images/A7405701.jpg",
      },
      {
        id: "video2",
        src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        title: "Wedding Highlight Reel 2",
        thumbnail: "/thumbnails/wedding2.jpg",
      },
      {
        id: "video3",
        src: "https://www.youtube.com/embed/tgbNymZ7vqY",
        title: "Wedding Highlight Reel 3",
        thumbnail: "/thumbnails/wedding3.jpg",
      },
    ],
    "Corporate Events": [
      {
        id: "video4",
        src: "https://www.youtube.com/embed/LXb3EKWsInQ",
        title: "Corporate Event Showcase 1",
        thumbnail: "/thumbnails/corporate1.jpg",
      },
      {
        id: "video5",
        src: "https://www.youtube.com/embed/y6Sxv-sUYtM",
        title: "Corporate Event Showcase 2",
        thumbnail: "/thumbnails/corporate2.jpg",
      },
    ],
    Reels: [
      {
        id: "video6",
        src: "https://www.youtube.com/embed/M7lc1UVf-VE",
        title: "Creative Reel 1",
        thumbnail: "/thumbnails/reel1.jpg",
      },
      {
        id: "video7",
        src: "https://www.youtube.com/embed/k_9g_2_2_2g",
        title: "Creative Reel 2",
        thumbnail: "/thumbnails/reel2.jpg",
      },
      {
        id: "video8",
        src: "https://www.youtube.com/embed/o_a_a_a_a_a",
        title: "Creative Reel 3",
        thumbnail: "/thumbnails/reel3.jpg",
      },
    ],
  }

  const photoContent = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Wedding Photography" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Corporate Event Photography" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Portrait Photography" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Landscape Photography" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Event Photography" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Product Photography" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">PORTFOLIO</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse collection of work, from captivating wedding films to dynamic corporate event coverage
              and stunning photography.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 py-4 z-10">
            {["Wedding", "Corporate Events", "Reels", "Photos"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setPlayingVideoId(null) // reset playing on category switch
                }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

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
                    <button
                      onClick={() => setPlayingVideoId(video.id)}
                      className="group relative w-full h-full"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}
