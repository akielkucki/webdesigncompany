"use client";

import {AnimatePresence, motion} from "motion/react";
import { Container, SectionNumber } from "../ui";
import {
  Code,
  Globe,
  Sparkles,
  Zap,
  MessageSquare,
  Handshake, Shield,
} from "lucide-react";
import {useState} from "react";

const services = [
  {
    icon: Code,
    title: "Tailored Digital Architecture",
    description:
        "We don't use off-the-shelf templates; your website is written and designed entirely by hand. We value quality over quantity, building digital legacies rather than temporary sites.",
  },
  {
    icon: Sparkles,
    title: "Editorial Art Direction",
    description:
        "We approach each commission as editorial, with gallery-grade typography, composed motion, and a level of restraint that signals craft in a glance. An aesthetic that commands attention without seeking it.",
  },
  {
    icon: Globe,
    title: "Global Discovery & SEO",
    description:
        "Reach affluent audiences across every market that matters. We engineer visibility for the intent-rich searches your peers quietly compete for.",
  },
  {
    icon: Zap,
    title: "Flagship Performance",
    description:
        "Sub-second load times on any device. Your digital experience should feel as effortless and immediate as your in-person service.",
  },
  {
    icon: MessageSquare,
    title: "Zero-Latency Responsiveness",
    description:
        "Capture every inquiry and respond in minutes with AI follow-ups indistinguishable from a human assistant. Your brand voice remains consistent, ensuring no prospect ever feels neglected.",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description:
        "Continuous evolution, direct access to senior talent, and a studio that matures the work as your brand grows. No ticket queues, no middlemen—just direct, high-level stewardship.",
  },
];

export function Services() {
  const [cardLoaded,setCardLoaded] = useState<number[]>([0]);
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
            A complete studio for modern luxury.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-muted-light font-light leading-relaxed text-base md:text-lg"
          >
            Strategy, art direction, engineering, SEO, and an ongoing
            partnership — delivered by a small team of senior specialists,
            coordinated end to end.
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
              <motion.div
                  key={service.title}
                  // 1. Set the explicit starting point to prevent initial flash
                  initial={{ opacity: 0, y: 10 }}
                  // 2. Animate to full opacity and original position
                  whileInView={{ opacity: 1, y: 0 }}
                  // 3. 'once: true' ensures it stays at opacity: 1 permanently
                  viewport={{ once: true, margin: "0px" }}
                  // 4. Added a custom ease curve for a smoother "luxury" feel
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98] // A premium, silky ease-out curve
                  }}
                  className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:border-accent/30 hover:bg-accent/[0.03] transition-colors duration-300"
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
