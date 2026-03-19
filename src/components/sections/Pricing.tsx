"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Container, SectionNumber } from "../ui";

const tiers = [
  {
    name: "Business Essential",
    price: 97,
    description: "Everything you need to get online and start converting.",
    badge: null,
    features: [
      "Custom design & hand-written code",
      "Up to 5 pages",
      "Hosting & domain included",
      "Mobile-first responsive design",
      "PageSpeed optimized",
      "Unlimited edits & updates",
      "Direct developer support",
      "Full redesign every 3 years",
    ],
    note: "6-month minimum",
  },
  {
    name: "Business+ Growth",
    price: 197,
    description:
      "For businesses ready to capture leads and grow on autopilot.",
    badge: "Most Popular",
    features: [
      "Everything in Essential, plus:",
      "Up to 10 pages",
      "Service & landing pages",
      "AI-powered automated follow-ups",
      "1 free integration (blog, scheduling, chatbot, or estimators)",
      "Enhanced local SEO",
    ],
    note: "6-month minimum",
  },
  {
    name: "Ultimate Premium",
    price: 397,
    description:
      "Full-scale digital presence with advanced lead gen and SEO dominance.",
    badge: "Best Value",
    features: [
      "Everything in Growth, plus:",
      "15+ pages (+$15/page over 15)",
      "Service, location & landing pages",
      "Advanced lead capture & CRM dashboard",
      "AI follow-ups with smart segmentation",
      "2 free integrations",
      "Advanced SEO & Google Business optimization",
      "Priority support",
    ],
    note: "6-month minimum",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 border-t border-border relative overflow-hidden">
      {/* Honeycomb decor */}
      <div className="absolute inset-0 honeycomb-pattern opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[150px] pointer-events-none" />
      <Container>
        <div className="flex justify-center">
          <SectionNumber number="02" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-playfair font-normal italic leading-tight text-foreground"
          >
            Transparent Pricing. No Surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-muted-light font-light leading-relaxed text-base md:text-lg"
          >
            One monthly payment. No contracts trapping you in. No hidden fees.
            Cancel anytime after your minimum term.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.badge === "Most Popular"
                  ? "border-accent bg-accent/[0.04] shadow-lg shadow-accent/10"
                  : "border-border bg-card/50"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-light font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  ${tier.price}
                </span>
                <span className="text-muted-light font-light">/month</span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80 font-light leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center py-3.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    tier.badge === "Most Popular"
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "bg-foreground/10 text-foreground hover:bg-foreground/20 border border-border"
                  }`}
                >
                  Get Started
                </motion.a>
                {tier.note && (
                  <p className="mt-3 text-center text-xs text-muted font-light">
                    {tier.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center text-sm text-muted-light font-light"
        >
          Not sure which plan is right? {" "}
          <a
            href="#contact"
            className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
          >
            Schedule a free call
          </a>{" "}
          and we&apos;ll help you decide.
        </motion.p>
      </Container>
    </section>
  );
}
