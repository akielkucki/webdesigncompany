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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
    >
      <nav
        className={`max-w-6xl mx-auto bg-card/70 backdrop-blur-xl ${isOpen ? "rounded-br-full pb-10" : "rounded-full"} border border-white/[0.06] shadow-lg shadow-black/20 px-4 md:px-6 overflow-hidden`}
      >
        {/* Animated background shape */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-accent/[0.03] rounded-full"
        />

        <div className="relative flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            initial={{ x: -30, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Hexagon className="w-4 h-4 text-white fill-white" />
            </motion.div>
            <motion.span
              className="text-lg font-semibold text-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Northon Studios
            </motion.span>
          </motion.a>

          {/* Desktop Nav - Centered */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-light hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right side - CTA */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ x: 30, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.a
              href="#contact"
              className="inline-flex px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-hover transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-6 h-px bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-foreground origin-center"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col gap-4 py-6 border-t border-white/[0.06]">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-light hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              className="flex items-center gap-4 pt-4 border-t border-white/[0.06]"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: isOpen ? 0.4 : 0 }}
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex px-5 py-2.5 text-sm font-medium bg-accent text-white rounded-full"
              >
                Get Started
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}
