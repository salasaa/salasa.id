"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";

interface Photo {
  id: number;
  src: string;
  caption: string;
  rotate: number;
}

const photos = [
  {
    id: 1,
    src: "/images/twins-1.jpg",
    caption: "First set of twins",
    rotate: -5,
  },
  { id: 2, src: "/images/me-boss.jpg", caption: "Me and the Boss", rotate: 2 },
  {
    id: 3,
    src: "/images/twins-2.jpg",
    caption: "Second set of twins",
    rotate: -3,
  },
  { id: 4, src: "/images/laracon.jpg", caption: "Laracon EU", rotate: 4 },
  {
    id: 5,
    src: "/images/research.jpg",
    caption: "Course research",
    rotate: -2,
  },
  { id: 6, src: "/images/github.jpg", caption: "GitHub Universe", rotate: 5 },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const InteractivePolaroid = ({ photo }: { photo: Photo }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 25, stiffness: 350 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      variants={itemVariants} // <-- Penting: Hubungkan ke variants parent
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
      style={{
        rotate: photo.rotate,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white p-4 pb-4 shadow-xl border border-zinc-200 w-full max-w-70 sm:w-64 rounded-sm cursor-pointer relative"
    >
      <div
        className="relative aspect-square overflow-hidden bg-zinc-100 mb-2 rounded-sm shadow-inner"
        style={{ transform: "translateZ(20px)" }}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <p
        className="mt-2 text-center text-zinc-700 text-xl font-medium"
        style={{ transform: "translateZ(10px)" }}
      >
        {photo.caption}
      </p>
    </motion.div>
  );
};

export default function PolaroidSection() {
  return (
    <section className="py-24 bg-[#f8f8f8] dark:bg-zinc-950 overflow-hidden perspective-[1000px]">
      <div className="max-w-4xl mx-auto px-4">
        {/* --- 2. Parent Container yang ngatur STAGGER (jeda muncul satu-satu) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15, // Jeda 0.15s antar foto
              },
            },
          }}
          className="flex flex-wrap justify-center gap-2 md:gap-4"
        >
          {photos.map((photo) => (
            <InteractivePolaroid key={photo.id} photo={photo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
