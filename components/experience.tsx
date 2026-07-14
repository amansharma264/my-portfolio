import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
        Experience<span className="text-blue-500">.</span>
      </h2>

      <div>
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group rounded-2xl border border-transparent hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.15)] px-5 py-4 -mx-5 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{exp.company}</h3>
                <p className="text-sm text-zinc-500 dark:text-gray-400">{exp.role}</p>
              </div>
              <p className="text-sm text-zinc-400 dark:text-gray-500">{exp.duration}</p>
            </div>

            <ul className="mt-3 space-y-1.5">
              {exp.description.map((point, index) => (
                <li key={index} className="text-sm text-zinc-600 dark:text-gray-300 flex gap-2 leading-6">
                  <span className="text-zinc-400 dark:text-zinc-500">›</span>
                  {point}
                </li>
              ))}
            </ul>

            {exp.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-center gap-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 px-2.5 py-1">
                      <Icon size={14} className="text-zinc-700 dark:text-white" />
                      <span className="text-xs text-zinc-700 dark:text-white">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-4 border-b border-zinc-200 dark:border-zinc-800 group-hover:border-transparent transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}