import { notFound } from "next/navigation";
import { videos } from "@/lib/video-data";
import ClientVideoSection from "@/components/Home/ClientVideoSection";

// ✅ Static params for static site generation
export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}

// ✅ Declare page as async
export default async function VideoPage(props: {
  params: Promise<{ id: string }>; // ✅ Await the params
}) {
  const { id } = await props.params; // ✅ Await before accessing `id`

  const video = videos.find((v) => v.id === id);

  if (!video) {
    notFound();
  }

  const youtubeEmbedUrl = `${video.baseEmbedUrl}&autoplay=1`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-white">
      <div className="w-full max-w-6xl px-4 pt-10 pb-6">
        <div className="relative w-full pt-[56.25%] mb-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={youtubeEmbedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube video ${id}`}
          ></iframe>
        </div>

        <h3 className="text-2xl font-semibold mb-4">More from Weddings</h3>
      </div>

      <div className="w-full">
        <ClientVideoSection />
      </div>
    </div>
  );
}

