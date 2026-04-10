import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Impor interface dari file types.ts
import { TechPillProps } from "@/types";

/**
 * Komponen TechPill - Sekarang lebih ringkas dan fokus pada UI
 */
const TechPill: React.FC<TechPillProps> = ({ svgPath, name, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      className="relative flex items-center bg-[#18181b] border border-white/10 rounded-full cursor-pointer overflow-hidden p-6 h-10 group hover:border-white/30"
    >
      <div className="flex items-center justify-center shrink-0 w-7 h-7">
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-colors duration-300"
          fill={isHovered ? color : "currentColor"}
          style={{ color: "#a1a1aa" }}
        >
          <path d={svgPath} />
        </svg>
      </div>

      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, width: 0, x: -5 }}
            animate={{ opacity: 1, width: "auto", x: 0 }}
            exit={{ opacity: 0, width: 0, x: -5 }}
            className="ml-2 pr-3 text-[13px] font-medium text-zinc-100 whitespace-nowrap"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const stacks = [
    {
      name: "Vue.js",
      color: "#4FC08D",
      svgPath:
        "M12.158 12.786l-2.698-4.705L2.142 19.333h5.003L12.158 10.6l5.013 8.733h5.003l-10.016-17.512-10.016 17.512h5.003l5.013-8.733z",
    },
    {
      name: "Nuxt.js",
      color: "#00DC82",
      svgPath:
        "M10.16 11.72L7.28 6.72L0 19.28H8.16L10.16 15.84L12.16 19.28H20L10.16 2.16V11.72Z",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      svgPath:
        "M12.001 6.336c-1.574 0-2.481.788-2.721 2.36.45-.225.899-.338 1.35-.338.9 0 1.575.45 2.025 1.35.225.45.45 1.013.675 1.687.337 1.012.787 1.8 1.35 2.363-.562.563-1.462.844-2.7.844-1.574 0-2.481-.787-2.721-2.362.45.225.9.338 1.35.338.9 0 1.575-.45 2.025-1.35.225-.45.45-1.013.676-1.687.338-1.013.788-1.8 1.35-2.363-.563-.563-1.463-.844-2.703-.844zm-2.722 5.288c-1.574 0-2.481.788-2.721 2.36.45-.225.899-.338 1.35-.338.9 0 1.575.45 2.025 1.35.225.45.45 1.013.675 1.688.337 1.012.787 1.8 1.35 2.362-.562.563-1.462.844-2.7.844-1.574 0-2.481-.787-2.721-2.362.45.225.9.338 1.35.338.9 0 1.575-.45 2.025-1.35.225-.45.45-1.013.676-1.687.338-1.013.788-1.8 1.35-2.363-.563-.563-1.463-.844-2.703-.844z",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center p-4">
      <div className="flex flex-row items-center gap-2 p-2.5 bg-[#0c0c0e] rounded-full border border-white/5 shadow-2xl">
        {stacks.map((stack, index) => (
          <TechPill
            key={index}
            svgPath={stack.svgPath}
            name={stack.name}
            color={stack.color}
          />
        ))}
      </div>
    </div>
  );
}
