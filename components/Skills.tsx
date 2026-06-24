"use client";
import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [shuffledSkills, setShuffledSkills] = useState<typeof skills>([]);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Shuffle function (Fisher‑Yates)
  const shuffleArray = (arr: typeof skills) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle only once on mount
    setShuffledSkills(shuffleArray(skills));
  }, []);

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

  return (
    <section className="min-h-full my-8 px-2" id="skills" ref={sectionRef}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="TerminalTag max-w-fit flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-lightGreen/30">
        <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-lightGreen">
          skills
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {shuffledSkills.map((skill, index) => (
              <div
                key={skill.name}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  animationDelay: `${index * 0.4}s`,
                }}
                className={`flex flex-col items-center justify-center p-4 md:p-6 aspect-square rounded-full 
                  border border-secondary/30 bg-[#1a1a1a] text-center 
                  hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.15)] 
                  hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-default hover:bg-secondary/20
                  ${visible ? "opacity-100 translate-y-0 floating" : "opacity-0 translate-y-4"}`}
              >
                <span className="text-3xl md:text-4xl mb-1 md:mb-2">
                  {skill.icon}
                </span>
                <span className="text-white font-mono text-xs md:text-sm tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
