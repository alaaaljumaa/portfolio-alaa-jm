"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", to: "home" },
  { title: "Projects", to: "projects" },
  { title: "Skills", to: "skills" },
  { title: "Contact", to: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.to))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto bg-black flex max-w-7xl items-center justify-between px-1 my-4 border-2 border-secondary rounded-4xl shadow-sm hover:shadow-[0_0_20px_rgba(255,215,194,0.4)] hover:border-primary transition-all duration-300">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            loading="eager"
            className="w-32"
          />
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-foreground">
          {links.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <li key={link.to}>
                <Link
                  href={`#${link.to}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black ${
                    isActive
                      ? "bg-secondary text-black scale-105"
                      : "text-secondary"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
