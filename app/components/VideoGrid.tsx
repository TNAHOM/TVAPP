import Image from "next/image";
import { videos } from "@/lib/mockdata/videos";

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="relative group cursor-pointer">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black z-0"></div>
          </div>
          <div className="absolute top-0  right-0 p-3">
            <h3 className="text-white font-medium">{video.title}</h3>
            <p className="text-gray-300 text-sm">{video.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
