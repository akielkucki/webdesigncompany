"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Container, SectionNumber } from "../ui";
import { projects, type Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 border-t border-border bg-background-secondary overflow-hidden"
    >
      {/* Abstract background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/3 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Floating geometric shapes */}
      <FloatingShapes />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <div className="lg:max-w-xl">
            <SectionNumber number="02" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-muted-light font-light leading-relaxed text-lg"
            >
              A curated selection of projects we&apos;re proud to have delivered.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Start a project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Bento Grid - 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              size={index === 0 ? "two-thirds" : index === 1 ? "one-third" : "full"}
            />
          ))}
        </div>

        {/* View all link */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-accent transition-colors group"
            >
              <span>Want to see more?</span>
              <span className="text-accent">Let&apos;s talk</span>
              <ArrowUpRight className="w-5 h-5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

function FloatingShapes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Abstract line */}
      <motion.div
        style={{ rotate: rotate1, y: y1 }}
        className="absolute top-32 right-[10%] w-px h-40 bg-gradient-to-b from-accent/40 to-transparent"
      />

      {/* Circle outline */}
      <motion.div
        style={{ rotate: rotate2, y: y2 }}
        className="absolute bottom-48 left-[5%] w-24 h-24 border border-accent/20 rounded-full"
      />

      {/* Small dot cluster */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/3 right-[15%] flex gap-2"
      >
        <div className="w-2 h-2 bg-accent/30 rounded-full" />
        <div className="w-2 h-2 bg-accent/20 rounded-full" />
        <div className="w-2 h-2 bg-accent/10 rounded-full" />
      </motion.div>

      {/* Cross shape */}
      <motion.div
        style={{ rotate: rotate1 }}
        className="absolute bottom-1/4 right-[8%]"
      >
        <div className="w-8 h-px bg-accent/20" />
        <div className="w-px h-8 bg-accent/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  size,
}: {
  project: Project;
  index: number;
  size: "two-thirds" | "one-third" | "full";
}) {
  const cardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const sizeClasses = {
    "two-thirds": "md:col-span-2",
    "one-third": "md:col-span-1",
    "full": "md:col-span-3",
  };

  return (
    <motion.article
      ref={cardRef}
      style={{ scale, opacity }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`group relative ${sizeClasses[size]}`}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Card container */}
        <div
          className={`relative ${
            size === "full" ? "aspect-[3/1]" : size === "two-thirds" ? "aspect-[16/10]" : "aspect-[3/4]"
          } bg-white border border-border/50 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group-hover:border-accent/30`}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />

          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05),transparent_40%)]" />
          </div>

          {/* Large number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
            className="absolute top-6 right-6 md:top-8 md:right-8"
          >
            <span className="text-6xl md:text-8xl font-extralight text-accent/10 group-hover:text-accent/20 transition-colors duration-500">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="inline-block text-xs text-accent font-medium tracking-wider uppercase mb-3"
              >
                {project.category}
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.35 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className={`mt-2 text-muted-light text-sm md:text-base line-clamp-2 ${
                  size === "full" ? "max-w-xl" : size === "two-thirds" ? "max-w-md" : "max-w-xs"
                }`}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

          {/* Arrow indicator */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-accent/50 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </div>

          {/* Year badge */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
            <span className="text-xs font-mono text-muted/60 group-hover:text-muted transition-colors">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
