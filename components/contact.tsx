import { Calendar, LinkIcon } from "lucide-react";

export default function Contact() {
  return (
    <section className="mt-14 mb-14">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#090909] px-7 py-9">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#000000_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Got something interesting<span className="text-blue-500">?</span>
          </h2>

          <p className="mt-3 max-w-xl text-base leading-7 text-zinc-500 dark:text-gray-400">
            If you're working on something worth building — let's talk. I'm always up for a good problem.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-black transition hover:scale-105">
              <Calendar size={18} />
              Book a call
            </button>

            <a href="https://www.linkedin.com/in/aman-kumar-239920273/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-900 dark:text-white transition hover:bg-zinc-100 dark:hover:bg-zinc-900">
              <LinkIcon size={18} />
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}