import React from "react";
import ContributionGraph from "./ContributionGraph";
import { getGitHubStats } from "../actions/getGitHubStats";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-105 ${className}`}
  >
    <div className='card-content'>
      <h3 className='text-lg font-semibold tracking-tight card-title text-muted-foreground'>
        {title}
      </h3>
      <span className='text-5xl font-bold leading-tight tracking-tight card-value'>
        {value}
      </span>
    </div>
  </div>
);

async function page() {
  const githubStats = await getGitHubStats();

  const pickGithubStats = [
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Followers",
      value: githubStats.followers,
    },
    {
      title: "Following",
      value: githubStats.following,
    },
    {
      title: "Location",
      value: githubStats.location,
    },
  ];
  return (
    <>
      <ContributionGraph />

      <div className='mb-8'>
        <div className='grid grid-cols-1 gap-4 card-container md:grid-cols-3'>
          {pickGithubStats.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "Limit Reached"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
