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
            A unified smart platform for modern valet parking and lot
            management. It goes beyond simple parking control by integrating
            employee payroll, attendance, and operational analytics into a
            single dashboard. With support for multiple currencies, customizable
            receipts, and real-time statistical reporting, this system empowers
            businesses like VIP Parking Control to manage sites efficiently,
            track workforce productivity, and deliver a seamless customer
            experience from entry to exit.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              React
            </span>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              Material UI
            </span>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
              SingleR
            </span>
          </div>

        </div>
        <div className="md:col-span-2 col-span-1 flex flex-col gap-4">
          <div
            className={`transition-all h-fit duration-500 ease-out delay-150 
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          group relative bg-[#1a1a1a] border border-secondary/30 rounded-xl p-5 
          hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.1)] 
          hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex-1
        `}
          >
            <h4 className="text-white font-bold text-lg mb-1">Shofole</h4>
            <p className="text-secondary text-xs leading-relaxed line-clamp-3">
              Shofole is an innovative digital platform designed to bridge the
              gap between global machinery markets and end-users. It offers a
              unique visual discovery experience, allowing users to explore the
              latest machinery, equipment, tools, and home appliances through
              high-quality video content captured directly from trade
              exhibitions and specialized markets. The platform features an
              intuitive user interface with intelligent search functionality and
              categorized browsing across Electrical Tools, Home Appliances,
              Maintenance Tools, and Industrial Equipment. It includes robust
              user account management (login/signup) for personalized
              experiences and integrates seamlessly with social media to share
              insights. The core mission of Shofole is to empower customers,
              technicians, and business owners to make informed purchasing
              decisions by providing real, visual proof of product performance
              and innovation—eliminating the guesswork and physical travel
              traditionally associated with industrial procurement.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Type Script
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Tailwind
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Firebase
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                React Query
              </span>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://shofole.com/"
                target="_blank"
                className="text-lightGreen text-xs font-mono"
              >
                →
              </a>
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
            <h4 className="text-white font-bold text-lg mb-1">
              Shofole Dashboard
            </h4>
            <p className="text-secondary text-xs leading-relaxed line-clamp-3">
              Shofole Dashboard – The ultimate command center for managing your
              industrial video platform. Control content, users, and analytics
              from a single, powerful interface with ease and professionalism.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Type Script
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Tailwind
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                Firebase
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lightGreen/10 text-lightGreen border border-lightGreen/20">
                React Query
              </span>
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://app.shofole.com/"
                target="_blank"
                className="text-lightGreen text-xs font-mono"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
