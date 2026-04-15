import type { Metadata } from "next";
import ProjectPage from "@/components/section/projects";
import Features from "@/components/section/features";

export const metadata: Metadata = {
  title: "My Project Portfolio - Showing My Journey and Impact",
  description:
    "Explore my project portfolio, showcasing projects that reflect my journey, impact, and the value I bring to clients and collaborators.",
  keywords: [
    "Software Developer",
    "Quality Assurance",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Semarang",
    "Salasa ID",
  ],
};

export default function Project() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ProjectPage />

      <section className="relative h-screen w-full">
        <div className="relative z-20 pointer-events-none">
          <Features />
        </div>
      </section>
    </main>
  );
}
