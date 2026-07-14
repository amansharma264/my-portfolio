import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiClerk,
  SiGmail,
} from "react-icons/si";

export const experiences = [


  {
    company: "SubSentry (Geekhaven OpenCode, IIIT Allahabad)",
    role: "Open Source Contributor",
    duration: "Dec 2025 – Jan 2026",
    location: "Remote",
    description: [
      "Built Gmail email ingestion pipeline and subscription CRUD for an open-source financial tracking dashboard.",
      "Raised 31 Pull Requests with 24 successfully merged into the main repository.",
      "Integrated Clerk Authentication into dashboard widgets enabling per-user data isolation.",
    ],
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Clerk", icon: SiClerk },
      { name: "GitHub", icon: SiGithub },
      { name: "Gmail API", icon: SiGmail },
    ],
  },

  {
    company: "Physics Wallah",
    role: "Subject Matter Expert",
    duration: "Oct 2023 – Nov 2024",
    location: "Remote",
    description: [
      "Produced 1,500+ JEE Mathematics and Physics solutions over 13 months.",
      "Maintained a 90%+ student satisfaction rate.",
    ],
    tech: [],
  },

  {
    company: "Brainly India",
    role: "Senior Moderator",
    duration: "Jun 2020 – Sep 2025",
    location: "Remote",
    description: [
      "Answered 5,600+ questions across Mathematics, Physics, and Chemistry.",
      "Earned 1,000+ Brainliest tags while contributing on a platform serving millions of students.",
    ],
    tech: [],
  },
];