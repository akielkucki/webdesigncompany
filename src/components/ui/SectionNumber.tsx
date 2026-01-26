"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function SectionNumber({ number }: { number: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"] // Adjust when the fill happens
  });

  // Transform scroll progress to clip percentage
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1], // Start filling at 30% scroll
        ["circle(0% at 0% -150%)", "circle(100% at 50% 50%)"],
    );

  return (
      <span ref={ref} className="relative inline-block">
      {/* Base layer - muted/unfilled */}
        <span className="text-[120px] md:text-[180px] font-extralight leading-none text-muted/30 select-none">
        {number}
      </span>

        {/* Overlay layer - filled color, clipped by scroll */}
        <motion.span
            style={{ clipPath }}
            className="absolute inset-0 text-[120px] md:text-[180px] font-extralight leading-none text-primary select-none"
        >
        {number}
      </motion.span>
    </span>
  );
}
