import Image from "next/image";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
        Education<span className="text-blue-500">.</span>
      </h2>

      <div>
        {education.map((item) => (
          <div
            key={item.college}
            className="group rounded-2xl border border-transparent hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.15)] px-5 py-4 -mx-5 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-white flex items-center justify-center overflow-hidden shrink-0">
                <Image src={item.logo} alt={item.college} width={32} height={32} className="object-contain" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{item.college}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-sm text-zinc-500 dark:text-gray-400">{item.degree}</p>
                  <span className="text-sm text-zinc-400 dark:text-gray-500">{item.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}