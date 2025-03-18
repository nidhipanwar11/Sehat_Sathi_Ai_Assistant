import ScrollBar from "@/components/contact/scrollbar";
import TuberImgUp from "@/components/imageuploader/tuberImgUp";
import Navbar from "@/components/navBar/navBar";
import TuberPage from "@/components/page/knoTuber";

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <TuberPage/>
      <TuberImgUp/>
      </div>
    </div>
    
  )
}

export default page