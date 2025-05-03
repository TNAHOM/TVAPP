"use client";
import Image from "next/image";
import { ThumbsUp, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { channels } from "@/lib/mockdata/channels";

export default function ChannelGrid({
  showWatchNow = false,
}: {
  showWatchNow?: boolean;
}) {
  const router = useRouter();

  const handleChannelClick = (id: number) => {
    router.push(`/tv-channels/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {channels.map((channel) => (
        <div
          key={channel.id}
          className="relative group cursor-pointer"
          onClick={() => handleChannelClick(channel.id)}
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={channel.thumbnail || "/placeholder.svg"}
              alt={channel.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black z-0"></div>

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {channel.time}
            </div>

            <div className="absolute top-0 right-0 p-3 bg-gradient-to-b from-black/80 to-transparent">
              <h3 className="text-white font-medium">{channel.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <ThumbsUp size={14} />
                  <span className="text-xs">{channel.viewers}</span>
                </div>
                <div className="bg-black/40 px-2 py-0.5 rounded-full text-xs">
                  {channel.category}
                </div>
              </div>
            </div>

            {showWatchNow && (
              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Play size={14} fill="currentColor" />
                Watch Now
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
