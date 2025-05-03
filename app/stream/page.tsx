import NavBar from "@/app/components/NavBar";
import Sidebar from "@/app/components/Sidebar";
import ChannelHeader from "@/app/components/ChannelHeader";
import VideoGrid from "@/app/components/VideoGrid";

export default function Home() {
  return (
    <main
      className="relative flex flex-col h-screen w-full text-white overflow-scroll"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%), url('/Images/frontImage.png')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-20 flex flex-col flex-1">
        <NavBar />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar transparent={true} />

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 md:p-10">
              <ChannelHeader />
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <h2 className="bg-[#FFFFFF]/25 rounded text-white py-1 px-2 mb-2 w-24 text-center">
            MyVideos
          </h2>
          <VideoGrid />
        </div>
      </div>
    </main>
  );
}
