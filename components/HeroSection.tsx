import React from "react";
import MyPhoto from "@/assets/my_photo.png";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-full overflow-hidden px-4 sm:px-6 py-8 sm:py-12 lg:py-0"
    >
      <div className="GridBackdrop absolute inset-0 -z-10" aria-hidden="true" />
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full">
        <div className="TerminalTag flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 rounded-full border border-lightGreen/30">
          <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
          <span className="font-mono text-xs tracking-wide text-lightGreen">
            available for work
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] sm:leading-[1.05] tracking-tight">
          I build interfaces
          <br />
          that{" "}
          <span className="relative inline-block">
            <span className="relative z-10">don&apos;t break</span>
            <span
              className="UnderlineDraw absolute left-0 bottom-0 sm:bottom-1 h-2 sm:h-3 w-full bg-secondary/70 -z-0"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-secondary/80 leading-relaxed">
          Frontend developer crafting fast, accessible, pixel-precise products.
          React, TypeScript, and an unreasonable attention to detail.
        </p>

        <div className="font-mono text-xs sm:text-sm text-lightGreen/80 mt-4 sm:mt-6 h-6 overflow-hidden">
          <span className="TypewriterLine whitespace-nowrap">
            const stack = [&quot;React&quot;, &quot;TypeScript&quot;,
            &quot;Tailwind&quot;, &quot;Next.js&quot;];
          </span>
        </div>

        <div className="flex items-center gap-4 mt-6 sm:mt-10">
          <div className="flex items-center gap-4 mt-6 sm:mt-10">
            <a
              href="/cv.pdf"
              download="Alaa_Jomaa_CV.pdf"
              className="cursor-pointer px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-secondary/40 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div
        className="relative flex-1 hidden sm:flex items-center justify-center bg-secondary w-full max-w-[280px] sm:max-w-md aspect-square overflow-hidden transition-[border-radius] duration-500"
        style={{ borderRadius: "30% 70% 65% 35% / 40% 45% 55% 60%" }}
      >
        <Image
          src={MyPhoto}
          alt="alaa_photo"
          fill
          loading="eager"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
