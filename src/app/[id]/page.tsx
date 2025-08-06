import ClientVideoSection from "@/components/Home/ClientVideoSection";
import { videos } from "@/lib/video-data";

interface VideoPageProps {
  params: {
    id: string;
  };
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Video Not Found</h1>
        <p className="mb-6">The video you are looking for does not exist.</p>
      </div>
    );
  }

  const youtubeEmbedUrl = `${video.baseEmbedUrl}&autoplay=1`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-white">
      {/* Video Player */}
      <div className="w-full max-w-6xl px-4 pt-10 pb-6">
        <div className="relative w-full pt-[56.25%] mb-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={youtubeEmbedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube video ${params.id}`}
          ></iframe>
        </div>

        <h3 className="text-2xl font-semibold mb-4">More from Weddings</h3>
      </div>

      {/* Full-width Client Section */}
      <div className="w-full">
        <ClientVideoSection />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}
