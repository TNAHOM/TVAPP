import NavBar from "@/app/components/NavBar";
import Sidebar from "@/app/components/Sidebar";
import ChannelGrid from "@/app/components/ChannelGrid";

export default function TVChannelsPage() {
  return (
    <main className="flex flex-col h-screen w-full bg-black text-white overflow-hidden">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage="tv-channels" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <div className="mb-6">
              <h2 className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm text-xl font-bold rounded-md">
                Planned Streams
              </h2>
            </div>

            <ChannelGrid />

            <div className="my-6 flex justify-center">
              <div className="px-8 py-3 bg-red-600 rounded-md font-bold text-white">
                ON Air
              </div>
            </div>

            <ChannelGrid showWatchNow={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
