"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";
import Image from "next/image";
import { videos } from "@/lib/video-data";

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

        {/* Overlay with fixed high z-index and pointer control */}
        <div className="absolute inset-0 z-[60] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
          <Link href={`/${id}`} passHref>
            <button className="z-[70] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground px-6 py-3">
              View
            </button>
          </Link>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background z-10">
      <Marquee pauseOnHover={false} className="[--duration:40s] [--gap:0.5rem] h-full">
        {allVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-20"></div>
    </div>
  );
}
