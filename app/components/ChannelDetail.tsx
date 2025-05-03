import Image from "next/image";
import { ThumbsUp, Bell, Calendar, CircleUserRound } from "lucide-react";
import { mockWaitingUsers } from "@/lib/mockdata/channelDetail";

export default function ChannelDetail() {
  return (
    <div className="relative">
      <div className="recipes-watermark">Recipes</div>

      <div className="mb-6">
        <h1 className="text-5xl font-bold text-white">Channel Name</h1>
        <h2 className="text-2xl mt-1 text-gray-300">Owner Name</h2>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md">
          <ThumbsUp size={18} />
          <span className="font-medium">159K</span>
        </div>

        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md">
          <span className="font-medium">12+</span>
        </div>

        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md">
          <span className="font-medium">Life Style</span>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-sm p-4 rounded-md w-[280px] mb-6">
        <div className="flex justify-center mb-2">
          <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
            <Calendar size={16} className="text-gray-300" />
          </div>
        </div>
        <h3 className="text-center font-medium mb-1">Next Streaming Title</h3>
        <p className="text-center text-gray-300 mb-1">Tomorrow</p>
        <p className="text-center text-gray-300 mb-4">18:00</p>
        <button className="flex items-center justify-center gap-2 w-full bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition-colors">
          <Bell size={16} />
          Remind me
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {mockWaitingUsers.map((user, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full border-2 border-black overflow-hidden"
              style={{ zIndex: 5 - index }}
            >
              <CircleUserRound className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-300">30+ Waiting</span>
      </div>
    </div>
  );
}
