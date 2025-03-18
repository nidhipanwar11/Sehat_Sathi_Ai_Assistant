import ScrollBar from "@/components/contact/scrollbar"
import SkinImgUp from "@/components/imageuploader/skinImgUp"
import Navbar from "@/components/navBar/navBar"
import SkinCancerPage from "@/components/page/knoSkin"

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <SkinCancerPage/>
      <SkinImgUp/>
      </div>
    </div>
    
  )
}

export default page