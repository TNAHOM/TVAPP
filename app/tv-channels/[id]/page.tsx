import NavBar from "@/app/components/NavBar";
import Sidebar from "@/app/components/Sidebar";
import ChannelDetail from "@/app/components/ChannelDetail";
import VideoGrid from "@/app/components/VideoGrid";

export default function TVChannelDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main
      className="relative flex flex-col h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%), url('/Images/frontImage.png')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePage="tv-channels" transparent={true} />

        <div className="flex-1 overflow-y-auto relative">
          <div className="relative min-h-[500px]">
            <div className="relative z-20 p-6 md:p-10">
              <ChannelDetail />
            </div>
          </div>

          <div className=" p-4 md:p-6">
            <h2 className="bg-[#999999] rounded  py-1 px-2 mb-2 w-24 text-center font-semibold">
              MyVideos
            </h2>
            <VideoGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
