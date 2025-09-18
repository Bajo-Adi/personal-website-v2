"use client";
import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { RainbowButton } from "./ui/rainbow-button";
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
      <span className={"absolute opacity-30 text-white"}>{children}</span>
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
    <div id="about-me" className="bg-black pt-20">
      <div ref={targetRef} className="relative z-0 h-[200vh]">
        <div className="sticky top-20 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center h-[80vh] max-w-7xl bg-transparent px-[1rem] py-[2rem] space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 max-w-2xl">
            <p className="flex flex-wrap p-2 font-header text-4xl font-bold text-black/5 dark:text-white/20 md:p-4 lg:p-6">
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
            <div className="px-[1rem] lg:px-[3rem] mt-6">
              <span className="font-body text-xl font-light text-start text-gray-300 block">
                I&apos;m an engineer, researcher, and builder at heart, fascinated by intelligence in all its forms:
                artificial, human, and collective. I enjoy turning complex problems into elegant, 
                usable solutions, from scalable backend systems to advanced AI models and ambitious product ideas. 
                Guided by curiosity and driven by impact, I focus on creating technology that is innovative, 
                reliable, and built to scale.
              </span>
              <span className="font-body text-xl font-light text-start text-gray-300 mt-4 block">
                Keep scrolling and learn more about what I have been working on ...
              </span>
              <div className="flex gap-4 mt-8">
                <RainbowButton className="font-body text-sm font-medium">
                  <Link
                    href="https://www.linkedin.com/in/abajoria04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                  >
                    Let&apos;s connect
                  </Link>
                </RainbowButton>
                
                <RainbowButton className="font-body text-sm font-medium">
                  <Link
                    href="https://drive.google.com/file/d/1LHbRGDOmrW63ZlKkDhWsoHSOk0Gk4ziF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                  >
                    Resume
                  </Link>
                </RainbowButton>
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
