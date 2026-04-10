import { HeroBackground } from "@/components/section/hero-background";
import { HeroContent } from "@/components/section/hero-content";
import TechCloud from "../components/section/tech-cloud";
import ToolStack from "../components/section/tool-stacks";
import PolaroidSection from "@/components/section/polaroid";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 1. Navbar harus paling atas */}

      {/* 2. Hero Section */}
      <section className="relative h-screen w-full">
        {/* Konten Hero (Teks "Salasa ID") */}
        <div className="relative z-20 pointer-events-none">
          {/* WAJIB: pointer-events-none agar mouse 'tembus' ke bawah */}
          <HeroContent />
        </div>

        {/* Background Ripple (Ditaruh di sini) */}
        <HeroBackground />
      </section>

      {/* 3. Bento Grid Section */}
      <TechCloud />
      <PolaroidSection />
      <ToolStack />
    </main>
  );
}
