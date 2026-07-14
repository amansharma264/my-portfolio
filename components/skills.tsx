import { skills } from "@/data/skills";

export default function Skills(){
    return(
        <section className="mt-10">
            <div className="flex flex-wrap gap-2">
                {skills.map((skill)=>{
                    const Icon = skill.icon;
                    return(
                        <div key={skill.name}
                        className="flex items-center gap-1.5 rounded-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200"
                        >
                            <Icon size={16} />
                            <span>{skill.name}</span>
                        </div>
                    )
                })}
            </div>

            <div className="mt-8 flex justify-center">
                <button className="rounded-full border border-gray-300 dark:border-zinc-700 px-6 py-2 text-sm font-medium text-gray-800 dark:text-zinc-200 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-zinc-900">
                    More about me
                </button>
            </div>
        </section>
    )
}