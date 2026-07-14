"use client";

import { CodeXml, MapPin, Mail, GraduationCap, Check, Copy, Trophy } from "lucide-react";
import { useState } from "react";

export default function PersonalInfo() {
  const [copied, setCopied] = useState(false);
  const email = "officialamansharma264@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-1.5 font-mono text-sm text-zinc-600 dark:text-zinc-400">

      <div className="flex items-center gap-2">
        <CodeXml size={16} />
        <span>Software Engineer</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>Bihar, India</span>
      </div>

      <button onClick={handleCopy} className="group flex items-center gap-2 text-left w-fit" aria-label="Copy email address">
        <Mail size={16} />
        <span>{email}</span>
        <span className="text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition">
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </span>
      </button>

      <div className="flex items-center gap-2">
        <GraduationCap size={16} />
        <span>ETE @ SIR MVIT, graduating 2027</span>
      </div>

      <a
        href="https://codolio.com/profile/amansharma264"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 w-fit text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition underline underline-offset-2 decoration-blue-500/40"
      >
        <Trophy size={16} />
        <span>View my coding profile</span>
      </a>

      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-200 transition-all duration-300 ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5 shadow-lg text-sm text-zinc-700 dark:text-zinc-200">
          <Check size={16} className="text-green-500" />
          Email copied to clipboard
        </div>
      </div>
    </div>
  );
}