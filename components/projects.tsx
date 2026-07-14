import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="mt-6">
      <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
        Projects<span className="text-blue-500">.</span>
      </h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 px-5 py-4 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.15)] hover:-translate-y-0.5"
          >
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white p-1.5 group-hover:border-blue-400/40 transition-colors">
                <Image src={project.logo} alt={project.title} width={32} height={32} className="h-8 w-8 object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-gray-400">{project.description}</p>
              </div>
            </div>

            <div className="ml-4 flex shrink-0 items-center gap-3">
              <span className="text-xs text-zinc-400 dark:text-gray-500 whitespace-nowrap">{project.duration}</span>
              <ArrowUpRight size={18} className="cursor-pointer text-zinc-400 dark:text-gray-500 transition group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-900 dark:text-white transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
          See More Projects
        </button>
      </div>
    </section>
  );
}