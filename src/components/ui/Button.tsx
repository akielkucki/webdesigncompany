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
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const baseStyles =
    `inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer rounded-full`;

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25",
    outline:
      "border border-border bg-white text-foreground hover:border-accent hover:text-accent",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={twMerge(baseStyles, variants[variant], className, disabled && "opacity-50 cursor-not-allowed")}
    >
      {children}
    </Component>
  );
}
