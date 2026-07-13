import Image from "next/image"

export default function Navbar(){
    return(
        <div className="bg-[#040404] flex items-center justify-between w-full h-12 font-mono text-[#dadada] p-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
                <Image src='/images/profile.jpeg' alt="logo" className="w-full h-full object-cover" width={40} height={40} />
            </div>
            <div className="flex items-center justify-center gap-8">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Blog</p>
            </div>
            <div>
                <button>Resume</button>
            </div>
        </div>
    )
}