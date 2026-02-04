"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Container, SectionNumber } from "../ui";
import { projects, type Project } from "@/data/projects";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  // Calculate the actual scroll distance needed
  useEffect(() => {
    const calculateScrollDistance = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // How far we need to scroll to show the last item
        const distance = containerWidth - viewportWidth + 40; // 40px buffer
        setScrollDistance(Math.max(0, distance));
      }
    };

    calculateScrollDistance();
    window.addEventListener("resize", calculateScrollDistance);
    return () => window.removeEventListener("resize", calculateScrollDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement using calculated distance
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  // Optional: Fade/scale the header as you scroll through
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative h-[600vh] border-t border-border bg-background-secondary"
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
          className="flex gap-6 md:gap-8 lg:gap-10 px-6 md:px-12 lg:px-20 "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}

          {/* End card - CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[400px] lg:w-[500px] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-muted-light mb-4">Want to see more?</p>
              <a
                href="#contact"
                className="text-xl md:text-2xl font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Let&apos;s talk →
              </a>
            </div>
          </motion.div>

          {/* End spacer to ensure last card is fully visible */}
          <div className="flex-shrink-0 w-[20vw] md:w-[100px]" />
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="relative -bottom-10 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 w-[90vw]">
          <div className="h-px bg-border">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-accent origin-left "
            />
          </div>
          <div className="flex justify-between mt-3 text-xs text-muted font-mono">
            <span>01</span>
            <span>0{projects.length}</span>
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
          onTouchStart={() => setResetKey(prev => prev + 1)}
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
                  className="w-full aspect-square bg-accent/20 will-change-[opacity]"
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
  project: Project;
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
          className="group relative flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-[550px] lg:w-[600px]"
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="aspect-[16/10] bg-white border border-border overflow-hidden rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300">
            <motion.div
                style={{ y: imageY }}
                className="w-full h-[120%] bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center"
            >
              <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-7xl md:text-9xl font-extralight text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </motion.div>

            {/* Hover overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent/10 rounded-2xl backdrop-blur-sm aspect-video flex justify-start items-start"
            >
              <MatrixGrid/>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-accent font-medium tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-light max-w-md">
                {project.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-accent font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Project
              </span>
              <span className="text-sm text-muted font-mono shrink-0">{project.year}</span>
            </div>
          </div>
        </Link>
      </motion.article>
  );
}