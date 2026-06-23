"use client";
import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_SLIDE = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "SCSS", icon: "💎" },
    { name: "JavaScript", icon: "🟨" },
    { name: "CSS", icon: "🎨" },
    { name: "HTML", icon: "🟧" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🟦" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Styled Components", icon: "💅" },
  ];

  const totalSlides = skills.length - ITEMS_PER_SLIDE + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleSkills = skills.slice(
    currentIndex,
    currentIndex + ITEMS_PER_SLIDE,
  );

  return (
    <section className="min-h-full my-8 px-4" id="skills" ref={sectionRef}>
      <div className="TerminalTag max-w-fit flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-lightGreen/30">
        <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-lightGreen">
          skills
        </span>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {visibleSkills.map((skill, index) => {
              const globalIndex = currentIndex + index;
              return (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${globalIndex * 100}ms` }}
                  className={`flex flex-col items-center justify-center p-4 md:p-6 aspect-square rounded-full 
                    border border-secondary/30 bg-[#1a1a1a] text-center 
                    hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.15)] 
                    hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-default hover:bg-secondary/20
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <span className="text-3xl md:text-4xl mb-1 md:mb-2">
                    {skill.icon}
                  </span>
                  <span className="text-white font-mono text-xs md:text-sm tracking-wide">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-secondary/50 text-white hover:border-lightGreen/70 hover:text-lightGreen transition-colors duration-200 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-lightGreen w-4"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-secondary/50 text-white hover:border-lightGreen/70 hover:text-lightGreen transition-colors duration-200 focus:outline-none"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
