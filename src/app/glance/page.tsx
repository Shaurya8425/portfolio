
import ContributionGraph from "./ContributionGraph";
import { getGitHubStats } from "../actions/getGitHubStats";

/* component */
const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div className={`surface p-5 transition-transform duration-200 hover:-translate-y-1 ${className}`}>
    <div className='card-content flex flex-col justify-between'>
      <h3 className='text-sm font-bold uppercase tracking-wider text-[var(--muted)]'>
        {title}
      </h3>
      <span className='text-4xl font-black leading-tight tracking-tight'>
        {value}
      </span>
    </div>
  </div>
);

async function page() {
  const githubStats = await getGitHubStats();

  const pickGithubStats = [
    {
      title: "Followers",
      value: githubStats.followers,
    },
    {
      title: "Following",
      value: githubStats.following,
    },
    {
      title: "Total Public Repositories",
      value: githubStats.public_repos,
    },
    {
      title: "Location",
      value: githubStats.location,
    },
  ];
  return (
    <div className='mx-auto max-w-6xl'>
      <div className='mb-10'><p className='eyebrow mb-3'>Behind the scenes</p><h1 className='text-5xl font-black tracking-tight'>A quick glance.</h1><p className='mt-3 max-w-xl text-lg text-[var(--muted)]'>A live snapshot of my open-source activity and the numbers behind it.</p></div>
      <ContributionGraph />

      <div className='mb-8 mt-2'>
        <div className='grid grid-cols-1 gap-4 card-container md:grid-cols-2'>
          {pickGithubStats.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "Limit Reached"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
