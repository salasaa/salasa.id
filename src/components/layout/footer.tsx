"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    Image: "/telegram.svg",
    href: "https://t.me/salasaakhr",
    display: "https://t.me/salasaakhr",
  },
  {
    Image: "/github.svg",
    href: "https://github.com/salasaa",
    display: "https://github.com/salasaa",
  },
  {
    Image: "/gmail.svg",
    href: "mailto:akhirudinsalasa.gc@gmail.com",
    display: "akhirudinsalasa.gc@gmail.com",
  },
  {
    Image: "/linkedin.svg",
    href: "https://www.linkedin.com/in/akhirudin-salasa",
    display: "https://www.linkedin.com/in/akhirudin-salasa",
  },
];

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
              Lets build something <br />
              <span className="text-zinc-400">extraordinary together.</span>
            </h2>

            <motion.a
              href="mailto:akhirudinsalasa.gc@gmail.com"
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

          {/* Link Contact */}

          <div className="mt-4 grid gap-y-4">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Image
                  src={link.Image}
                  width={20}
                  height={20}
                  alt={""}
                  className="dark:invert"
                />

                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-muted-foreground inline-flex max-w-max items-start underline"
                >
                  {link.display}
                  <svg
                    viewBox="0 0 24 24"
                    className="fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 size-3.5 -rotate-45"
                  >
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      className="translate-x-2.5 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                    />
                    <polyline
                      points="12 5 19 12 12 19"
                      className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                    />
                  </svg>
                </a>
              </div>
            ))}
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
