import { skills } from "@/data/skills";

export default function Skills(){
    return(
        <section className="mt-16">
            <div className="flex flex-wrap gap-3">
                {skills.map((skill)=>{
                    const Icon = skill.icon;
                    return(
                        <div key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200"
                        >
                            <Icon size={20} />
                            <span> {skill.name} </span>
                        </div>
                    )
                })}
            </div>
            
            <div className="mt-12 flex justify-center">
                <button className="rounded-full border border-gray-300 px-8 py-3 text-xl font-medium text-gray-800 transition-all duration-200 hover:bg-gray-100">
                    More about me
                </button>
            </div>
        </section>
    )
}