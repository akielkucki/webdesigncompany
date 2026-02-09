"use client";

import { motion } from "motion/react";
import { Container, SectionNumber } from "../ui";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Awards Won" },
];

export function About() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <SectionNumber number="03" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight mt-4"
            >
              About Us
            </motion.h2>
          </div>

          <div className="lg:w-2/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90"
            >
              We&apos;re a team of designers, developers, and strategists who believe
              in the power of thoughtful design and clean code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg text-muted-light font-light leading-relaxed"
            >
              Since 2012, we&apos;ve partnered with startups, agencies, and enterprise
              companies to create digital experiences that matter. Our approach
              combines strategic thinking with meticulous execution, ensuring
              every project delivers measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <span className="text-4xl md:text-5xl font-semibold text-accent">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-muted-light font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-16 border-t border-border"
            >
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-light mb-8">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Tailwind CSS",
                  "Figma",
                  "AWS",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-accent/[0.08] border border-accent/15 text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
