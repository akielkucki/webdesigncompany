"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  speed = "normal",
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse"
          )}
          style={{
            animationDuration: speedMap[speed],
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
