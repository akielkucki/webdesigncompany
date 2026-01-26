"use client";

import { useRef, useState } from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "motion/react";
import { Container, SectionNumber } from "../ui";

const projects = [
  {
    title: "Nexus Finance",
    category: "Web Design & Development",
    description: "A fintech platform redesign that increased user engagement by 180%.",
    year: "2024",
  },
  {
    title: "Meridian Studio",
    category: "Branding & Web",
    description: "Complete brand identity and website for a creative agency.",
    year: "2024",
  },
  {
    title: "Apex Athletics",
    category: "E-commerce",
    description: "High-performance e-commerce platform driving $2M+ monthly revenue.",
    year: "2023",
  },
  {
    title: "Pulse Health",
    category: "Web Application",
    description: "Healthcare dashboard serving 50,000+ daily active users.",
    year: "2023",
  },
];

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement
  // Adjust the multiplier based on number of cards and their width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Optional: Fade/scale the header as you scroll through
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
      <section
          ref={sectionRef}
          id="work"
          className="relative h-[300vh] border-t border-border bg-neutral-950"
      >
        {/* Sticky container that stays in view */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <Container className="mb-8 md:mb-12">
            <motion.div
                style={{ opacity: headerOpacity, y: headerY }}
                className="lg:max-w-md"
            >
              <SectionNumber number="02" />
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-semibold tracking-tight mt-4"
              >
                Selected Work
              </motion.h2>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-muted-light font-light leading-relaxed"
              >
                A curated selection of projects we&apos;re proud to have delivered.
              </motion.p>
            </motion.div>
          </Container>

          {/* Horizontal scrolling container */}
          <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex gap-6 md:gap-10 pl-6 md:pl-16 lg:pl-24"
          >
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}

            {/* End card - CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] md:w-[400px] flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-muted-light mb-4">Want to see more?</p>
                <a
                  href="#contact"
                  className="text-xl md:text-2xl font-medium text-accent hover:text-white transition-colors"
                >
                  Let&apos;s talk →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll progress indicator */}
          <div className="absolute bottom-8 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24">
            <div className="h-px bg-border">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-accent origin-left"
              />
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted font-mono">
              <span>01</span>
              <span>04</span>
            </div>
          </div>
        </div>
      </section>
);
}

// Grid configuration
const COLUMNS = 12;
const TOTAL_ITEMS = 132;

// Calculate grid dimensions to find the center
const ROWS = Math.ceil(TOTAL_ITEMS / COLUMNS);
const CENTER_X = (COLUMNS - 1) / 2;
const CENTER_Y = (ROWS - 1) / 2;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // We must set stagger to 0 (or remove it) because we are
      // manually calculating specific delays for every child below.
      staggerChildren: 0,
    }
  }
};

const itemVariants = (i: number) => {
  // 1. Calculate grid position (x, y) from index
  const x = i % COLUMNS;
  const y = Math.floor(i / COLUMNS);

  // 2. Calculate distance from center (Pythagorean theorem)
  // d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const dx = x - CENTER_X;
  const dy = y - CENTER_Y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return {
    hidden: { opacity: 0, scale: 0.8 }, // Added scale for a "pop" effect
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        // 3. Delay based on distance from center
        delay: distance * 0.05,
        ease: "backOut"
      }
    }
  }
};

export default function MatrixGrid() {
  const [resetKey, setResetKey] = useState(0);

  return (
      <div
          className="flex flex-col w-full justify-center items-center"
          // Fires once when mouse enters the area.
          // Incrementing key forces React to destroy and recreate the grid.
          onMouseEnter={() => setResetKey(prev => prev + 1)}
      >
        <motion.div
            key={resetKey}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-12 justify-start w-full items-start overflow-hidden"
        >
          {Array.from({ length: 132 }).map((_, i) => (
              <motion.div
                  key={i}
                  // @ts-ignore
                  variants={itemVariants(i)}
                  className="w-full aspect-square bg-black/30 will-change-[opacity]"
              />
          ))}
        </motion.div>

        {/* Optional: Visual cue that this area is interactive */}
        <div className="text-md border-b-2 cursor-pointer hover:text-accent/80 absolute z-30 text-accent  h-8 text-center flex justify-center items-center uppercase tracking-widest">
          View More
        </div>
      </div>
  );
}
function ProjectCard({
                       project,
                       index,
                     }: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Individual card parallax - image moves slightly slower
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  return (
      <motion.article
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
          style={{ rotate: cardRotate }}
          className="group relative flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px]"
      >
        <div className="aspect-[16/10] bg-neutral-900 border border-border overflow-hidden rounded-lg">
          <motion.div
              style={{ y: imageY }}
              className="w-full h-[120%] bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center"
          >
            <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-extralight text-muted"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
          </motion.div>

          {/* Hover overlay */}
          <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}

              className="absolute inset-0 bg-accent/10 rounded-lg backdrop-blur-sm aspect-video flex justify-start items-start"
          >

            <MatrixGrid/>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
          <span className="text-xs text-accent font-medium tracking-wider uppercase">
            {project.category}
          </span>
            <h3 className="mt-2 text-2xl md:text-3xl font-medium group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-2 text-muted-light font-light max-w-md">
              {project.description}
            </p>
          </div>
          <span className="text-sm text-muted font-mono shrink-0">{project.year}</span>
        </div>
      </motion.article>
  );
}