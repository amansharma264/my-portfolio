import Contact from "@/components/contact";
import Description from "@/components/description";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import GithubCalender from "@/components/githubCalender";
import NameSection from "@/components/name";
import Navbar from "@/components/navbar";
import PersonalInfo from "@/components/personalinfo";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Stats from "@/components/stats";
import FadeIn from "@/components/fade-in";

export default function Page() {
  return (
    <main className="min-h-screen relative bg-white dark:bg-[#040404] transition-colors duration-300">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[800px] -left-40 w-[400px] h-[400px] rounded-full bg-blue-300/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="absolute top-[1600px] -right-40 w-[400px] h-[400px] rounded-full bg-blue-300/10 dark:bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">

        <Navbar />

        <section id="home">
          <FadeIn delay={0}><NameSection /></FadeIn>
          <FadeIn delay={150}><Description /></FadeIn>
          <FadeIn delay={250}><PersonalInfo /></FadeIn>
          <FadeIn delay={350}><GithubCalender /></FadeIn>
          <FadeIn delay={400}><Stats /></FadeIn>
          <FadeIn delay={500}><Skills /></FadeIn>
        </section>

        <section id="about">
          <FadeIn><Experience /></FadeIn>
          <FadeIn delay={100}><Education /></FadeIn>
        </section>

        <section id="projects">
          <FadeIn><Projects /></FadeIn>
        </section>

        <section id="contact">
          <FadeIn><Contact /></FadeIn>
        </section>

        <FadeIn><Footer /></FadeIn>

      </div>
    </main>
  );
}