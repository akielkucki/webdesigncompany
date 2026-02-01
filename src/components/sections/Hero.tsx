"use client";

import { motion } from "motion/react";
import { Container, Marquee } from "@/components/ui";
import { Sparkles, Zap } from "lucide-react";

// Timing constants for synchronized animation
const timing = {
  badge: 0.1,
  headline: 0.3,
  subtitle: 0.5,
  button: 0.7,
  partners: 0.9,
  cards: 1.1,
};

// Trusted by logos/brands
const trustedBrands = [
  "Google",
  "Microsoft",
  "Airbnb",
  "Spotify",
  "Slack",
  "Notion",
  "Figma",
  "Stripe",
];

// Project showcase images for marquee
const showcaseImages = [
  { id: 1, title: "SaaS Dashboard", gradient: "from-slate-900 to-slate-800" },
  { id: 2, title: "E-commerce Store", gradient: "from-blue-600 to-indigo-700" },
  { id: 3, title: "Mobile Banking", gradient: "from-emerald-500 to-teal-600" },
  { id: 4, title: "Analytics Platform", gradient: "from-violet-600 to-purple-700" },
  { id: 5, title: "Social App", gradient: "from-pink-500 to-rose-600" },
  { id: 6, title: "AI Assistant", gradient: "from-cyan-500 to-blue-600" },
];

function ShowcaseCard({ title, gradient }: { title: string; gradient: string }) {
  return (
    <div className={`w-[280px] md:w-[320px] lg:w-[380px] aspect-[4/3] rounded-2xl bg-gradient-to-br ${gradient} shadow-2xl shadow-black/20 border border-white/10 overflow-hidden flex-shrink-0`}>
      <div className="w-full h-full p-6 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
        <div>
          <div className="h-2 w-24 bg-white/20 rounded mb-2" />
          <div className="h-2 w-32 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-sky-100/50 via-white to-white">
      {/* Sky/cloud background */}
      <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-bottom opacity-60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/90 to-white" />

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: timing.badge }}
            className="mb-6 inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm"
          >
            <div className="w-5 h-5 rounded bg-accent flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">
              AI-Powered Design Studio
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: timing.headline }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
          >
            Design{" "}
            <span className="inline-flex items-center align-middle">
              <span className="mx-1 md:mx-2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </span>
            </span>{" "}
            Innovation
            <br />
            <span className="text-accent">for Every Business.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: timing.subtitle }}
            className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-muted-light leading-relaxed"
          >
            We craft stunning digital experiences that help businesses grow.
            From web design to full-stack development.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: timing.button }}
            className="mt-8 md:mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors duration-300 shadow-lg shadow-accent/30"
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Trusted by section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: timing.partners }}
            className="mt-12 md:mt-16 flex flex-col items-center gap-4"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Trusted by leading companies
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
              {trustedBrands.map((brand, index) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: timing.partners + 0.1 + index * 0.05 }}
                  className="text-lg md:text-xl font-semibold text-muted-light/60 hover:text-muted-light transition-colors"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Scrolling project showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: timing.cards }}
        className="relative w-full pb-8"
      >
        {/* First row - scrolls left */}
        <div className="mb-4">
          <Marquee speed="slow" pauseOnHover className="[--gap:1rem]">
            {showcaseImages.map((image) => (
              <ShowcaseCard key={image.id} title={image.title} gradient={image.gradient} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  );
}