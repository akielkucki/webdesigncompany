"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { getProjectBySlug, getProjectBySlug as getProject } from "@/data/projects";
import { Container } from "@/components/ui";
import { notFound } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = project.nextProject ? getProjectBySlug(project.nextProject) : null;

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              NORTHON STUDIOS<span className="text-accent">.</span>
            </Link>
            <Link
              href="/#work"
              className="text-sm font-light text-muted-light hover:text-foreground transition-colors duration-300"
            >
              Back to Work
            </Link>
          </nav>
        </Container>
      </motion.header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <Container className="py-32 md:py-40">
            <div className="max-w-5xl mx-auto text-center">
              {/* Category Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs text-accent font-medium tracking-[0.25em] uppercase">
                  {project.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
              >
                {project.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-xl md:text-2xl text-muted-light font-light max-w-2xl mx-auto leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Metadata Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 md:mt-32 pt-10 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">
                <div>
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">Client</span>
                  <p className="mt-3 text-base md:text-lg font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">Year</span>
                  <p className="mt-3 text-base md:text-lg font-medium">{project.year}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-xs text-muted uppercase tracking-[0.2em]">Services</span>
                  <p className="mt-3 text-base md:text-lg font-medium">{project.services.join("  ·  ")}</p>
                </div>
              </div>
            </motion.div>
          </Container>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent"
            />
          </motion.div>
        </section>

        {/* Project Image Placeholder */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center"
          >
            <span className="text-[150px] md:text-[250px] lg:text-[350px] font-extralight text-accent/10 select-none">
              {project.title.charAt(0)}
            </span>
          </motion.div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-24 md:py-32 border-t border-border">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs text-accent uppercase tracking-[0.2em]">
                  The Challenge
                </span>
                <p className="mt-6 text-lg md:text-xl text-muted-light font-light leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-xs text-accent uppercase tracking-[0.2em]">
                  The Solution
                </span>
                <p className="mt-6 text-lg md:text-xl text-muted-light font-light leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="py-24 md:py-32 border-t border-border">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs text-accent uppercase tracking-[0.2em]">
                The Results
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Impact & Outcomes
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-border rounded-lg text-center"
                >
                  <p className="text-lg font-medium leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-24 md:py-32 border-t border-border">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <svg
                  className="w-10 h-10 mx-auto mb-8 text-accent/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-10">
                  <p className="font-medium">{project.testimonial.author}</p>
                  <p className="mt-1 text-sm text-muted">{project.testimonial.role}</p>
                </div>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Next Project */}
        {nextProject && (
          <section className="py-24 md:py-32 border-t border-border">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <span className="text-xs text-muted uppercase tracking-[0.2em]">
                  Next Project
                </span>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="block mt-6 group"
                >
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {nextProject.title}
                  </h2>
                  <p className="mt-4 text-muted-light">{nextProject.category}</p>
                </Link>
              </motion.div>
            </Container>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              NORTHON STUDIOS<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Northon Studios. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
