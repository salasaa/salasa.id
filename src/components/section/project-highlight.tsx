"use client";

import { motion } from "framer-motion";

export default function ProjectHighlight() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Konten Teks ala Jam.dev - Fokus pada satu pesan kuat */}
        <div className="text-left mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-green-500 font-mono text-sm font-bold uppercase tracking-widest"
          >
            Featured Project
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold dark:text-white mt-4 tracking-tighter max-w-2xl"
          >
            Arcbook: E-commerce for Manga Lovers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Membangun pengalaman belanja manga yang mulus dengan integrasi stok
            real-time dan desain minimalis.
          </motion.p>
        </div>

        {/* Visual Showcase Besar dengan Efek Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Efek Cahaya di Belakang (Glow) */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />

          <div className="relative rounded-2xl border border-neutral-200 dark:border-white/10 overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            {/* Placeholder untuk Screenshot Aplikasi kamu */}
            <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
              <span className="text-neutral-400 font-medium italic">
                [ Screenshot Arcbook Preview ]
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
