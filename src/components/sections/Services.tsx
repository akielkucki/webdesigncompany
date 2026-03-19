"use client";

import { motion } from "motion/react";
import { Container, SectionNumber } from "../ui";
import {
  Code,
  Search,
  Smartphone,
  Zap,
  MessageSquare,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom-Coded Websites",
    description:
      "No templates. No WordPress. Hand-written code built on the same tech stack used by modern tech companies.",
  },
  {
    icon: Search,
    title: "Local SEO & Google Business",
    description:
      "Show up when people in your area search for what you do. We optimize your site and Google presence from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Over 70% of visitors come from their phone. Every site we build looks and works flawlessly on any device.",
  },
  {
    icon: Zap,
    title: "Speed & Performance",
    description:
      "Fast sites rank higher and convert more. We guarantee top PageSpeed scores with zero bloat.",
  },
  {
    icon: MessageSquare,
    title: "Lead Capture & AI Follow-Ups",
    description:
      "Capture every lead with smart forms and let our AI system follow up automatically so you never miss a prospect.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Updates & Support",
    description:
      "Need a change? Just ask. Unlimited edits, direct developer access, and no ticketing systems to deal with.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border relative overflow-hidden">
      {/* Honeycomb background decor */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20 pointer-events-none" />
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] pointer-events-none" />
      <Container>
        <div className="flex justify-center">
          <SectionNumber number="01" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal italic leading-tight text-foreground"
          >
            Everything Your Business Needs Online.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-muted-light font-light leading-relaxed text-base md:text-lg"
          >
            We handle design, development, hosting, SEO, and ongoing support — so
            you can focus on running your business.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon
                  className="w-5 h-5 text-accent"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-base font-semibold text-foreground tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-light font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
