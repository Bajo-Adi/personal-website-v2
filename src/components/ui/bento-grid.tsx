import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <ul className={cn(
      "grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:grid-rows-4",
      className,
    )}>
      {children}
    </ul>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href?: string;
  cta?: string;
}) => (
  <li className={cn("min-h-[18rem] list-none", className)}>
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/20 p-2 md:rounded-[1.5rem] md:p-3">
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
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/20 bg-neutral-900 p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
        {background}
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/10 p-2">
            <Icon className="h-4 w-4 text-white" />
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
  </li>
);

export { BentoCard, BentoGrid };
