import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
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

function LinkedinIcon({ size = 18 }: { size?: number }) {
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

const socials = [
  { label: "GitHub", href: "https://github.com/amansharma264", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-239920273/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:officialamansharma264@gmail.com", icon: Mail },
];

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-10 mb-6">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-[#0a0a0a] dark:to-[#040404] px-8 sm:px-12 py-14">

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">

          <Image
  src="/images/profile.jpeg"
  alt="Aman Sharma"
  width={64}
  height={64}
  className="w-[64px] h-[64px] aspect-square rounded-full border border-zinc-200 dark:border-zinc-700 object-cover shadow-sm"
/>

          <h3 className="mt-5 text-2xl font-semibold text-zinc-900 dark:text-white">
            Aman Sharma
          </h3>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Full Stack Engineer, building things that ship.
          </p>

          <div className="mt-7 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            {exploreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-zinc-900 dark:hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 w-full max-w-xs h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-zinc-400 dark:text-zinc-500">
            <span>© 2026 Aman Sharma. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="mailto:officialamansharma264@gmail.com"
              className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition"
            >
              Let's build something
              <ArrowUpRight size={12} />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}