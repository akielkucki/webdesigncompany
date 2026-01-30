"use client";

import { motion } from "motion/react";
import { Button, Container } from "@/components/ui";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

// Timing constants for synchronized animation
const timing = {
  // Phase 1: Key words reveal (0 - 1s)
  digital: 0.1,
  experiences: 0.35,
  growth: 0.6,
  underline: 1.0,

  // Phase 2: Supporting context fades in (1.4s+)
  weDesign: 1.4,
  thatDrive: 1.6,

  // Phase 3: Rest of page reveals (1.8s+)
  status: 1.8,
  description: 2.1,
  buttons: 2.4,
  socialProof: 2.7,
  scrollIndicator: 3.0,
};

// Cubic bezier for smooth, elegant easing
const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">


          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
            {/* "We design and build" - supporting text, appears in Phase 2 */}
            <motion.span
              initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              animate={{ opacity: [0,0.5,1], y: 0, filter: "blur(0px)", color: "#e1e1e1" }}
              transition={{ duration: 0.8, delay: timing.weDesign, ease: "easeOut" }}
              className="block "
            >
              We design and build
            </motion.span>

            {/* "digital experiences" - KEY WORDS */}
            <span className="block">
              <motion.span
                initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: timing.digital,
                  ease: smoothEase,
                }}
                className="inline-block text-accent"
              >
                digital
              </motion.span>
              &nbsp;
              <motion.span
                initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: timing.experiences,
                  ease: smoothEase,
                }}
                className="inline-block text-accent"
              >
                experiences
              </motion.span>
            </span>

            {/* "that drive growth" */}
            <span className="block">
              {/* "that drive" - supporting text */}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: [0,0.5,1], y: 0, filter: "blur(0px)", color: "#e1e1e1" }}
                transition={{ duration: 0.8, delay: timing.thatDrive, ease: "easeOut" }}
                className=""
              >
                that drive
              </motion.span>
              &nbsp;
              {/* "growth" - KEY WORD with emphasis */}
              <motion.span
                initial={{ opacity: 0, y: 50, scale: 0.75 }}
                animate={{ opacity: 1, y: 0, scale: [0.99,2,1] }}
                transition={{
                  duration: 1,
                  delay: timing.growth,
                  ease: smoothEase,
                }}
                className="inline-block relative"
              >
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: timing.underline,
                    ease: smoothEase,
                  }}
                  className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-accent via-accent to-transparent origin-left rounded-full"
                />
                {/* Glow pulse */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.5, 0.25], scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 1.8, delay: timing.underline + 0.2, ease: "easeOut" }}
                  className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full -z-10"
                />
                <span className="text-foreground">growth</span>
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", color: "#fff" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: timing.description }}
            className="mt-10 md:mt-12 max-w-2xl text-lg md:text-xl lg:text-2xl text-muted-light font-light leading-relaxed"
          >
            Strategic design and development for SaaS companies ready to{" "}
            <motion.span
              initial={{ color: "inherit" }}
              animate={{ color: "var(--color-accent)" }}
              transition={{ duration: 0.5, delay: timing.description + 0.4 }}
              className="font-normal"
            >
              convert visitors into customers
            </motion.span>
            .
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: timing.buttons }}
            className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: timing.buttons }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                  //@ts-ignore
                size="lg"
                className="h-14 md:h-16 px-10 bg-accent text-background hover:bg-accent-hover font-medium transition-colors duration-300"
              >
                Start a Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: timing.buttons + 0.15 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                  //@ts-ignore
                size="lg"
                variant="outline"
                className="h-14 md:h-16 px-10 border-border text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: timing.socialProof }}
            className="mt-20 md:mt-28 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          >
            {/* Avatar stack */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: timing.socialProof + i * 0.05 }}
                    className="relative h-11 w-11 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-muted-light font-light">
                Trusted by 10+ local businesses
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-10 w-px bg-border" />

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: timing.socialProof + 0.3 + i * 0.05 }}
                  >
                    <Star className="h-5 w-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-muted-light font-light">
                5.0 from 500+ reviews
              </span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}