import NavBar from "@/app/components/NavBar";
import Sidebar from "@/app/components/Sidebar";
import LiveStreamGrid from "@/app/components/LiveStreamGrid";

export default function LiveStreamsPage() {
  return (
    <main className="flex flex-col h-screen w-full bg-black text-white overflow-hidden">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage="live-streams" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <div className="mb-6">
              <h2 className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm text-xl font-bold rounded-md">
                Live Now
              </h2>
            </div>

            <LiveStreamGrid />

            <div className="my-6">
              <h2 className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm text-xl font-bold rounded-md">
                Coming Up
              </h2>
            </div>

            <LiveStreamGrid showSchedule={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
