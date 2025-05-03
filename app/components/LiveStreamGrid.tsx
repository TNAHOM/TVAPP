import Image from "next/image";
import { Play, Users } from "lucide-react";
import { liveStreams } from "@/lib/mockdata/liveStreams";
import type { LiveStreamGridProps } from "@/types";

export default function LiveStreamGrid({
  showSchedule = false,
}: LiveStreamGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {liveStreams.map((stream) => (
        <div key={stream.id} className="relative group cursor-pointer">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={stream.thumbnail || "/placeholder.svg"}
              alt={stream.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black z-0"></div>

            {showSchedule ? (
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {stream.time}
              </div>
            ) : (
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <span className="h-2 w-2 bg-white rounded-full animate-pulse-slow"></span>
                LIVE
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-medium">{stream.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span className="text-xs">{stream.viewers}</span>
                </div>
                <div className="bg-black/40 px-2 py-0.5 rounded-full text-xs">
                  {stream.category}
                </div>
              </div>
            </div>

            {!showSchedule && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Play size={14} fill="currentColor" />
                Watch
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
