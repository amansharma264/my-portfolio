import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function NameSection() {
  return (
    <div className="flex items-start gap-6 mt-10">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-2xl">
        <h1 className="text-2xl text-zinc-900 dark:text-white flex items-center gap-1.5">
          Hi, I'm <span className="font-bold">Aman Sharma</span>
          <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500 text-white" strokeWidth={2} />
        </h1>

        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400 leading-6">
          22y/o Full Stack Engineer who loves doing problem solving and Data Structures
        </p>
      </div>
    </div>
  );
}