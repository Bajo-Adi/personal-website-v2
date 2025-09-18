"use client";
import { useEffect, useState } from "react";
import { Waves } from "./ui/waves-background";
import { ChevronDown } from "lucide-react";

const Homepage = () => {
  const [menuValue, setMenuValue] = useState("Initial");


  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center bg-neutral-950 relative overflow-hidden">
      <span className="z-10 whitespace-pre-wrap text-center text-5xl font-bold font-header tracking-tighter text-white">
        Hey, it&apos;s Aditya!
      </span>
      
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(200, 200, 200, 0.4)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      
      {/* Downward arrow button */}
      <button
        onClick={() => {
          const aboutMeSection = document.getElementById('about-me');
          if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-black rounded-full p-3 hover:bg-gray-800 transition-colors duration-200 shadow-lg ring-2 ring-white/20 hover:ring-white/40 transition-all duration-200"
        aria-label="Scroll to About Me section"
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Homepage;

