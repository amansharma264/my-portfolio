'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalender() {
  return (
    <div className="mt-10">
      <GitHubCalendar
        username="amansharma264"
        theme={{
          light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
      />
    </div>
  );
}