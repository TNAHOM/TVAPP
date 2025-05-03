// Shared TypeScript interfaces
import type { ElementType } from "react";

export interface Channel {
  id: number;
  name: string;
  viewers: string;
  category: string;
  time: string;
  thumbnail: string;
  type: string;
}

export interface LiveStream {
  id: number;
  title: string;
  viewers: string;
  category: string;
  time: string;
  thumbnail: string;
}

export interface Video {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
}

export interface Reel {
  id: number;
  title: string;
  views: string;
  duration: string;
  thumbnail: string;
}

export type WaitingUserId = number;

export interface SidebarProps {
  activePage?: string;
  transparent?: boolean;
}

export interface LiveStreamGridProps {
  showSchedule?: boolean;
}

export interface ChannelGridProps {
  showWatchNow?: boolean;
}

export interface NavItemProps {
  Icon: ElementType;
  label: string;
  active?: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  image: string;
  path: string;
  active?: boolean;
}
