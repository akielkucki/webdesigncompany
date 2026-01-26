"use client";

import { motion } from "motion/react";
import { Container, SectionNumber } from "../ui";

const services = [
  {
    title: "Web Design",
    description:
      "Strategic, conversion-focused designs that capture your brand essence and engage your audience.",
  },
  {
    title: "Development",
    description:
      "Clean, performant code using modern technologies. Fast, secure, and built to scale.",
  },
  {
    title: "Branding",
    description:
      "Complete brand identity systems from logo design to comprehensive style guidelines.",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies that increase visibility, drive traffic, and generate qualified leads.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <SectionNumber number="01" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight mt-4"
            >
              Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-muted-light font-light leading-relaxed"
            >
              End-to-end digital solutions tailored to your business goals.
            </motion.p>
          </div>

          <div className="lg:w-2/3">
            <div className="grid gap-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-10 border-b border-border first:border-t"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-muted font-mono">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-muted-light font-light max-w-md pl-10">
                        {service.description}
                      </p>
                    </div>
                    <motion.div
                      className="text-muted group-hover:text-accent transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
