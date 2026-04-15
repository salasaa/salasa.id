import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export const HeroBackground = () => {
  return (
    <div className="h-full w-full absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#f8f8f8] dark:bg-zinc-950">
      <div className="relative z-20 w-full h-full">
        <BackgroundRippleEffect />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent bg-[#f8f8f8] dark:bg-zinc-950" />

      <div className="absolute inset-0 z-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] bg-[#f8f8f8] dark:bg-zinc-950" />
    </div>
  );
};
