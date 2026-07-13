import { CodeXml, MapPin, Mail, GraduationCap } from "lucide-react";

export default function PersonalInfo() {
  return (
    <div className="mt-6 flex flex-col gap-2 font-mono text-gray-400">

      <div className="flex items-center gap-2">
        <CodeXml size={18} />
        <span className="text-lg">Software Engineer</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={18} />
        <span className="text-lg">Bihar, India</span>
      </div>

      <div className="flex items-center gap-2">
        <Mail size={18} />
        <span className="text-lg">officeamansharma@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <GraduationCap size={18} />
        <span className="text-lg">ETE @ SIR MVIT, graduating 2027</span>
      </div>

    </div>
  );
}