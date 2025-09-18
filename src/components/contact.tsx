"use client";
import Image from "next/image";
import Link from "next/link";
import FlickeringGrid from "./ui/flickering-grid";
import RetroGrid from "./ui/retro-grid";
import { Button } from "./ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaRegFilePdf,
  FaArrowUp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-[100vh] w-full flex-col items-center justify-center rounded-lg border bg-neutral-950 border-white/20 md:shadow-xl"
    >
      <div className="max-w-4xl p-5 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="pointer-events-none z-10 whitespace-pre-wrap font-header text-start text-4xl font-bold leading-none tracking-tighter text-white">
            Contact Me
          </span>
          <Button 
            className="flex gap-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FaArrowUp size={14} />
            Back to Top
          </Button>
        </div>
        <span className="font-body mt-6 sm:mt-8 text-gray-300">
        Every journey offers something new to learn, and I’m always curious 
        to hear different perspectives. If you’d like to collaborate on a project,
         share ideas, or explore new opportunities, 
         I’d be glad to connect and see where our paths align.
        </span>
        <span className="font-body mt-6 sm:mt-8 text-gray-300">
          Email me at{" "}
          <span className="font-semibold text-white">abajoria3@gatech.edu</span> or
          connect with me on the following platforms
        </span>
        <div className="flex gap-x-4 sm:gap-x-8 mt-12 sm:mt-20 font-body">
          <Button className="flex gap-x-3">
            <Link
              href={`https://www.linkedin.com/in/abajoria04/`}
              className="flex gap-x-3"
              
              
            >
              <FaLinkedin size={16} />
              LinkedIn
            </Link>
          </Button>
          <Button>
            <Link
              href={`https://github.com/Bajo-Adi`}
              className="flex gap-x-3"
              
              
            >
              <FaGithub size={16} />
              Github
            </Link>
          </Button>
          <Button 
            onClick={() => {
              const resumeSection = document.getElementById('resume');
              if (resumeSection) {
                resumeSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex gap-x-3" 
            variant={`secondary`}
          >
            <FaRegFilePdf size={16} />
            Resume
          </Button>
        </div>
      </div>
      <RetroGrid className="h-full w-full" />
      <FlickeringGrid 
        className="h-full w-full absolute inset-0" 
        color="rgb(255, 255, 255)"
        maxOpacity={0.1}
      />
    </div>
  );
};

export default Contact;
