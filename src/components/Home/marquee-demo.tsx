import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link"; // Import Link for navigation
import { videos } from "@/lib/video-data"; // Import videos from the new data file

// Now all videos will be in a single row
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
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="relative w-full h-full">
        {/* Image overlay */}
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={`Video thumbnail`}
          className="absolute inset-0 h-full w-full object-cover z-10"
        />
        {/* Overlay for the button and darkening effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 pointer-events-none group-hover:pointer-events-auto">
          <Link href={`/${id}`} passHref>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  px-6 py-3">
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
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover={false} className="[--duration:40s] [--gap:0.5rem] h-full"> {/* Changed --gap to 0.5rem */}
        {allVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
