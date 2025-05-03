import Image from "next/image";
import { Airplay, Film, Menu, Music, Search, User } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black/60 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <NavItem Icon={Menu} label="Menu" />
        <NavItem Icon={Music} label="Music" />
        <NavItem Icon={Film} label="Cinema" />
        <NavItem Icon={Airplay} label="Stream" active={true} />
      </div>

      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 bg-white/90 rounded-full text-black focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <NavItem Icon={Airplay} label="YekBunTV" />
        <NavItem Icon={Airplay} label="ZarokTV" />
        <NavItem Icon={Airplay} label="Eyar" />
        <NavItem Icon={Airplay} label="Archiv" />
        <NavItem Icon={User} label="User" />
      </div>
    </nav>
  );
}

function NavItem({
  Icon,
  label,
  active = false,
}: {
  Icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          active ? "bg-green-500" : "bg-white/10"
        }`}
      >
        <Icon size={20} className="object-contain" />
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}
