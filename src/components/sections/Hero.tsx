"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Mouse tracking for interactive glow + parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax offsets for text layers
  const textParallaxX = useTransform(smoothX, [0, 1], [-15, 15]);
  const textParallaxY = useTransform(smoothY, [0, 1], [-10, 10]);
  const subtitleParallaxX = useTransform(smoothX, [0, 1], [-8, 8]);
  const subtitleParallaxY = useTransform(smoothY, [0, 1], [-5, 5]);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Eagerly load + play the video on iOS
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/bg.jpg"
          src="/hero.mp4"
        />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </motion.div>

      {/* Interactive mouse-following glow */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute z-[2] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)",
          }}
          animate={{
            left: cursorPos.x - 300,
            top: cursorPos.y - 300,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 15 }}
        />
      )}

      {/* Bottom gradient — stronger to give text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[3]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent z-[4]" />

      {/* Bottom-left content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute bottom-16 md:bottom-20 left-6 md:left-14 z-20 max-w-3xl"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ x: subtitleParallaxX, y: subtitleParallaxY }}
          className="mb-5"
        >
          <span className="inline-block text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-white/60 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Web Design & Development
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
            >
              WE BUILD
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300">
                DIGITAL
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
            >
              EXPERIENCES
            </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ x: subtitleParallaxX, y: subtitleParallaxY }}
          className="mt-6 md:mt-8 text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed"
        >
          Strategic design meets technical excellence. We create websites
          that captivate audiences and drive real business results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row items-start gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center h-14 px-10 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ml-2">
              →
            </span>
          </motion.a>

          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center h-14 px-10 text-white font-medium rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            View Our Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-14 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Side vertical line accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-xs text-white/40 tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
            Scroll to explore
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
