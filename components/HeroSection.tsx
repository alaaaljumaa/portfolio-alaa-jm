import React from 'react'
import MyPhoto from "@/assets/my_photo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between gap-12 min-h-full overflow-hidden"
    >
      <div className="GridBackdrop absolute inset-0 -z-10" aria-hidden="true" />
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
        <div className="TerminalTag flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-lightGreen/30">
          <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen" />
          <span className="font-mono text-xs tracking-wide text-lightGreen">
            available for work
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-primary leading-[1.05] tracking-tight">
          I build interfaces
          <br />
          that{" "}
          <span className="relative inline-block">
            <span className="relative z-10">don&apos;t break</span>
            <span
              className="UnderlineDraw absolute left-0 bottom-1 h-3 w-full bg-secondary/70 -z-0"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="mt-6 text-lg text-secondary/80 leading-relaxed">
          Frontend developer crafting fast, accessible, pixel-precise products.
          React, TypeScript, and an unreasonable attention to detail.
        </p>

        <div className="font-mono text-sm text-lightGreen/80 mt-6 h-6">
          <span className="TypewriterLine">
            const stack = [&quot;React&quot;, &quot;TypeScript&quot;,
            &quot;Tailwind&quot;, &quot;Next.js&quot;];
          </span>
        </div>

        <div className="flex items-center gap-4 mt-10">
          <button className="cursor-pointer px-6 py-3 rounded-xl border border-secondary/40 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">
          Download CV
          </button>
        </div>
      </div>
      <div
        className="relative flex-1 flex items-center justify-center bg-secondary w-full max-w-md aspect-square overflow-hidden transition-[border-radius] duration-500"
        style={{ borderRadius: "30% 70% 65% 35% / 40% 45% 55% 60%" }}
      >
        <Image
          src={MyPhoto}
          alt="alaa_photo"
          fill
          loading="eager"
          sizes="100%"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection