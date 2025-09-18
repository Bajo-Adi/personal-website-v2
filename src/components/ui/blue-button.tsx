import React from "react";

import { cn } from "@/lib/utils";

interface BlueButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Mimics RainbowButton but with a blue-only animated gradient glow
export function BlueButton({ children, className, ...props }: BlueButtonProps) {
  return (
    <button
      className={cn(
        // base
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors",
        "[background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]",

        // before glow (animated background)
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow",
        "before:bg-[linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // light mode button fill + blue animated border stripe
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)]",

        // dark mode button fill + blue animated border stripe
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#60a5fa,#2563eb,#1d4ed8,#3b82f6,#60a5fa)]",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BlueButton;


