import Counter from "@/components/counter";

type Stat = { label: string; value: number; prefix?: string; suffix?: string };

const stats: Stat[] = [
  { label: "Contributions", value: 508, suffix: "+" },
  { label: "DSA Problems", value: 800, suffix: "+" },
  { label: "LeetCode Rank", value: 66.56, prefix: "Top ", suffix: "%" },
];

export default function Stats(){
  return (
    <a
      href="https://codolio.com/profile/amansharma264"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 grid grid-cols-3 gap-3"
    >
      {stats.map((stat: Stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 px-4 py-4 text-center hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.2)] transition-all duration-300"
        >
          <p className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </a>
  );
}