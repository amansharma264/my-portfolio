'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalender() {
  return (
    <div className="mt-8 group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-5 py-5 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.2)] transition-all duration-300">
      <GitHubCalendar
        username="amansharma264"
        theme={{
          light: ['#eef2ff', '#bfdbfe', '#60a5fa', '#3b82f6', '#1d4ed8'],
          dark: ['#18181b', '#1e3a5f', '#1d4ed8', '#3b82f6', '#60a5fa'],
        }}
      />
    </div>
  );
}