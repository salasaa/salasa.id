import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f8f8f8] dark:bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      <div className="relative z-10 h-full w-full">
        <HeroContent />
      </div>
    </section>
  );
}
