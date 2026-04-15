"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as SI from "simple-icons";

const gridTools = [
  { name: "Notion", slug: "Notion" },
  { name: "Figma", slug: "Figma" },
  { name: "GitHub", slug: "Github" },
  { name: "Jira", slug: "Jirasoftware" },
  { name: "Linear", slug: "Linear" },
  { name: "ClickUp", slug: "Clickup" },
  { name: "AirTable", slug: "Airtable" },
  { name: "Better Stack", slug: "Betterstack" },
  { name: "Docker", slug: "Docker" },
  { name: "Postman", slug: "Postman" },
  { name: "Neon", slug: "neon" },
  { name: "Vercel", slug: "Vercel" },
  { name: "Netlify", slug: "Netlify" },
  { name: "Railway", slug: "Railway" },
  { name: "Render", slug: "Render" },
  { name: "Supabase", slug: "Supabase" },
];

const getIconData = (slug: string): { path: string; color: string } => {
  // 1. Format nama icon agar sesuai dengan export SimpleIcons (contoh: siGithub)
  const iconName =
    `si${slug.charAt(0).toUpperCase() + slug.slice(1)}` as keyof typeof SI;

  // 2. Ambil data icon-nya
  const icon = SI[iconName];

  // 3. Jika tidak ketemu, return default agar tidak crash
  if (!icon || !("path" in icon)) {
    return { path: "", color: "#ffffff" };
  }

  return {
    path: icon.path,
    color: `#${icon.hex}`,
  };
};

export default function ToolStack() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const smoothYLeft = useSpring(yLeft, { stiffness: 100, damping: 30 });
  const smoothYCenter = useSpring(yCenter, { stiffness: 100, damping: 30 });
  const smoothYRight = useSpring(yRight, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={targetRef}
      className="py-40 bg-[#f8f8f8] dark:bg-zinc-950 flex flex-col items-center overflow-hidden"
    >
      {/* --- TABLET PARALLAX --- */}
      <div className="relative h-90 w-full max-w-6xl flex justify-center items-end px-4">
        {/* Left Tablet */}
        <motion.div
          style={{ y: smoothYLeft, rotate: -8 }}
          className="absolute left-[10%] md:left-[18%] bottom-0 w-64 md:w-80 aspect-square bg-[#1E1E1E] border border-white/10 rounded-xl shadow-2xl z-10 hidden sm:block overflow-hidden"
        >
          <div className="p-2.5 flex gap-1 border-b border-white/5 bg-white/5">
            <div className="w-1 h-1 rounded-full bg-red-500/50" />
            <div className="w-1 h-1 rounded-full bg-yellow-500/50" />
          </div>
          <div className="p-8 flex flex-col h-full items-start justify-start gap-4">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12"
              style={{ fill: getIconData("Figma").color }}
            >
              <path d={getIconData("Figma").path} />
            </svg>
            <div className="space-y-2 w-full opacity-20">
              <div className="h-1.5 w-1/2 bg-white rounded" />
              <div className="h-1.5 w-3/4 bg-white rounded" />
              <div className="h-1.5 w-1/3 bg-white rounded" />
            </div>
          </div>
        </motion.div>

        {/* Center Tablet */}
        <motion.div
          style={{ y: smoothYCenter }}
          className="absolute bottom-0 w-72 md:w-96 aspect-square bg-[#0d1117] border border-white/10 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-30 overflow-hidden"
        >
          <div className="p-2.5 flex gap-1 border-b border-white/5 bg-white/5">
            <div className="w-1 h-1 rounded-full bg-red-500/50" />
            <div className="w-1 h-1 rounded-full bg-yellow-500/50" />
          </div>
          <div className="p-6 opacity-30">
            <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
              <path d={getIconData("Github").path} />
            </svg>
          </div>
        </motion.div>

        {/* Right Tablet */}
        <motion.div
          style={{ y: smoothYRight, rotate: 6 }}
          className="absolute right-[10%] md:right-[18%] bottom-0 w-70 md:w-86 aspect-square bg-white border border-zinc-200 rounded-xl shadow-2xl z-10 hidden sm:block overflow-hidden"
        >
          <div className="p-5 flex flex-col h-full items-start gap-4">
            <svg viewBox="0 0 24 24" fill="black" className="w-10 h-10">
              <path d={getIconData("Notion").path} />
            </svg>
            <div className="w-full space-y-3 mt-2">
              <div className="h-4 w-3/4 bg-zinc-100 rounded" />
              <div className="space-y-2">
                <div className="h-2 w-full bg-zinc-50 rounded" />
                <div className="h-2 w-full bg-zinc-50 rounded" />
                <div className="h-2 w-2/3 bg-zinc-50 rounded" />
              </div>
              <div className="mt-6 p-3 border border-zinc-100 rounded-lg bg-zinc-50/50">
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-12 h-2 bg-zinc-200 rounded mt-0.5" />
                </div>
                <div className="h-10 w-full bg-white border border-zinc-100 rounded shadow-sm" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Box Title --- */}
      <div className="relative z-40 w-full max-w-3xl px-4 -mt-16">
        <div className="bg-[#121214]/30 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="flex flex-col items-center gap-2 text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight text-center">
            <span>Integrated with the modern stack</span>

            <span className="text-xl md:text-3xl text-zinc-400 font-medium italic">
              I&apos;m ready to sync with your team&apos;s workflow
            </span>
          </h2>
        </div>
      </div>

      {/* --- GRID ICON DENGAN DARK & LIGHT MODE --- */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl px-4 relative z-40">
        {gridTools.map((tool) => {
          const iconData = getIconData(tool.slug);
          return (
            <motion.div
              key={tool.name}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              // Base Styling: Putih bersih di Light, Zinc Gelap di Dark
              className="flex items-center gap-2 p-3 rounded-lg 
                   bg-white border border-zinc-200/60 shadow-sm
                   dark:bg-zinc-900/50 dark:border-white/5 dark:shadow-none
                   transition-all group cursor-default"
            >
              {/* Ikon Wrapper */}
              <div className="shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-zinc-400 dark:text-zinc-500 transition-colors duration-300 group-hover:fill-(--hover-color)"
                  style={
                    {
                      "--hover-color": iconData.color,
                    } as React.CSSProperties
                  }
                >
                  <path d={iconData.path} />
                </svg>
              </div>

              {/* Text Label */}
              <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 font-semibold text-[13px] md:text-sm transition-colors">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
