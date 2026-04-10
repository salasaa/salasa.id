"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TechPill = ({
  svgPath,
  name,
  color,
}: {
  svgPath: string;
  name: string;
  color: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      transition={{
        layout: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="relative flex items-center bg-zinc-100 dark:bg-[#18181b] border border-neutral-200 dark:border-white/10 rounded-full cursor-pointer overflow-hidden p-1 h-8 group"
    >
      <div className="flex items-center justify-center [flex-shrink-0] w-5 h-5 ml-0.5">
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-4 h-4 transition-colors duration-300"
          fill={isHovered ? color : "currentColor"}
          style={{ color: "#71717a" }}
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
            className="ml-1.5 pr-2 text-[11px] font-semibold text-zinc-700 dark:text-zinc-100 whitespace-nowrap"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/20 bg-white border border-transparent justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const CustomIcon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-neutral-500"
  >
    <path d={path} />
  </svg>
);

const ICONS_APP = {
  clipboard:
    "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
  file: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
  arrow: "M7 7l10 10M17 7v10H7",
  box: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
};

const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100",
      className,
    )}
  />
);

const TECH_ICONS = {
  nextjs:
    "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
  react:
    "M22.218 17.656c-1.396-4.609-4.71-8.156-8.86-9.522 4.14-1.353 7.421-4.85 8.815-9.406-4.595 1.396-8.125 4.71-9.48 8.86-1.344-4.14-4.823-7.411-9.358-8.791 1.378 4.569 4.67 8.046 8.784 9.41-4.093 1.355-7.348 4.793-8.742 9.293 4.542-1.38 8.016-4.646 9.38-8.724 1.366 4.098 4.846 7.37 9.46 8.88z",
  tailwind:
    "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
  figma:
    "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
};

const items = [
  {
    title: "Web Apps Development",
    description: "Membangun ekosistem web yang skalabel dan aman.",
    header: <Skeleton className="from-blue-500 to-cyan-500" />,
    icon: <CustomIcon path={ICONS_APP.clipboard} />,
    stacks: [
      { name: "Next.js", color: "#ffffff", svgPath: TECH_ICONS.nextjs },
      { name: "Tailwind", color: "#38bdf8", svgPath: TECH_ICONS.tailwind },
    ],
  },
  {
    title: "Branding & Identity",
    description: "Menciptakan identitas visual yang ikonik.",
    header: <Skeleton className="from-purple-500 to-pink-500" />,
    icon: <CustomIcon path={ICONS_APP.file} />,
    stacks: [{ name: "Figma", color: "#F24E1E", svgPath: TECH_ICONS.figma }],
  },
  {
    title: "Mobile Optimization",
    description: "Pengalaman pengguna yang mulus.",
    header: <Skeleton className="from-orange-500 to-yellow-500" />,
    icon: <CustomIcon path={ICONS_APP.arrow} />,
    stacks: [
      { name: "React Native", color: "#61dafb", svgPath: TECH_ICONS.react },
    ],
  },
  {
    title: "Digital Marketing AI",
    description: "Otomasi pemasaran cerdas.",
    header: <Skeleton className="from-green-500 to-emerald-500" />,
    icon: <CustomIcon path={ICONS_APP.box} />,
    stacks: [
      {
        name: "Python",
        color: "#3776ab",
        svgPath:
          "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.34-.36-.27-.47-.2-.55-.13-.65-.05-.77V8.5l.05-.73.13-.62.2-.53.27-.44.34-.36.37-.28.4-.19.44-.13.48-.07.5-.04h5.45l.2-.01.13-.03.09-.05.06-.07.02-.09V2.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02H14.25z",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white dark:bg-black min-h-screen relative z-30 flex w-full flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-3xl flex flex-col items-start">
        <motion.h2 className="text-left text-xl font-bold text-neutral-800 md:text-xl lg:text-2xl dark:text-neutral-100 tracking-tight">
          What I <span className="text-green-500">Offer</span>
        </motion.h2>

        <motion.div className="mt-4 text-left text-md md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I specialize in crafting digital solutions that blend creativity with
          cutting-edge technology. From building scalable web applications to
          designing compelling brand identities, I offer a range of services
          tailored to meet your unique needs. Let&apos;s collaborate to bring
          your vision to life and create something truly impactful.
        </motion.div>
      </div>
      <BentoGrid className="max-w-3xl mx-auto px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={
              <div className="flex flex-col gap-2">
                {" "}
                {/* Kurangi gap agar lebih rapat & rapi */}
                <p>{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {" "}
                  {/* TAMBAHKAN 'gap-2' DI SINI */}
                  {item.stacks?.map((stack, idx) => (
                    <TechPill key={idx} {...stack} />
                  ))}
                </div>
              </div>
            }
            header={item.header}
            icon={item.icon}
            className={i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
