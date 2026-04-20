import type { Metadata } from "next";
import TestingPage from "@/components/section/project-real";

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

export default function Testing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <TestingPage />
    </main>
  );
}
