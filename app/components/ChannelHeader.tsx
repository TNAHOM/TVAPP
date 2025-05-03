import Image from "next/image";
import { ThumbsUp, Play, User, CircleUserRound } from "lucide-react";

export default function ChannelHeader() {
  const onlineUsers = [1, 2, 3, 4, 5];

  return (
    <div className="relative">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-white">Channel Name</h1>
        <h2 className="text-2xl mt-1 text-gray-300">Owner Name</h2>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          <ThumbsUp size={18} />
          <span className="font-medium">159K</span>
        </div>

        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-medium">12+</span>
        </div>

        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-medium">Life Style</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="flex -space-x-2">
          {onlineUsers.map((user, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full overflow-hidden bg-black"
              style={{ zIndex: 5 - index }}
            >
              <CircleUserRound className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-300">30+ Online</span>
      </div>

      <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
        <Play size={20} fill="currentColor" />
        Join to Stream
      </button>
    </div>
  );
}
