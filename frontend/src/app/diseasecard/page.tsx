import { BrainCancer } from "@/components/diseaseCards/brainCancer";
import { BreastCancer } from "@/components/diseaseCards/breastCancer";
import { SkinCancer } from "@/components/diseaseCards/skinCancer";
import { TuberCancer } from "@/components/diseaseCards/tuberCancer";
import Navbar from "@/components/navBar/navBar";

export default function HomePage() {
  return (
    <div className="bg-[#0D0D1F] min-h-screen">
      <Navbar />
      <div className="text-center mt-4">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#0D0D1F] to-white my-0">
          Explore Our Services
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          "Your Health Matters. Stay Informed, Stay Ahead"
        </p>
      </div>
      <div className="flex justify-center items-start px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
          <div className="p-4 hover:-translate-y-8 transition duration-300">
            <BrainCancer />
          </div>
          <div className="p-4 hover:-translate-y-8 transition duration-300">
            <BreastCancer />
          </div>
          <div className="p-4 hover:-translate-y-8 transition duration-300">
            <SkinCancer />
          </div>
          <div className="p-4 hover:-translate-y-8 transition duration-300">
            <TuberCancer />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-white">Stay Updated</h3>
        <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest health updates.</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border-2 border-gray-700 focus:outline-none text-black" />
          <button className="px-2 py-1 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">Subscribe</button>
        </div>
      </div>

    </div>
  );
}
