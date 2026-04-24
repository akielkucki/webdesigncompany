"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { Button, Container, SectionNumber } from "../ui";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      console.log("Possible network error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-32 border-t border-border bg-gradient-to-b from-background to-background-secondary relative overflow-hidden"
    >
      {/* Honeycomb decor */}
      <div className="absolute inset-0 honeycomb-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <SectionNumber number="05" />
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight mt-4"
            >
              Begin a quiet conversation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-4 text-muted-light font-light leading-relaxed"
            >
              Share the shape of the brand you&apos;re building. A principal
              will respond personally, typically within one business day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-12 space-y-6"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-light">
                  Email
                </span>
                <a
                  href="mailto:team@northonstudios.com"
                  className="mt-2 block text-lg text-foreground hover:text-accent transition-colors"
                >
                  team@northonstudios.com
                </a>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-light">
                  Phone
                </span>
                <a
                  href="tel:+12673800874"
                  className="mt-2 block text-lg text-foreground hover:text-accent transition-colors"
                >
                  +1 (267) 380-0874
                </a>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-light">
                  Location
                </span>
                <p className="mt-2 text-lg text-foreground">Philadelphia, PA</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-widest text-muted-light mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-widest text-muted-light mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-light mb-3"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-light mb-3"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-accent focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="" className="bg-card text-foreground">
                    Select a range
                  </option>
                  <option value="25k-50k" className="bg-card text-foreground">
                    $25,000 – $50,000
                  </option>
                  <option value="50k-100k" className="bg-card text-foreground">
                    $50,000 – $100,000
                  </option>
                  <option value="100k-250k" className="bg-card text-foreground">
                    $100,000 – $250,000
                  </option>
                  <option value="250k+" className="bg-card text-foreground">
                    $250,000+
                  </option>
                  <option value="retainer" className="bg-card text-foreground">
                    Ongoing retainer
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-light mb-3"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="A few lines on the brand, the moment, and what you&rsquo;re hoping to build..."
                />
              </div>

              <div className="pt-4">
                <Button className={"w-full"} disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
                {submitStatus === "success" && (
                  <p className="mt-4 text-green-600 text-sm text-center">
                    Thank you we will be in touch shortly.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-4 text-red-600 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </Container>
    </section>
  );
}
