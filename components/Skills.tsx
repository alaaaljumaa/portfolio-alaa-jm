"use client";
import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🟦" },
    { name: "Node.js", icon: "🟩" },
    { name: "Python", icon: "🐍" },
  ];

  return (
    <section className="min-h-full my-8 px-4" id="skills" ref={sectionRef}>
      <div className="TerminalTag max-w-fit flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-lightGreen/30">
        <span className="StatusDot h-2 w-2 rounded-full bg-lightGreen animate-pulse" />
        <span className="font-mono text-xs tracking-wide text-lightGreen">
          skills
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`flex flex-col items-center justify-center p-6 aspect-square rounded-full 
              border border-secondary/30 bg-[#1a1a1a] text-center 
              hover:border-lightGreen/50 hover:shadow-[0_0_20px_rgba(100,255,100,0.15)] 
              hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-default hover:bg-secondary/20
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-white font-mono text-sm tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
