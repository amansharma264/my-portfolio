import Image from "next/image";

export default function NameSection() {
  return (
    <div className="flex items-start gap-10 mt-16">
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-[5px] border-zinc-700 shadow-lg shrink-0">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-white">
          Hi, I'm Aman Sharma
        </h1>

        <p className="mt-3 text-lg text-gray-400 leading-8">
          22y/o Full Stack Engineer who loves doing problem solving and Data
          Structures
        </p>
      </div>

    </div>
  );
}