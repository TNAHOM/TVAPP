"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { SidebarProps, MenuItem } from "@/types";

export default function Sidebar({
  activePage = "stream",
  transparent = false,
}: SidebarProps) {
  const router = useRouter();
  const menuItems: MenuItem[] = [
    {
      id: "stream",
      label: "Stream Destpek",
      image: "/Images/streamDesktop.png",
      path: "/stream",
      active: true,
    },
    {
      id: "tv-channels",
      label: "TV Channels",
      image: "/Images/tvChannel.png",
      path: "/tv-channels",
    },
    {
      id: "live-streams",
      label: "Live Streams",
      image: "/Images/videoReels.png",
      path: "/live-stream",
    },
    {
      id: "stream",
      label: "Stream Destpek",
      image: "/Images/streamDesktop.png",
      path: "/stream",
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside
      className={`w-44 flex-shrink-0 overflow-y-auto ${
        transparent ? "bg-transparent" : "bg-black/60"
      }`}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`p-3 cursor-pointer transition-colors ${
            item.id === activePage ? "backdrop-blur-sm" : ""
          }`}
          onClick={() => handleNavigation(item.path)}
        >
          {item.image ? (
            <div className="relative h-20 w-full mb-2 rounded-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      ))}
    </aside>
  );
}
