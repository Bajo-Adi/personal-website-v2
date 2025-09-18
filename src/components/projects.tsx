"use client";
import Image from "next/image";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { LaptopMinimal, Tablet, Smartphone, Users, Globe, Music, Brain, Waypoints, BookOpenText } from "lucide-react";
import { useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

// Custom Flip Card Component for DAISIE and CoFiscal
const FlipCard = ({ name, description, href, cta, className, imageSrc = "/logo.png" }: {
  name: string;
  description: string;
  href?: string;
  cta?: string;
  className: string;
  imageSrc?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <li className={cn("min-h-[18rem] list-none", className)}>
      <div 
        className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/20 p-2 md:rounded-[1.5rem] md:p-3 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant="white"
          className="z-20"
        />
        <div className="relative h-full overflow-hidden rounded-xl border-[0.75px] border-white/20 bg-neutral-900 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className={cn(
            "relative h-full transition-transform duration-700 transform-style-preserve-3d",
            isFlipped ? "rotate-y-180" : ""
          )}>
            {/* Front side - Image */}
            <div className="absolute inset-0 backface-hidden">
              <div className="relative h-full flex items-center justify-center p-6">
                <Image
                  src={imageSrc}
                  alt={`${name} Image`}
                  width={200}
                  height={200}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
            
            {/* Back side - Content */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden p-6">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/10 p-2">
                    <Tablet className="h-4 w-4 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                      {name}
                    </h3>
                    <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-300">
                      {description}
                    </h2>
                  </div>
                </div>
                
                {href && cta && (
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      asChild 
                      size="sm" 
                      className="pointer-events-auto font-body bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg"
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {cta}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const features = [
  {
    name: "DAISIE",
    description: "Enables diagnosis of Alzheimer's and Parkinson's by studying pen stroke patterns on specially digned tests using an iPad app. This helped reduce costs and processing times by 10x.",
    href: "https://devpost.com/software/daisie",
    cta: "Learn more",
    className: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    isFlipCard: true,
  },
  {
    name: "CoFiscal",
    description: "Analyzes loan terms, economic conditions, and other factors to predict the likelihood of a loan default",
    href: "https://devpost.com/software/cofiscal",
    cta: "Learn more",
    className: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    isFlipCard: true,
    imageSrc: "/cofiscal-image.jpeg",
  },
  {
    Icon: Globe,
    name: "Cenotium",
    description: "Agentic internet browser and AI assistant to facillitate agent based web browsing and complex HTN based task planning and execution",
    href: "https://devpost.com/software/cenotium",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    Icon: Music,
    name: "Turntable",
    description:
      "AI DJ to stem seperate music, analyze vocals and song structure toautomatically seamlessly mix music from a provided playlist",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:[grid-area:3/7/4/13] xl:[grid-area:3/1/4/5]",
  },
  {
    Icon: Brain,
    name: "Multi-Object Detection",
    description: "Created segmentation, labeling and multi-object detection models for the COCO dataset",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]",
  },
  {
    Icon: Brain,
    name: "LayerSkip",
    description: "Trained a decoder based Transformer model with LayerSkip, CALM based dynamic early exit pretraining to reduce inference time and obtimizie layer wise knowledge distribution",
    href: "https://github.com/sid0402/7644Project",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    Icon: BookOpenText,
    name: "TAIL Lab at Georgia Tech",
    description: "Developing an effecient HTN based self-aware learning agent using STAND. This model will leverage LLMs and HTNs to create tutors to perform demonstration learning and serve as tutors.",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:[grid-area:4/1/5/13] xl:[grid-area:3/5/4/13]",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="flex justify-center px-5 pt-5 pb-0 bg-neutral-950">
      <div className="mt-20 max-w-6xl px-5 mb-0">
        <span className="font-header font-bold text-4xl text-white">Projects</span>
        <BentoGrid className="mt-8">
          {features.map((feature) => {
            if (feature.isFlipCard) {
              return (
                <FlipCard 
                  key={feature.name} 
                  name={feature.name}
                  description={feature.description}
                  href={feature.href}
                  cta={feature.cta}
                  className={feature.className}
                  imageSrc={feature.imageSrc}
                />
              );
            }
            return <BentoCard key={feature.name} {...feature} />;
          })}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Projects;
