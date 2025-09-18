"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { fetchSimpleIcons, renderSimpleIcon, SimpleIcon, Cloud, ICloud } from "react-icon-cloud"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

// Custom render function that preserves original logo colors
const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  // Add null check to prevent errors
  if (!icon) {
    console.log('No icon provided to renderCustomIcon');
    return null;
  }

  console.log('Rendering icon:', icon.title, icon);

  const bgHex = "#080510"; // Dark background like the working icon-cloud
  const fallbackHex = "#ffffff"; // Fallback for icons without color
  const minContrastRatio = 2; // Back to original contrast ratio

  try {
    const result = renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size: 48, // Slightly larger icons
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    });
    console.log('renderSimpleIcon result:', result);
    return result;
  } catch (error) {
    console.error('Error rendering icon:', error);
    return null;
  }
};

const Carousel = memo(
  ({
    handleClick,
    controls,
    skills,
    isCarouselActive,
    iconData,
    rotation,
  }: {
    handleClick: (skill: { slug: string; name: string }, index: number) => void
    controls: any
    skills: { slug: string; name: string }[]
    isCarouselActive: boolean
    iconData: any
    rotation: any
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1800 : 2800 // Increased width for more spacing
    const faceCount = skills.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )
    
    // Create opacity transforms for each skill
    const opacityTransforms = useMemo(() => {
      return skills.map((_, i) => {
        const baseRotationAngle = i * (360 / faceCount);
        return useTransform(rotation, (currentRotation) => {
          const totalAngle = baseRotationAngle + currentRotation;
          const normalizedAngle = Math.abs(totalAngle % 360);
          const distanceFromFront = Math.min(normalizedAngle, 360 - normalizedAngle);
          return Math.max(0, 1 - (distanceFromFront / 90)); // Fade out over 90 degrees
        });
      });
    }, [skills, faceCount, rotation]);

    // Create rendered icons the same way as icon-cloud
    const renderedIcons = useMemo(() => {
      if (!iconData || !iconData.simpleIcons) {
        console.log('No icon data available');
        return {};
      }

      console.log('Processing icons for skills:', skills);
      console.log('Available icons:', Object.keys(iconData.simpleIcons));

      const icons: { [key: string]: any } = {};
      skills.forEach(skill => {
        const icon = iconData.simpleIcons[skill.slug];
        console.log(`Processing ${skill.slug}:`, icon);
        if (icon) {
          const renderedIcon = renderCustomIcon(icon, "dark");
          if (renderedIcon) {
            icons[skill.slug] = renderedIcon;
            console.log(`Successfully rendered icon for ${skill.slug}`);
          } else {
            console.log(`Failed to render icon for ${skill.slug}`);
          }
        } else {
          console.log(`No icon found for ${skill.slug}`);
        }
      });
      console.log('Final rendered icons:', Object.keys(icons));
      return icons;
    }, [iconData, skills]);

    // Navigation functions
    const rotateLeft = () => {
      const currentRotation = rotation.get();
      const rotationStep = (360 / faceCount) * 3; // Rotate by 3 panes
      controls.start({
        rotateY: currentRotation - rotationStep,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
        },
      });
    };

    const rotateRight = () => {
      const currentRotation = rotation.get();
      const rotationStep = (360 / faceCount) * 3; // Rotate by 3 panes
      controls.start({
        rotateY: currentRotation + rotationStep,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
        },
      });
    };

    return (
      <div
        className="flex h-full items-center justify-center relative overflow-hidden"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={rotateLeft}
          className="absolute left-2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105"
          aria-label="Rotate left"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={rotateRight}
          className="absolute right-2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105"
          aria-label="Rotate right"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.delta.x * 0.3)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.8,
              },
            })
          }
          animate={controls}
        >
          {skills.map((skill, i) => {
            const renderedIcon = renderedIcons[skill.slug];
            const baseRotationAngle = i * (360 / faceCount);
            const opacityTransform = opacityTransforms[i];
            
            return (
               <motion.div
                 key={`key-${skill.slug}-${i}`}
                 className="absolute flex h-full origin-center items-center justify-center p-4"
                 style={{
                   width: `${faceWidth}px`,
                   transform: `rotateY(${baseRotationAngle}deg) translateZ(${radius}px)`,
                   opacity: opacityTransform,
                 }}
                 onClick={() => handleClick(skill, i)}
               >
                <motion.div
                  className="flex flex-col items-center justify-center gap-3 text-center h-full"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                >
                   <div className="w-20 h-20 flex items-center justify-center mb-2">
                     {renderedIcon ? (
                       <div className="w-20 h-20 flex items-center justify-center">
                         {renderedIcon}
                       </div>
                     ) : (
                       <span className="text-3xl font-bold text-white">
                         {skill.name.charAt(0).toUpperCase()}
                       </span>
                     )}
                   </div>
                  <span className="text-xs font-medium text-white capitalize leading-tight px-2 break-words max-w-[120px] text-center">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    )
  }
)

Carousel.displayName = 'Carousel';

function ThreeDPhotoCarousel({ skills }: { skills?: { slug: string; name: string }[] }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [iconData, setIconData] = useState<any>(null)
  const controls = useAnimation()
  const rotation = useMotionValue(0)
  
  // Default skills if none provided
  const defaultSkills = [
    { slug: "typescript", name: "TypeScript" },
    { slug: "javascript", name: "JavaScript" },
    { slug: "react", name: "React" },
    { slug: "nextjs", name: "Next.js" },
    { slug: "nodejs", name: "Node.js" },
    { slug: "python", name: "Python" },
    { slug: "java", name: "Java" },
    { slug: "flutter", name: "Flutter" },
    { slug: "android", name: "Android" },
    { slug: "aws", name: "AWS" },
    { slug: "docker", name: "Docker" }
  ]
  
  const skillsList = skills || defaultSkills

  // Fetch icons the same way as icon-cloud
  useEffect(() => {
    if (skillsList.length > 0) {
      const slugs = skillsList.map(skill => skill.slug);
      console.log("Fetching icons for skills:", slugs);
      fetchSimpleIcons({ slugs }).then((data) => {
        console.log("Fetched icon data:", data);
        console.log("Simple icons:", data?.simpleIcons);
        if (data && data.simpleIcons) {
          setIconData(data);
        }
      }).catch((error) => {
        console.error("Error fetching icons:", error);
        setIconData(null);
      });
    }
  }, [skillsList]);

  const handleClick = (skill: { slug: string; name: string }) => {
    setActiveSkill(skill.slug)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveSkill(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`skill-container-${activeSkill}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              layoutId={`skill-${activeSkill}`}
              className="bg-neutral-900 p-8 rounded-2xl border border-white/20 text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            >
              <div className="w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                {iconData?.simpleIcons?.[activeSkill] ? (
                  <div className="w-20 h-20 flex items-center justify-center">
                    {(() => {
                      const renderedIcon = renderCustomIcon(iconData.simpleIcons[activeSkill], "dark");
                      return renderedIcon || (
                        <span className="text-4xl font-bold text-white">
                          {activeSkill.charAt(0).toUpperCase()}
                        </span>
                      );
                    })()}
                  </div>
                ) : (
                  <span className="text-4xl font-bold text-white">
                    {activeSkill.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                {skillsList.find(skill => skill.slug === activeSkill)?.name || activeSkill}
              </h3>
              <p className="text-gray-300">
                Click anywhere to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[300px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          skills={skillsList}
          isCarouselActive={isCarouselActive}
          iconData={iconData}
          rotation={rotation}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
