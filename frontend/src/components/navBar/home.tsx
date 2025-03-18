import Image from "next/image";
import Navbar from "./navBar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0D0D1F] to-[#432663]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 min-h-[calc(100vh-4rem)]">
        
        {/* Left Section: Text & Buttons */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight mt-10 md:mt-20">
            Sehat-Sathi
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mt-3">
            "Your AI Health Companion"
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/diseasecard">
              <div className="group">
                <button className="flex items-center justify-center px-6 py-3 w-40 bg-white text-black rounded-full font-semibold text-lg shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-[#5729D6] hover:to-[#df86aa] hover:text-white">
                  Check
                  <ArrowRight className="ml-2 text-pink-400 transition-colors duration-300 group-hover:text-white" size={20} />
                </button>
              </div>
            </Link>

            <Link href="/chat-bot">
              <div className="group">
                <button className="flex items-center justify-center px-6 py-3 w-40 bg-black text-white rounded-full font-semibold text-lg shadow-md transition duration-300 hover:bg-white hover:text-black whitespace-nowrap">
                  Chat-Bot
                  <ArrowRight className="ml-2 text-white transition-colors duration-300 group-hover:text-black" size={20} />
                </button>
              </div>
            </Link>
          </div>

          {/* Image Below Buttons on Mobile */}
          <div className="flex justify-center md:hidden w-full mt-6">
            <Image
              src="/home.png"
              alt="Floating"
              width={400}
              height={398}
              className="animate-float max-w-[60%] sm:max-w-[50%] md:max-w-none"
            />
          </div>
        </div>

        {/* Right Section: Image (For Desktop View) */}
        <div className="hidden md:flex justify-end w-full md:w-1/2">
          <Image
            src="/home.png"
            alt="Floating"
            width={400}
            height={398}
            className="animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
