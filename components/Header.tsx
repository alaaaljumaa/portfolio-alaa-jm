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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
    <header className="sticky top-0 z-50 shadow-sm px-2 sm:px-0">
      <nav className="mx-auto bg-black flex max-w-7xl items-center justify-between px-3 sm:px-6 py-2 my-4 border-2 border-secondary rounded-4xl shadow-sm hover:shadow-[0_0_20px_rgba(255,215,194,0.4)] hover:border-primary transition-all duration-300 relative">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            loading="eager"
            className="w-24 sm:w-32"
          />
        </Link>

        {/* Hamburger button - visible on mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-secondary transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-secondary transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-secondary transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Navigation links */}
        <ul
          className={`
            absolute sm:static top-full left-0 right-0 bg-black sm:bg-transparent
            flex flex-col sm:flex-row items-center gap-4 sm:gap-6
            text-sm font-medium text-foreground
            border-b sm:border-0 border-secondary/30 rounded-b-2xl sm:rounded-none
            py-6 sm:py-0 px-4 sm:px-0
            transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto"
            }
          `}
        >
          {links.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <li key={link.to} className="w-full sm:w-auto text-center">
                <Link
                  href={`#${link.to}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={handleLinkClick}
                  className={`
                    block px-4 py-2 sm:px-3 sm:py-1 rounded-full transition-all duration-300 
                    hover:scale-105 hover:bg-secondary hover:text-black
                    ${
                      isActive
                        ? "bg-secondary text-black scale-105"
                        : "text-secondary"
                    }
                  `}
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
