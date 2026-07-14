"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import {
  Home,
  User,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  FileText,
  Search,
} from "lucide-react";

type CommandItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items: CommandItem[] = [
  {
    id: "home",
    label: "Go to Home",
    icon: <Home size={17} />,
    action: () => scrollTo("home"),
    group: "Navigate",
  },
  {
    id: "about",
    label: "Go to About",
    icon: <User size={17} />,
    action: () => scrollTo("about"),
    group: "Navigate",
  },
  {
    id: "projects",
    label: "Go to Projects",
    icon: <FolderGit2 size={17} />,
    action: () => scrollTo("projects"),
    group: "Navigate",
  },
  {
    id: "contact",
    label: "Go to Contact",
    icon: <Mail size={17} />,
    action: () => scrollTo("contact"),
    group: "Navigate",
  },

  {
    id: "resume",
    label: "Open Resume",
    icon: <FileText size={17} />,
    action: () => {
      window.open("/resume.pdf", "_blank");
      setOpen(false);
    },
    group: "Links",
  },

  {
    id: "email",
    label: "Send Email",
    icon: <Mail size={17} />,
    action: () => {
      window.location.href = "mailto:officeamansharma@gmail.com";
      setOpen(false);
    },
    group: "Links",
  },

  {
    id: "theme",
    label: theme === "dark"
      ? "Switch to Light Mode"
      : "Switch to Dark Mode",
    icon: theme === "dark"
      ? <Sun size={17} />
      : <Moon size={17} />,
    action: () => {
      setTheme(theme === "dark" ? "light" : "dark");
      setOpen(false);
    },
    group: "Settings",
  },
];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const groups = Array.from(new Set(filtered.map((i) => i.group)));

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] shadow-2xl overflow-hidden"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <Search size={18} className="text-zinc-400 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full bg-transparent outline-none text-[15px] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
          />
          <kbd className="hidden sm:block text-xs text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-zinc-400 py-8">
              No results found.
            </p>
          )}

          {groups.map((group) => (
            <div key={group} className="mb-2">
              <p className="px-4 py-1.5 text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {group}
              </p>
              {filtered
                .filter((i) => i.group === group)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-[15px] text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition text-left"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}