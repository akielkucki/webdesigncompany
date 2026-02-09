"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Hexagon } from "lucide-react";

const VIDEO_URL = "/hero.mp4";
const CACHE_NAME = "northon-video-v1";

async function cacheVideo() {
  try {
    if (!("caches" in window)) return;
    const cache = await caches.open(CACHE_NAME);
    const existing = await cache.match(VIDEO_URL);
    if (!existing) {
      await cache.add(VIDEO_URL);
    }
  } catch {
    // Cache API unavailable or quota exceeded — ignore
  }
}

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Cache the video for future visits
    cacheVideo();

    // Wait for fonts + a short minimum so the loader is visible
    const minDelay = new Promise((r) => setTimeout(r, 800));
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minDelay, fontsReady]).then(() => {
      setVisible(false);
    });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06060a]"
        >
          {/* Subtle background glow */}
          <div className="absolute w-64 h-64 rounded-full bg-accent/15 blur-[100px]" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Hexagon className="w-6 h-6 text-white fill-white" />
            </div>

            {/* Loading bar */}
            <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-full h-full bg-accent/60"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
