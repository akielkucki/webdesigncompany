"use client";

import {useEffect, useRef, useState} from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {Button, Container, Marquee, SectionNumber} from "../ui";

const features = [
  {
    title: "Unapologetically Custom",
    description:
        "We don't use templates. We hand-write code to fit your specific brand, ensuring you don't look like a generic clone.",
  },
  {
    title: "Built for Speed",
    description:
        "No WordPress bloat. We use the same tech stack as modern tech giants (React & Next.js) for performance that feels instantaneous.",
  },
  {
    title: "Obsessed with Details",
    description:
        "We're a new studio, which means we're hungry. We fight for every pixel because your success is our resume.",
  },
  {
    title: "Direct Access",
    description:
        "No account managers. You speak directly to the designers and developers building your future.",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.8"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const buttonOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const buttonX = useTransform(smoothProgress, [0.85, 0.95], [20, 0]);

  const buttonPointerEvents = useTransform(smoothProgress, (val) => val > 0.85 ? "auto" : "none");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(scrollYProgress.get() > 0.5);
    }
    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [scrollYProgress]);

  return (
      <section id="about" className=" border-t border-border">
        <Marquee pauseOnHover={true} speed={"normal"} className="py-14 bg-background overflow-hidden">
          <div className="flex items-center whitespace-nowrap select-none">
            <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-foreground mr-6">WE CREATE</span>
            <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-accent mr-6">POWERFUL DESIGNS</span>
            <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-foreground mr-6">FOR</span>
            <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-accent mr-6">BOLD BRANDS</span>
          </div>
        </Marquee>

        <Container className={"py-24 md:py-32"}>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* LEFT SIDE: Static Headline */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              {/*@ts-ignore*/}
              <SectionNumber number="03" className="mb-6" />
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl xl:text-7xl font-playfair italic leading-[1.1] text-foreground"
              >
                Why choose <br />
                <span className={`not-italic font-sans font-bold tracking-tighter transition-colors duration-500 ${visible ? 'text-foreground' : 'text-muted/60'}`}>
                the new guys?
              </span>
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 text-lg font-light text-muted-light max-w-sm leading-relaxed"
              >
                We treat our youth as our greatest asset. We aren&apos;t weighed down by legacy code or outdated processes.
              </motion.p>
            </div>

            <div className="lg:col-span-1 hidden lg:block" />

            <div ref={containerRef} className="lg:col-span-6 relative pl-8 lg:pl-0">
              <div className="absolute left-0 lg:left-[-2rem] top-2 bottom-2 w-[2px] bg-border/30 rounded-full" />

              <motion.div
                  style={{ height: lineHeight }}
                  className="absolute left-0 lg:left-[-2rem] top-2 w-[2px] bg-accent rounded-full shadow-[0_0_12px_rgba(var(--accent),0.8)]"
              />

              <div className="flex flex-col gap-12">
                {features.map((feature, index) => {

                  return <FeatureItem
                        key={index}
                        feature={feature}
                        index={index}
                        total={features.length}
                        progress={smoothProgress}
                    />

            })}
                <motion.div
                    style={{
                      opacity: buttonOpacity,
                      x: buttonX,
                      pointerEvents: buttonPointerEvents
                    }}
                    className="flex flex-col flex-wrap gap-4 mt-4"
                >

                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none">
                    See Projects
                  </Button>

                  <Button variant="outline" className="border-foreground/20 bg-foreground/5 rounded-none">
                    Contact Us
                  </Button>

                </motion.div>




              </div>
            </div>
          </div>
        </Container>
      </section>
  );
}

function FeatureItem({
                       feature,
                       index,
                       total,
                       progress,
                     }: {
  feature: { title: string; description: string };
  index: number;
  total: number;
  progress: any;
}) {
  // Determine at what point in the scroll this specific item should "light up"
  const threshold = index / total;

  // Transform opacity: Becomes 1 when progress passes the threshold
  // We use a slightly wider range (0.2) so they don't fade out too instantly if you scroll up slightly
  const opacity = useTransform(progress, [threshold, threshold + 0.15], [0.2, 1]);
  const x = useTransform(progress, [threshold, threshold + 0.15], [20, 0]);

  // Highlight color for the title to make the active one pop more
  const color = useTransform(progress, [threshold, threshold + 0.15], ["var(--muted-light)", "var(--foreground)"]);

  return (
      <motion.div style={{ opacity, x }} className="flex flex-col gap-3">
        <motion.h3
            style={{ color }}
            className="text-2xl md:text-3xl font-medium tracking-tight transition-colors"
        >
          {feature.title}
        </motion.h3>
        <p className="text-base md:text-lg text-muted-light font-light leading-relaxed max-w-lg">
          {feature.description}
        </p>
      </motion.div>
  );
}
