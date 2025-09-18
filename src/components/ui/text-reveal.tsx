"use client";

import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import { RainbowButton } from "./rainbow-button";
import Link from "next/link";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLastWordVisible, setIsLastWordVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col h-[30%] max-w-4xl items-start bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 font-header text-4xl font-bold text-black/5 dark:text-white/20 md:p-8 lg:p-10"
          }
        >
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
        <span className="font-body text-xl font-light text-start px-[3rem] text-gray-300">
        I'm an engineer, researcher, and builder at heart, fascinated by intelligence in all its forms:
         artificial, human, and collective. I enjoy turning complex problems into elegant, 
         usable solutions, from scalable backend systems to advanced AI models and ambitious product ideas. 
         Guided by curiosity and driven by impact, I focus on creating technology that is innovative, 
         reliable, and built to scale.
        </span>
        <br />
        <span className="font-body text-xl font-light text-start px-[3rem] text-gray-300 mt-4">
         Keep scrolling and learn more about what I have been working on ...
        </span>
        <div className="flex gap-4 mt-8 ms-[3rem]">
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
  );
};

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

export default TextRevealByWord;