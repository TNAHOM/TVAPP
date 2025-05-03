import Image from "next/image";
import { ThumbsUp, Play, Clock } from "lucide-react";
import { reels } from "@/lib/mockdata/reels";

export default function ReelGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {reels.map((reel) => (
        <div key={reel.id} className="relative group cursor-pointer">
          <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
            <Image
              src={reel.thumbnail || "/placeholder.svg"}
              alt={reel.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Clock size={12} />
              {reel.duration}
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 rounded-full p-3">
                <Play size={24} fill="white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-medium">{reel.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <ThumbsUp size={12} />
                  <span className="text-xs">{reel.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
