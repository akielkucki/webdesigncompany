"use client";

import { motion } from "motion/react";
import { Container } from "../ui";
import { Clock, Smartphone, EyeOff, ChevronDown } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Slow, Outdated Site",
    description:
      "Your site was built years ago. It loads slow, looks dated, and doesn't reflect the quality of your work.",
  },
  {
    icon: Smartphone,
    title: "Not Mobile-Friendly",
    description:
      "Over 70% of homeowners search on their phone. If your site isn't built for mobile, you're losing jobs daily.",
  },
  {
    icon: EyeOff,
    title: "Invisible on Google",
    description:
      "No SEO. No Google Business optimization. Potential clients in your area can't find you when they search.",
  },
];

function Arrow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hidden md:flex items-center justify-center text-accent"
    >
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        className="text-accent"
      >
        <path
          d="M2 12h38m0 0l-8-8m8 8l-8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-playfair font-normal italic leading-tight text-foreground"
          >
            You Get Referrals But Your Website Is Turning Them Away.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-muted-light font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto"
          >
            Your craftsmanship is top-notch. Clients love your work. But when
            someone Googles you or gets sent your link, they see a site that
            doesn&apos;t match your reputation. They click away and call the next guy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl font-semibold text-foreground"
          >
            Yet something still isn&apos;t working.
          </motion.p>
        </div>

        {/* Pain point cards with arrows */}
        <div className="mt-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-0">
          {painPoints.map((point, index) => (
            <div key={point.title} className="flex items-center md:items-start gap-0">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex flex-col items-center text-center max-w-[240px]"
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full border-2 border-white/15 flex items-center justify-center mb-5 bg-card">
                  <point.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted-light font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>

              {/* Arrow between cards */}
              {index < painPoints.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center text-base md:text-lg font-medium text-foreground max-w-2xl mx-auto"
        >
          The problem isn&apos;t your skills. The problem is your website doesn&apos;t
          sell them.
        </motion.p>

        {/* Down arrows */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <ChevronDown className="w-8 h-8 text-accent/60" strokeWidth={2} />
          <ChevronDown className="w-8 h-8 text-accent -mt-4" strokeWidth={2} />
        </motion.div>
      </Container>
    </section>
  );
}
