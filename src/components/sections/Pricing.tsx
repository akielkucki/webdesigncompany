"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Container, SectionNumber } from "../ui";

const tiers = [
  {
    name: "Signature",
    price: 1497,
    description:
      "An editorial digital presence for emerging luxury brands ready to look the part.",
    badge: null,
    features: [
      "Bespoke art direction & hand-written code",
      "Up to 5 composed pages",
      "Managed hosting & custom domain",
      "Editorial responsive design",
      "Sub-second performance",
      "Unlimited refinements",
      "Direct line to senior talent",
      "Full redesign every three years",
    ],
    note: "12-month partnership",
  },
  {
    name: "Bespoke",
    price: 2997,
    description:
      "Our most-requested engagement — a digital flagship calibrated for growth.",
    badge: "Most Requested",
    features: [
      "Everything in Signature, plus:",
      "Up to 12 editorial pages",
      "Collection, service & campaign pages",
      "AI-powered concierge follow-up",
      "One premium integration (editorial, reservations, CRM, etc.)",
      "Global & private-client SEO",
    ],
    note: "12-month partnership",
  },
  {
    name: "Atelier",
    price: 5997,
    description:
      "An unlimited creative partnership for heritage houses and scaling maisons.",
    badge: "By Invitation",
    features: [
      "Everything in Bespoke, plus:",
      "Unlimited composed pages",
      "Regional, collection & campaign sites",
      "Advanced CRM & private-client dashboard",
      "Multi-locale & multi-brand architecture",
      "Two premium integrations",
      "Global SEO & reputation programs",
      "Priority studio access",
    ],
    note: "12-month partnership",
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
            Considered engagements. Transparent investment.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-muted-light font-light leading-relaxed text-base md:text-lg"
          >
            Design, development, hosting, and ongoing partnership in a single
            monthly retainer. No surprise invoices, no agency layers — and the
            work compounds year over year.
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
                tier.badge === "Most Requested"
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
                    tier.badge === "Most Requested"
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "bg-foreground/10 text-foreground hover:bg-foreground/20 border border-border"
                  }`}
                >
                  Begin a Commission
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
          Working at a different scale? {" "}
          <a
            href="#contact"
            className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
          >
            Request a private consultation
          </a>{" "}
          and we&apos;ll compose an engagement around your brand.
        </motion.p>
      </Container>
    </section>
  );
}
