"use client";

import { motion } from "motion/react";
import { Button, Container } from "../ui";

export function Hero() {
  // Timing constants for synchronized animation
  const timing = {
    // Phase 1: Key words reveal (0 - 1s)
    digital: 0.1,
    experiences: 0.35,
    convert: 0.6,
    underline: 1.0,

    // Phase 2: Supporting context fades in (1.4s+)
    weBuild: 1.4,
    that: 1.6,

    // Phase 3: Rest of page reveals (1.8s+)
    tagline: 1.8,
    description: 2.1,
    buttons: 2.4,
    scrollIndicator: 2.8,
  };

  return (
      <section className="min-h-screen flex items-center pt-20 overflow-hidden">
        <Container className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline - reveals after key message is established */}
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: timing.tagline }}
            >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Web Design & Development
            </span>
            </motion.div>

            <motion.h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
              {/* "We build" - supporting text, appears in Phase 2 */}
              <motion.span
                  initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  animate={{ opacity: 0.5, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: timing.weBuild, ease: "easeOut" }}
                  className="text-muted-foreground/70"
              >
                We build
              </motion.span>
              &nbsp;

              {/* "digital" - KEY WORD #1 */}
              <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: timing.digital,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
              >
                digital
              </motion.span>
              <br />

              {/* "experiences" - KEY WORD #2 */}
              <motion.span
                  initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: timing.experiences,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
              >
                experiences
              </motion.span>
              &nbsp;

              {/* "that" - supporting text, appears in Phase 2 */}
              <motion.span
                  initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 0.5, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: timing.that, ease: "easeOut" }}
                  className="text-muted-foreground/70"
              >
                that
              </motion.span>
              <br />

              {/* "convert." - KEY WORD #3 with maximum emphasis */}
              <motion.span
                  initial={{ opacity: 0, y: 50, scale: 0.75 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: timing.convert,
                    ease: [0.22, 1, 0.36, 1],
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
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-primary via-primary/80 to-transparent origin-left rounded-full"
                />
                {/* Glow pulse */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.5, 0.25], scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 1.8, delay: timing.underline + 0.2, ease: "easeOut" }}
                    className="absolute -inset-6 bg-primary/15 blur-3xl rounded-full -z-10"
                />
                <span className="text-primary">convert.</span>
              </motion.span>
            </motion.h1>

            {/* Description - reveals after context is set */}
            <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: timing.description }}
                className="mt-8 text-lg md:text-xl text-muted-light font-light max-w-xl leading-relaxed mx-auto"
            >
              Strategic design meets technical excellence. We craft websites and
              digital products that{" "}
              <motion.span
                  initial={{ color: "inherit" }}
                  animate={{ color: "var(--primary)" }}
                  transition={{ duration: 0.5, delay: timing.description + 0.4 }}
                  className="font-normal"
              >
                drive growth
              </motion.span>{" "}
              for ambitious brands.
            </motion.p>

            {/* CTA Buttons - final reveal with stagger */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: timing.buttons }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: timing.buttons }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
              >
                <Button href="#contact">Start a Project</Button>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: timing.buttons + 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
              >
                <Button href="#work" variant="outline">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>


        </Container>
      </section>
  );
}