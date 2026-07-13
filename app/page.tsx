import Description from '@/components/description';
import GithubCalender from '@/components/githubCalender';
import NameSection from '@/components/name';
import Navbar from '@/components/navbar';
import PersonalInfo from '@/components/personalinfo';
import Skills from '@/components/skills';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#040404]">
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />
        <NameSection />
        <Description />
        <PersonalInfo />
        <GithubCalender />
        <Skills />
      </div>
    </main>
  );
}