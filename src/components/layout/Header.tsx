"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Hexagon } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <nav className="max-w-6xl mx-auto bg-card/70 backdrop-blur-xl rounded-full border border-white/[0.06] shadow-lg shadow-black/20 px-4 md:px-6">
          {/* Animated background shape */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-accent/[0.03] rounded-full"
          />

          <div className="relative flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 z-[60]"
              initial={{ x: -30, opacity: 0, filter: "blur(10px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
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
                    <motion.span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Right side - CTA */}
            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ x: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
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
              className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 6, backgroundColor: "#fff" }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-px bg-foreground origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                className="w-6 h-px bg-foreground"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -6, backgroundColor: "#fff" }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-px bg-foreground origin-center"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Full-page mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] md:hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-[#06060a]" />

            {/* Abstract shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large gradient orb — top right */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-[100px]"
              />

              {/* Small orb — bottom left */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute bottom-32 -left-16 w-48 h-48 rounded-full bg-blue-500/15 blur-[80px]"
              />

              {/* Diagonal line */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute top-24 right-12 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent origin-top rotate-[20deg]"
              />

              {/* Circle outline */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute bottom-44 right-8 w-20 h-20 rounded-full border border-white/[0.06]"
              />

              {/* Dot cluster */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/3 right-10 flex gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/25" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/15" />
              </motion.div>

              {/* Cross shape */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="absolute top-[55%] left-8"
              >
                <div className="w-6 h-px bg-white/[0.08]" />
                <div className="w-px h-6 bg-white/[0.08] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </motion.div>

              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* Nav content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-10 pb-10 pt-28">
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-7 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/25 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Links */}
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.08,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-5xl font-bold text-white/90 hover:text-accent transition-colors duration-300 py-3 uppercase tracking-tight"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: 0.45,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="mt-auto pt-10 border-t border-white/[0.06]"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex px-8 py-4 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-hover transition-colors duration-300 uppercase tracking-wider"
                >
                  Start a Project
                </a>
                <p className="mt-6 text-xs text-white/30 font-light">
                  hello@northonstudios.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
