# TV Streaming Platform

A modern, TV-optimized streaming application built with Next.js, showcasing channels, live streams, on-demand videos, and short-form reels in responsive grid layouts.

## Tech Stack and Tools

- **Next.js 15** (App Router, Server Components)
- **React 19** (Client Components and hooks)
- **TypeScript** (Static typing)
- **Tailwind CSS 4** (Utility-first styling)
- **PostCSS** & **@tailwindcss/postcss**
- **Lucide React** (Icon library)
- **class-variance-authority**, **clsx**, **tailwind-merge** (Styling utilities)
- **tw-animate-css** (Animations)

## Project Structure

- **app/**
  - **layout.tsx** & **page.tsx** 
  - **globals.css**
  - **components/**: reusable UI pieces
    - NavBar, Sidebar, ChannelGrid, ChannelDetail, ChannelHeader,
      LiveStreamGrid, ReelGrid, VideoGrid
  - **live-stream/page.tsx**: grid of live streams
  - **stream/page.tsx**: primary video stream section
  - **tv-channels/**
    - **page.tsx**: channel listing
    - **[id]/page.tsx**: detailed channel view
  - **video-stream/page.tsx**: on-demand videos

- **lib/**
  - **utils.ts**: helper functions
  - **mockdata/**: static JSON-like data for
    channels, channelDetail, liveStreams, reels, videos

- **public/**
  - Static assets: SVGs, images for mock content and placeholders

## Key Features

- Responsive grid layouts adapting from mobile to large TVs
- Channel browsing with thumbnails, categories, viewer counts, and watch-time overlays
- Detailed channel pages displaying statistics, upcoming streams, reminder actions, and mock waiting-user avatars
- Dedicated sections for live streams, on-demand videos, and short-form reels
- Smooth hover and transition effects powered by Tailwind CSS and tw-animate-css
- Iconography using Lucide React for consistent visuals
- Mock data driven: easy swapping for real API integration

## Pages Overview

- **/stream** — Main video streaming hub
- **/live-stream** — Showcase of currently live broadcasts
- **/video-stream** — On-demand video catalog
- **/tv-channels** — Channel directory
- **/tv-channels/[id]** — In-depth channel detail views

## Reusable Components

- **NavBar** — Top-level navigation bar across sections
- **Sidebar** — Secondary navigation for TV-oriented layout
- **ChannelGrid** — Displays channel cards in a responsive grid
- **ChannelDetail** — Rich channel profile with stats and actions
- **LiveStreamGrid**, **VideoGrid**, **ReelGrid** — Grids for live streams, videos, reels
- **ChannelHeader** — Header component for channel lists

## Mock Data

All content is currently powered by mock data modules under `lib/mockdata`, enabling rapid prototyping:

- `channels.ts` — Array of channel objects for the grid
- `channelDetail.ts` — Channel-specific detail data
- `liveStreams.ts`, `videos.ts`, `reels.ts` — Data for specialized grids

_Disclaimer: This project uses static mock data; replace with real APIs for production._