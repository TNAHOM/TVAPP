import NavBar from "@/app/components/NavBar";
import Sidebar from "@/app/components/Sidebar";
import ReelGrid from "@/app/components/ReelGrid";

export default function VideoReelsPage() {
  return (
    <main className="flex flex-col h-screen w-full bg-black text-white overflow-hidden">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage="video-reels" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <div className="mb-6">
              <h2 className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm text-xl font-bold rounded-md">
                Featured Reels
              </h2>
            </div>

            <ReelGrid />

            <div className="my-6">
              <h2 className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm text-xl font-bold rounded-md">
                Popular Reels
              </h2>
            </div>

            <ReelGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
