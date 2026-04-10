import React from "react";
import GradientButton from "./Ui/Button/GradientButton";
import BannerImage from "../assets/Banner.png";
import ColorLayer from "../assets/ColorLayer.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section id="banner" className="bg-white px-6 md:px-10 py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  font-medium px-4 py-2 rounded-full mb-5 border border-purple-100">
            <span className=" animate-pulse ">
              <img src={ColorLayer} alt="" />
            </span>
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-5">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <GradientButton ButtonText="Explore Products" />
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full transition-colors text-sm cursor-pointer">
                <span>
                  <Play className="text-[#4F39F6] " />
                </span>
                <span className=" text-[#4F39F6] font-bold text-base">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className=" flex justify-center md:justify-end">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
