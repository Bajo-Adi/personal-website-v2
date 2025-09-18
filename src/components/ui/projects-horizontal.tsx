"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";
import { delay, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { LaptopMinimal, Tablet, Smartphone, Users, Globe, Music, Brain, Waypoints, BookOpenText, ChevronLeft, ChevronRight, Code } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Custom Flip Card Component for DAISIE and CoFiscal
const FlipCard = ({ name, description, href, cta, imageSrc = "/logo.png", features = [] }: {
  name: string;
  description: string;
  href?: string;
  cta?: string;
  imageSrc?: string;
  features?: string[];
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card className="relative text-white border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 w-[400px] h-[650px] cursor-pointer">
      <div 
        className={cn(
          "relative h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
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
        <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 flex flex-col">
          <div className="space-y-6 flex-1">
            <div className="space-y-4">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                className="text-2xl font-semibold mb-3"
              >
                {name}
              </GradientText>
              <p className="text-sm text-gray-300 leading-relaxed h-[7.2rem] overflow-hidden">
                {description}
              </p>
            </div>

            <div className="flex justify-center items-center h-[64px]">
              {href && cta && (
                <button className="w-full py-3 px-4 text-xl rounded-xl bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                    {cta}
                  </a>
                </button>
              )}
            </div>

            {features && features.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-neutral-700">
                <h4 className="font-medium text-base text-white">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

const ProjectsSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  useEffect(() => {
    const handleToggleProjects = (event: CustomEvent) => {
      const toggleValue = event.detail;
      setSelected(toggleValue);
      onSwitch(toggleValue);
    };

    window.addEventListener('toggleProjects', handleToggleProjects as EventListener);
    
    return () => {
      window.removeEventListener('toggleProjects', handleToggleProjects as EventListener);
    };
  }, [onSwitch]);

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Projects</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full  rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Experiences</span>
        </button>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "CoFiscal",
    description: "Analyzes loan terms, economic conditions, and other factors to predict the likelihood of a loan default",
    href: "https://devpost.com/software/cofiscal",
    cta: "Learn more",
    //isFlipCard: true,
    //imageSrc: "/cofiscal-image.jpeg",
    features: [
        "Developed Web App to assist borrowers make optimized loan decisions based on their predicted default risk.",
        "Built LightGBM model to predict the default risk with 92% accuracy using 250,000 datapoints pre-SMOTE.",
        "Used Google’s PaLM-2 to provide insights into personal default cases and PDF-miner to autofill 75% fields.",
      ],
  },
  {
    Icon: Globe,
    name: "Cenotium",
    description: "Agentic internet browser and AI assistant to facilitate agent based web browsing and complex HTN based task planning and execution",
    href: "https://devpost.com/software/cenotium",
    cta: "Learn more",
    features: [
        "Built multi-agent browser with Next.js & LLM Compiler to automate web tasks & store page schema.",
        "Used Vision, Grounding, Action models to detect and interact with UI elements, enabling task execution.",
        "Maintained CI/CD pipelines for ETL agents; integrated logging to support deployment, and error tracing.",
      ],
  },
  {
    Icon: Music,
    name: "Turntable",
    description: "AI DJ to stem separate music, analyze vocals and song structure to automatically seamlessly mix music from a provided playlist",
    features: [
        "Architected AI-driven music mixing platform to analyze & blend audio tracks for seamless listening.",
        "Adapted a chroma song structure analyzer, a CRNN for phrase alignment, and Spleeter for stem separation.",
        "Deployed React, Flask & FastAPI on AWS Lightsail, Vercel using Docker container w/90+ Lighthouse score",
    ],
  },
  {
    Icon: Brain,
    name: "Multi-Object Detection",
    description: "Created segmentation, labeling and multi-object detection models for the COCO dataset",
    features: [
        "Developed a pipeline for multi-class object detection on COCO dataset, covering data ingestion and cleaning.",
        "Orchestrated a data preprocessing workflow, leveraging PCA, with processed data stored in Firebase.",
        "Applied K-means clustering to autoencoded latent representations, achieving a 0.006 validation loss.",
        "Fine-tuned a Masked R-CNN leveraging Meta’s Detectron2 for instance segmentation to reach 80% accuracy.",
    ],
  },
  {
    Icon: Brain,
    name: "LayerSkip",
    description: "Trained a decoder based Transformer model with LayerSkip, CALM based dynamic early exit pretraining to reduce inference time and optimize layer wise knowledge distribution",
    href: "https://github.com/sid0402/7644Project",
    cta: "Learn more",
    features: [
        "Finetuned Llama-3.1-8B using Amazon Reviews and Layer Dropout training to extract review context early.",
        "Performed distribution analysis, dataset profiling and filtering low information samples to ensure data quality",
        "Applied Dynamic Early Exit using CALM scores and Self-Speculative Decoding, achieving speed up of 1.8x.",
      ],
  },
];

const experiences = [
  {
    Icon: Users,
    name: "Rhombus Power",
    subtitle: "Machine Learning Engineer Intern",
    date: "May 2025 – Aug 2025",
    description: "",
    href: "https://www.rhombuspower.com/",
    cta: "Company Website",
    features: [
        "Developed large-scale CI/CD pipeline with Jenkins; added automated validation pytests to ensure data integrity",
        "Improved SQL performance by 27% via sharding, and 3NF schema design, enabling efficient query execution.",
        "Increased forecast accuracy by 13.82%. using ML techniques: (Prophet, MCMC & knowledge distillation).",
        "Built a scalable Prophet and LPTM-based framework, enabling dynamic adaptation of models across datasets."
      ],
  },
  {
    Icon: BookOpenText,
    name: "TAIL Lab at Georgia Tech",
    subtitle: "Lead Student Researcher",
    date: "June 2025 – Present",
    description: "",
    href: "https://tail.cc.gatech.edu/",
    cta: "Lab Website",
    features: [
        "Designed an Interactive Task Learning Intelligent Tutor leveraging HTNs, agent workflows, and STAND.",
        "Implemented programming-by-demonstration, reducing tutor complexity from exponential to polynomial",
        "Integrated LLMs with model tracing, enhancing tutor explainability, adaptability, and transparency",
      ],
  },
  {
    Icon: Globe,
    name: "Percept Pixel",
    subtitle: "Research Intern",
    date: "May 2024 – August 2024",
    description: "",
    href: "https://www.perceptpixel.com/",
    cta: "Company Website",
    features: [
        "Applied large-scale vision models (Meta’s SAM) for segmentation pipelines, integrating outputs in MySQL.",
        "Optimized generative model by applying Stable Diffusion with XLA acceleration to inpaint object in images",
        "Engineered a distribtued scheduler with AWS Cloudwatch, Lambda & Eventbridge to ingest DALL-E images",
        "Deployed model on Nvidia Tesla GPU using Kubernetes & CUDA for launch, achieving 95% user satisfaction.",
      ],
  },
  {
    Icon: Brain,
    name: "PAIR Lab at Georgia Tech",
    subtitle: "Research Assistant",
    date: "January 2024 – May 2025",
    description: "",
    href: "https://www.pair.toronto.edu/",
    cta: "Lab Website",
    features: [
        "Unified 3D Scene Representation for Domain Transfer in Imitation Learning.",
        "Built BC pipeline for DexMots, TCDM, BiManip tasks using 5-fingered hands; ≈100 teleop demos, on Franka.",
        "Developed evaluation pipeline for initial/goals, control noise, symmetry, object/camera changes, and action delay.",
      ],
  },
  {
    Icon: Brain,
    name: "Pine Labs",
    subtitle: "Software Engineer Intern",
    date: "June 2023 – August 2023",
    description: "",
    href: "https://www.pinelabs.com/",
    cta: "Company Website",
    features: [
        "Built time series models for fraud detection on transaction data and traffic control event analysis at scale.",
        "Managed AWS Athena, EC2, and S3 for 89M+ real-time data points in secure storage and rapid retrieval.",
        "Developed ARIMA and Isolation Forest anomaly detection with 92.6% MPE and 0.892 Silhouette Score.",
      ],
  },
];

export default function ProjectsHorizontal() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const toggleProjectsPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  // Get the current data based on toggle state
  const currentData = isYearly ? experiences : projects;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 416; // 400px card width + 16px gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden"
      ref={projectsRef}
    >
      {/* Background Effects */}
      <TimelineContent
        animationNum={4}
        timelineRef={projectsRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1800}
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      
      {/* Blue Gradient Background */}
      <TimelineContent
        animationNum={5}
        timelineRef={projectsRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent>

      {/* Radial Gradient Overlay */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #206ce8 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      {/* Header Section */}
      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-10">
        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            My Projects & Experiences
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={projectsRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          A collection of my work spanning machine learning, web development, and research projects.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={projectsRef}
          customVariants={revealVariants}
        >
          <ProjectsSwitch onSwitch={toggleProjectsPeriod} />
        </TimelineContent>
      </article>

      {/* Horizontal Scroll Container */}
      <div className="relative z-10 px-8 pb-12">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200",
              !canScrollLeft && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200",
              !canScrollRight && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scroll Container */}
          <div className="overflow-hidden mx-16">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              onScroll={checkScrollButtons}
            >
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {currentData.map((item: any, index: number) => (
                <TimelineContent
                  key={item.name}
                  as="div"
                  animationNum={2 + index}
                  timelineRef={projectsRef}
                  customVariants={revealVariants}
                  className="flex-shrink-0"
                >
                  {item.isFlipCard ? (
                    <FlipCard
                      name={item.name}
                      description={item.description}
                      href={item.href}
                      cta={item.cta}
                      imageSrc={item.imageSrc}
                      features={item.features}
                    />
                  ) : (
                    <Card className="relative text-white border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 w-[400px] h-[650px]">
                      <div className="relative h-full p-6 flex flex-col">
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
                        
                        <div className="space-y-6 flex-1">
                          <div className="space-y-4">
                            <GradientText
                              colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                              animationSpeed={3}
                              className="text-2xl font-semibold mb-2"
                            >
                              {item.name}
                            </GradientText>
                            {item.subtitle && (
                              <h3 className="text-lg font-medium text-blue-400 mb-1">
                                {item.subtitle}
                              </h3>
                            )}
                            {isYearly && item.date && (
                              <h4 className="text-lg font-medium text-white text-center mb-3">
                                {item.date}
                              </h4>
                            )}
                            <p className={`text-sm text-gray-300 leading-relaxed ${isYearly ? '' : 'h-[7.2rem] overflow-hidden'}`}>
                              {item.description}
                            </p>
                          </div>

                          {isYearly ? (
                            <>
                              {item.href && item.cta && (
                                <div className="flex justify-center">
                                  <button className="w-full py-3 px-4 text-xl rounded-xl bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                      {item.cta}
                                    </a>
                                  </button>
                                </div>
                              )}
                              {Array.isArray((item as any).features) && (item as any).features.length > 0 && (
                                <div className="space-y-4 pt-6 border-t border-neutral-700">
                                  <h4 className="font-medium text-base text-white">
                                    Key Features:
                                  </h4>
                                  <ul className="space-y-3">
                                    {(item as any).features.map((feature: string) => (
                                      <li key={feature} className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <div className="flex justify-center items-center h-[64px]">
                                {item.href && item.cta && (
                                  <button className="w-full py-3 px-4 text-xl rounded-xl bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                      {item.cta}
                                    </a>
                                  </button>
                                )}
                              </div>
                              {Array.isArray((item as any).features) && (item as any).features.length > 0 && (
                                <div className="space-y-4 pt-6 border-t border-neutral-700">
                                  <h4 className="font-medium text-base text-white">
                                    Key Features:
                                  </h4>
                                  <ul className="space-y-3">
                                    {(item as any).features.map((feature: string) => (
                                      <li key={feature} className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </Card>
                  )}
                </TimelineContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
