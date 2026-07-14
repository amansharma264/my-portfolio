"use client";

import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState, type MouseEvent } from "react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756
      -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.492.997
      .108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22
      -.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005
      2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84
      1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.103.814 2.222 0 1.606-.015
      2.898-.015 3.293 0 .322.216.696.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445
      -2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267
      2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114
      20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24
      1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  );
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-5 z-50">
      <nav className="mx-auto flex h-16 items-center justify-between rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#090909]/95 px-5 sm:px-8 shadow-lg shadow-zinc-200/50 dark:shadow-none backdrop-blur-md">

        {/* Left Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
          <Image
  src="/images/profile.jpeg"
  alt="Profile"
  width={42}
  height={42}
  className="w-[42px] h-[42px] aspect-square rounded-full border border-zinc-200 dark:border-zinc-700 object-cover cursor-pointer"
/>
        </a>

        {/* Center Navigation - Desktop only */}
        <div className="hidden md:flex items-center gap-10 text-[18px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition ${
                activeSection === link.href.slice(1)
                  ? "font-semibold text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            Resume
          </a>
        </div>

        {/* Right Icons - Desktop only */}
        <div className="hidden md:flex items-center gap-5">
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700" />

          
            <a
            href="https://github.com/amansharma264"
            target="_blank"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <GithubIcon size={20} />
          </a>

          
            <a
            href="https://www.linkedin.com/in/aman-kumar-239920273"
            target="_blank"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <LinkedinIcon size={20} />
          </a>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-700 dark:text-zinc-300"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#090909]/95 shadow-lg backdrop-blur-md px-6 py-6 flex flex-col gap-5 text-[17px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition ${
                activeSection === link.href.slice(1)
                  ? "font-semibold text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {link.label}
            </a>
          ))}

          
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400"
          >
            Resume
          </a>

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <div className="flex items-center gap-6">
          
              <a
                href="https://github.com/amansharma264"
                target="_blank"
                className="text-zinc-500 dark:text-zinc-400"
              >
                <GithubIcon size={22} />
              </a>

            
            <a
              href="https://www.linkedin.com/in/aman-kumar-239920273"
              target="_blank"
              className="text-zinc-500 dark:text-zinc-400"
            >
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}