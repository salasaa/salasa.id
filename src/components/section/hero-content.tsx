"use client";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

export const HeroContent = () => {
  const words = ["learning", "building", "and driven"];

  return (
    <div className="relative z-30 flex min-h-screen w-full flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-3xl flex flex-col items-start">
        <motion.h1 className="text-left text-xl font-bold text-neutral-800 md:text-xl lg:text-2xl dark:text-neutral-100 tracking-tight">
          Hello, my name is{" "}
          <span className="text-green-500">Akhirudin Salasa</span>
        </motion.h1>

        <motion.div className="mt-4 text-left text-md md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I&apos;m a software developer with over two years of experience. I
          started out in Chemical Engineering, but eventually found my true
          passion in tech. Today, I focus on web development always{" "}
          <FlipWords className="text-green-500" words={words} />
          to create digital solutions that make a real impact.
        </motion.div>

        <motion.div className="mt-4 text-left text-md md:text-lg  text-neutral-600 dark:text-neutral-400">
          Let&apos;s connect and create something meaningful together!
        </motion.div>
      </div>
    </div>
  );
};
