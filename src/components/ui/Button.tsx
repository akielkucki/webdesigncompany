"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {twMerge} from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
    className,
}: ButtonProps) {
  const baseStyles =
    `inline-flex items-center justify-center px-19 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer`;

  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover",
    outline:
      "border border-foreground/20 text-foreground hover:border-accent hover:text-accent",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={twMerge(baseStyles,variants[variant],className)}
    >
      {children}
    </Component>
  );
}
