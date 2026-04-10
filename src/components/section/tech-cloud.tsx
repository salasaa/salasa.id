"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_LIST = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Bun",
  "Tailwind",
  "Hono",
  "React",
  "Node.js", // Tambah list biar slidernya panjang
];

export default function TechCloud() {
  return (
    <section className="py-12 border-y border-neutral-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-10">
          Powering my projects with
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient Kiri */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-40 bg-linear-to-r from-[#f8f8f8]/5 via-[#f8f8f8]/15 to-transparent dark:from-zinc-950/5 dark:via-zinc-950/15 pointer-events-none" />

          {/* Gradient Kanan */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-40 bg-linear-to-l from-[#f8f8f8]/5 via-[#f8f8f8]/15 to-transparent dark:from-zinc-950/5 dark:via-zinc-950/15 pointer-events-none" />

          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap"
              animate={{
                x: [0, -1000], // Sesuaikan angka ini dengan panjang kontenmu
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20, // Makin besar angka makin lambat slidernya
                  ease: "linear",
                },
              }}
            >
              {/* Kita render list dua kali biar loopnya nggak putus (Seamless) */}
              {[...TECH_LIST, ...TECH_LIST].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xl md:text-2xl font-bold text-neutral-400 dark:text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
