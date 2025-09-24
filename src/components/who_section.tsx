"use client";
import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/sliding-button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30 text-black"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

const WhoAmI = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLastWordVisible, setIsLastWordVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const text = "Curiosity is my compass, code is my craft, impact is my destination.";
  const words = text.split(" ");

  return (
    <div id="about-me" className="bg-black pt-24 sm:pt-28 lg:pt-32">
      <div ref={targetRef} className="relative z-0 h-[200vh]">
        <div className="sticky top-24 sm:top-28 lg:top-32 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center h-[80vh] max-w-7xl bg-transparent px-4 py-4 lg:px-[1rem] lg:py-[2rem] space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 max-w-2xl">
            <p className="flex flex-wrap p-2 font-header text-2xl sm:text-3xl lg:text-4xl font-bold text-black/5 dark:text-white/20 md:p-4 lg:p-6">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
            <div className="px-2 sm:px-4 lg:px-[3rem] mt-6">
              <span className="font-body text-lg sm:text-xl font-light text-start text-gray-300 block">
                I&apos;m an engineer, researcher, and builder at heart, fascinated by intelligence in all its forms:
                artificial, human, and collective. I am a senior at <span className="font-semibold text-blue-400">Georgia Tech</span>, 
                pursuing a <span className="font-semibold text-blue-400">B.S. in Computer Science</span> with concentrations in 
                 <span className="font-semibold text-blue-400"> AI and Modelling and Simulations</span>,
                 seeking <span className="font-semibold text-blue-400">Machine Learning Engineer</span> roles. 
                 I enjoy turning complex problems into elegant, 
                usable solutions, from scalable backend systems to advanced AI models and ambitious product ideas. 
                Guided by curiosity and driven by impact, I focus on creating technology that is innovative, 
                reliable, and built to scale.
              </span>
              <span className="font-body text-lg sm:text-xl font-light text-start text-gray-300 mt-4 block">
                Keep scrolling and learn more about what I have been working on ...
              </span>
              <div className="flex gap-4 mt-8">
                <Button asChild className="group relative overflow-hidden rounded-full font-body text-sm font-medium bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)]">
                  <Link
                    href="https://www.linkedin.com/in/abajoria04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="relative inline-flex items-center gap-x-2 pr-14"
                  >
                    <span className="transition-opacity duration-500 group-hover:opacity-0">Let&apos;s connect</span>
                    <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                      <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
                    </i>
                  </Link>
                </Button>

                <Button 
                  onClick={() => {
                    const resumeSection = document.getElementById('resume');
                    if (resumeSection) {
                      resumeSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative overflow-hidden rounded-full font-body text-sm font-medium bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)]"
                >
                  <div className="relative inline-flex items-center gap-x-2 pr-14">
                    <span className="transition-opacity duration-500 group-hover:opacity-0">Resume</span>
                    <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                      <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
                    </i>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-md relative flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto rounded-lg shadow-2xl relative z-10"
              style={{ 
                position: 'relative',
                transform: 'none',
                willChange: 'auto'
              }}
            >
              <source src="/about-me-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
