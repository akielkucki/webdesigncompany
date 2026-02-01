"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Hexagon } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
    >
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full border border-border/50 shadow-lg shadow-black/5 px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Hexagon className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-lg font-semibold text-foreground">Studio</span>
          </a>

          {/* Desktop Nav - Centered */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-light hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side - Login & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm font-medium text-muted-light hover:text-foreground transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#contact"
              className="inline-flex px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-hover transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-foreground"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col gap-4 py-6 border-t border-border/50">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-light hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-4 border-t border-border/50">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-light"
              >
                Login
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-full"
              >
                Get Started
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}
