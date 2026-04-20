import React from "react";

const projects = [
  {
    title: "hookcn",
    description: "Collection of re-usable react hooks inspired by shadcn/ui.",
    tags: ["Nextjs", "Tailwindcss", "Shadcn/ui", "React"],
    href: "https://hookcn.ouassim.tech",
  },
  {
    title: "shadcn form builder",
    description: "WYSIWYG shadcn form builder.",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "Shadcn/ui",
      "React",
      "Netlify",
      "Zod",
      "React Hook Form",
    ],
    href: "https://forms.ouassim.tech",
  },
  {
    title: "ouassim.tech",
    description: "This awesome website that you're on.",
    tags: ["Astro", "Tailwindcss", "Shadcn/ui", "React", "Netlify", "Markdown"],
    href: "https://ouassim.tech",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] dark:bg-zinc-950 pt-24 pb-20">
      <section className="border-grid text-natural-100 max-w-3xl mx-auto">
        <div className="container-wrapper relative">
          <div className="container space-y-4">
            <h2 className="font-mono text-xl leading-tight font-bold tracking-tighter sm:text-2xl md:text-3xl lg:leading-[1.1]">
              Projects
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base relative border-b border-zinc-800 py-6">
              Here are some of my projects. Check them out!
            </p>

            {/* Iterasi Projects */}
            {projects.map((project, index) => (
              <a
                key={index}
                className="group relative flex items-center justify-between gap-4 outline-offset-[6px] hover:outline-[0.5px] hover:outline-neutral-600/50 hover:outline-dashed py-4"
                target="_blank"
                href={project.href}
                rel="noopener noreferrer"
              >
                {/* Cross decorations (Top-Left & Bottom-Right) */}
                <div
                  className="absolute top-[-6.25px] left-[-6.25px] hidden group-hover:block"
                  style={{ "--cross-size": "10px" } as React.CSSProperties}
                >
                  <div className="absolute top-0 left-0 h-(--cross-size) w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  <div className="absolute top-0 left-0 h-[0.5px] w-(--cross-size) -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                </div>
                <div
                  className="absolute right-[-6.25px] bottom-[-6.25px] hidden group-hover:block"
                  style={{ "--cross-size": "10px" } as React.CSSProperties}
                >
                  <div className="absolute top-0 left-0 h-(--cross-size) w-[0.5px] -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                  <div className="absolute top-0 left-0 h-[0.5px] w-(--cross-size) -translate-x-1/2 -translate-y-1/2 bg-neutral-500"></div>
                </div>

                <div>
                  <p className="font-mono font-semibold">{project.title}</p>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-muted/60 text-foreground border px-2 py-1.5 text-xs"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Arrow SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out shrink-0"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    className="translate-x-2.5 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                  ></line>
                  <polyline
                    points="12 5 19 12 12 19"
                    className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                  ></polyline>
                </svg>
              </a>
            ))}

            {/* See All Button */}
            <a
              href="/projects"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 group mt-4"
            >
              See all
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-2"
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  className="translate-x-2.5 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                ></line>
                <polyline
                  points="12 5 19 12 12 19"
                  className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                ></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
