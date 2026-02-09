"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, SectionNumber } from "../ui";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";

const projectImages: Record<string, string> = {
  "blum-skin-care": "/portfolio/blumskincare.png",
  "royal-vending-cart": "/portfolio/royalvendingcart.png",
};

const filters = ["All", "E-commerce", "Web Design", "Branding"];

function matchesFilter(category: string, filter: string): boolean {
  if (filter === "All") return true;
  return category.toLowerCase().includes(filter.toLowerCase());
}

function getIndustry(project: Project): string {
  const slug = project.slug;
  if (slug.includes("blum")) return "Beauty & Skincare";
  if (slug.includes("royal")) return "Food & Hospitality";
  if (slug.includes("red-bridge")) return "Construction";
  return "Digital";
}

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) =>
    matchesFilter(p.category, activeFilter),
  );

  return (
    <section id="work" className="py-32 border-t border-border">
      <Container>
        {/* Top area: section number + title + glowing CTA orb */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <SectionNumber number="02" />
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-2 uppercase leading-[1.05]"
            >
              Selected
              <br />
              Work
            </motion.h2>
          </div>

          {/* Glowing CTA orb */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center cursor-pointer group"
          >
            {/* Glow layers */}
            <div className="absolute inset-0 rounded-full bg-accent/60 blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-blue-500 to-blue-400 opacity-80" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/40 via-accent/60 to-blue-600/40 backdrop-blur-sm" />
            <span className="relative z-10 text-white font-bold text-sm md:text-base uppercase tracking-wider text-center leading-tight">
              Book
              <br />
              a Call
            </span>
          </motion.a>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === f
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Table */}
        <div className="mt-12">
          {/* Column headers */}
          <div className="hidden md:grid grid-cols-[100px_1fr_1fr_1fr_48px] gap-4 px-0 pb-4 text-xs font-light tracking-wider text-white/40">
            <div>Year</div>
            <div>Name</div>
            <div>Category</div>
            <div>Industry</div>
            <div />
          </div>

          <div className="border-t border-white/10" />

          {/* Rows */}
          <ul>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </ul>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-muted-light"
            >
              No projects match this filter.
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageSrc = projectImages[project.slug];

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="relative group border-b border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr_1fr_48px] gap-2 md:gap-4 py-7 items-center">
        {/* Year */}
        <span className="text-sm md:text-base font-medium text-white/90">
          {project.year}
        </span>

        {/* Name + optional badge */}
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg font-medium text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </span>
        </div>

        {/* Category */}
        <span className="text-sm text-white/50 font-light">
          {project.category.includes("E-commerce")
            ? "E-commerce"
            : "Web Design"}
        </span>

        {/* Industry */}
        <span className="text-sm text-white/50 font-light">
          {getIndustry(project)}
        </span>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-end">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover image — centered over the row */}
      {imageSrc && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end z-10 overflow-visible">
          <Image
            src={imageSrc}
            alt={project.title}
            width={480}
            height={320}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-2xl shadow-black/50 object-cover"
            style={{
              rotate: index % 2 === 0 ? "-3deg" : "3deg",
              maxWidth: "30vw",
              height: "auto",
            }}
          />
        </div>
      )}
    </motion.li>
  );
}
