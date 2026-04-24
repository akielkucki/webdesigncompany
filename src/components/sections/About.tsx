"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Container, SectionNumber } from "../ui";

const features = [
  {
    title: "A Studio, Not an Agency",
    description:
      "A small team of senior designers and engineers — the people who pitched the work are the people who build it. Every commission carries our signature.",
  },
  {
    title: "Bespoke From First Line",
    description:
      "No templates, no off-the-shelf themes, no retrofitted WordPress. Your flagship is written on the same stack trusted by modern luxury houses.",
  },
  {
    title: "Discreet & Direct",
    description:
      "You work directly with the principals. No account managers, no ticket queues, no calls about calls — just considered craft and fast, intelligent response.",
  },
  {
    title: "Built to Scale",
    description:
      "Multi-locale, multi-brand, multi-market. Architectures engineered so your digital presence grows with your house instead of needing to be rebuilt.",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.8"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 border-t border-border relative overflow-hidden">
      {/* Ambient honey glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/*@ts-ignore*/}
            <SectionNumber number="04" className="mb-6" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-playfair italic leading-[1.1] text-foreground"
            >
              The house behind the houses.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg font-light text-muted-light max-w-sm leading-relaxed"
            >
              A small, senior studio composing digital experiences for luxury
              brands and private companies who treat their reputation as the
              product — because we do the same.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex px-8 py-3.5 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-hover transition-colors duration-300"
              >
                Request a Private Consultation
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* RIGHT SIDE */}
          <div ref={containerRef} className="lg:col-span-6 relative pl-8 lg:pl-0">
            <div className="absolute left-0 lg:left-[-2rem] top-2 bottom-2 w-[2px] bg-border/30 rounded-full" />

            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 lg:left-[-2rem] top-2 w-[2px] bg-accent rounded-full shadow-[0_0_12px_rgba(var(--accent),0.8)]"
            />

            <div className="flex flex-col gap-12">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  total={features.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
  total,
  progress,
}: {
  feature: { title: string; description: string };
  index: number;
  total: number;
  progress: any;
}) {
  const threshold = index / total;
  const opacity = useTransform(
    progress,
    [threshold, threshold + 0.15],
    [0.2, 1],
  );
  const x = useTransform(progress, [threshold, threshold + 0.15], [20, 0]);
  const color = useTransform(
    progress,
    [threshold, threshold + 0.15],
    ["var(--muted-light)", "var(--foreground)"],
  );

  return (
    <motion.div style={{ opacity, x }} className="flex flex-col gap-3">
      <motion.h3
        style={{ color }}
        className="text-2xl md:text-3xl font-medium tracking-tight transition-colors"
      >
        {feature.title}
      </motion.h3>
      <p className="text-base md:text-lg text-muted-light font-light leading-relaxed max-w-lg">
        {feature.description}
      </p>
    </motion.div>
  );
}
