"use client";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-full my-8 px-4" id="projects">
      <div className="TerminalTag max-w-fit flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-lightGreen/30">
        <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-lightGreen">
          my projects
        </span>
      </div>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6"
      >
        <div
          className={`md:col-span-3 col-span-1 transition-all duration-500 ease-out delay-0 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        group relative bg-[#1a1a1a] border border-secondary/30 rounded-xl p-6 
        hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.1)] 
        hover:-translate-y-1.5 transition-all duration-300 cursor-pointer
      `}
        >
          <h3 className="text-white font-bold text-xl mb-2">Smart Valet</h3>
          <p className="text-secondary text-sm leading-relaxed line-clamp-4">
            A smart parking assistant that uses computer vision to detect empty
            spots and guide drivers in real-time. Built with React Native,
            TensorFlow Lite, and Firebase.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              React Native
            </span>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              TensorFlow
            </span>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              Firebase
            </span>
          </div>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-lightGreen text-sm font-mono">
              View Project →
            </span>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 flex flex-col gap-4">
          <div
            className={`transition-all duration-500 ease-out delay-150 
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          group relative bg-[#1a1a1a] border border-secondary/30 rounded-xl p-5 
          hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.1)] 
          hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex-1
        `}
          >
            <h4 className="text-white font-bold text-lg mb-1">Project Alpha</h4>
            <p className="text-secondary text-xs leading-relaxed line-clamp-3">
              An open‑source CLI tool for automating deployment workflows.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Node.js
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Docker
              </span>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-lightGreen text-xs font-mono">→</span>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-out delay-300 
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          group relative bg-[#1a1a1a] border border-secondary/30 rounded-xl p-5 
          hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.1)] 
          hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex-1
        `}
          >
            <h4 className="text-white font-bold text-lg mb-1">Project Beta</h4>
            <p className="text-secondary text-xs leading-relaxed line-clamp-3">
              A real‑time dashboard for monitoring IoT sensor data.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Vue.js
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                WebSocket
              </span>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-lightGreen text-xs font-mono">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
