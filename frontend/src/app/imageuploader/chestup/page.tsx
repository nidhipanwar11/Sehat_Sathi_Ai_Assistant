import ScrollBar from "@/components/contact/scrollbar"
import ChestImgUp from "@/components/imageuploader/chestImgUp"
import Navbar from "@/components/navBar/navBar"
import ChestTumourPage from "@/components/page/knoChest"

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <ChestTumourPage/>
      <ChestImgUp/>
      </div>
    </div>
    
  )
}

export default page