"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950/50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Sisi Kiri: CTA & Status */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Available for new projects
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Let's build something <br />
              <span className="text-zinc-400">extraordinary together.</span>
            </h2>

            <motion.a
              href="mailto:halo@salasa.id"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-lg font-medium text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1"
            >
              Get in touch
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.5488 3.1346 11.5488 2.93934 11.3536C2.74408 11.1583 2.74408 10.8417 2.93934 10.6464L3.64645 11.3536ZM11.5 4.5C11.5 4.22386 11.2761 4 11 4L6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5H10.5V9C10.5 9.27614 10.7239 9.5 11 9.5C11.2761 9.5 11.5 9.27614 11.5 9L11.5 4.5ZM2.93934 10.6464L10.6464 2.93934L11.3536 3.64645L3.64645 11.3536L2.93934 10.6464Z"
                  fill="currentColor"
                />
              </svg>
            </motion.a>
          </div>

          {/* Sisi Kanan: Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Socials
              </h4>
              <ul className="space-y-2">
                {["GitHub", "Twitter", "LinkedIn", "Instagram"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Navigation
              </h4>
              <ul className="space-y-2">
                {["Home", "Projects", "Articles", "About"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} Akhirudin Salasa. Built with{" "}
            <span className="text-zinc-900 dark:text-white font-medium">
              Next.js & Bun
            </span>
            .
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
