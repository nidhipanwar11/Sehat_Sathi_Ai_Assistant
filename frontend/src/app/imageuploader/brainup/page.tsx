import BrainImgUp from "@/components/imageuploader/brainImgUp";
import Navbar from "@/components/navBar/navBar";
import BrainTumourPage from "@/components/page/knoBrain";
import ScrollBar from "@/components/contact/scrollbar"; // Import ScrollBar component

function Page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden"> {/* Prevents body scrollbar */}
      <Navbar />
      <ScrollBar /> {/* Injects custom scrollbar styles */}

      {/* Scrollable Content */}
      <div className="custom-scrollbar h-screen overflow-y-auto">
        <BrainTumourPage />
        <BrainImgUp />
      </div>
    </div>
  );
}

export default Page;