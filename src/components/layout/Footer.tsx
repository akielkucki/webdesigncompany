"use client";

import { motion } from "motion/react";
import { Container } from "../ui";

const socialLinks = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Dribbble" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >
          <div>
            <a href="#" className="text-2xl font-semibold tracking-tight">
              STUDIO<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-sm text-muted-light max-w-xs font-light">
              Crafting digital experiences that elevate brands and drive results.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted-light mb-4">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2">
                {["Services", "Work", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted-light mb-4">
                Social
              </h4>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted font-light">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted font-light">
            Designed & Built with precision.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
