"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="mx-16 sm:mx-24 mt-12 mb-4">
      <div className="rounded-4xl bg-[#f5a992] px-10 py-10 sm:px-10 sm:py-14 shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-32"
                  loading="eager"
                />
              </Link>
              <div className="hidden h-10 w-px bg-black/20 sm:block" />
              <p className="max-w-xs text-sm font-medium text-black/80">
                Crafting digital experiences with{" "}
                <Heart className="inline h-4 w-4 fill-black/60 text-black/60" />{" "}
                and creativity.
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="rounded-full px-4 py-2 text-sm font-medium text-black/80 transition-all duration-300 hover:scale-105 hover:bg-black/10 hover:text-black cursor-pointer"
                aria-label="Scroll to about me section"
              >
                About me
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-4 py-2 text-sm font-medium text-black/80 transition-all duration-300 hover:scale-105 hover:bg-black/10 hover:text-black cursor-pointer"
                aria-label="Scroll to contact section"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-black font-bold">
              © {currentYear} alaa jomaa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
