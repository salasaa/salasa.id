"use client";

const projects = [
  {
    name: "Arcbook",
    description:
      "A scalable web application built with Next.js and PostgreSQL. " +
      "Focused on clean architecture and performance.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://github.com/YOUR_USERNAME/arcbook",
    live: null,
  },
  {
    name: "Cartify",
    description:
      "An e-commerce platform with cart management, authentication, " +
      "and a full QA pipeline covering every user flow.",
    tags: ["Next.js", "TypeScript", "Prisma", "Docker"],
    href: "https://github.com/YOUR_USERNAME/cartify",
    live: null,
  },
  {
    name: "salasa.id",
    description:
      "This portfolio site — built with Next.js, Bun, and Tailwind. " +
      "Deployed on Cloudflare Pages.",
    tags: ["Next.js", "Bun", "Tailwind", "Cloudflare"],
    href: "https://github.com/YOUR_USERNAME/salasa.id",
    live: "https://salasa.id",
  },
];

function ProjectCard({
  name,
  description,
  tags,
  href,
  live,
}: (typeof projects)[0]) {
  return (
    <div
      className="border border-border rounded-xl p-5 flex flex-col gap-3
                    hover:border-foreground/30 transition-colors"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg">{name}</h2>
        <div className="flex gap-3 text-sm">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Live ↗
            </a>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 border border-border rounded-md
                       text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-medium mb-2">Projects</h1>
      <p className="text-muted-foreground mb-12">
        Things I&rsquo;ve built — from side projects to work assignments.
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </main>
  );
}
