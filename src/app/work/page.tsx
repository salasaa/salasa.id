import { Header } from "@/components/layout/header";
import WorkPage from "@/components/section/works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work Portfolio - Showing My Journey and Impact",
  description:
    "Explore my work portfolio, showcasing projects that reflect my journey, impact, and the value I bring to clients and collaborators.",
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

export default function Work() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />

      <section className="relative h-screen w-full">
        <div className="relative z-20 pointer-events-none">
          <WorkPage />
        </div>
      </section>
    </main>
  );
}
