"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";
import Image from "next/image";
import { videos } from "@/lib/video-data";
import { PlayCircle } from "lucide-react";

const allVideos = videos;

const VideoCard = ({
  id,
  thumbnail,
}: {
  id: string;
  thumbnail: string;
}) => {
  return (
    <figure
      className={cn(
        "group relative w-72 h-full cursor-pointer overflow-hidden p-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative w-full h-full">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt="Video thumbnail"
          fill
          className="object-cover z-10"
          priority
        />

        {/* Always-visible play button */}
        <Link
          href={`/${id}`}
          className="absolute inset-0 z-[60] flex items-center justify-center"
        >
          <div className="bg-black/60 hover:bg-black/70 text-white rounded-full p-4 transition">
            <PlayCircle className="w-10 h-10" />
          </div>
        </Link>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-background pt-20 z-10 pb-8">
      {/* Heading */}
      <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-normal tracking-tight text-center mb-6"style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.09em', lineHeight: 1.4, }}>
        Wedding Films
      </h2>

      {/* Marquee section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Marquee pauseOnHover={false} className="[--duration:40s] [--gap:0.5rem] h-full">
          {allVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </Marquee>

        {/* Edge fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-20"></div>
      </div>
    </div>
  );
}
