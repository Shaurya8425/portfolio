
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
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-102 ${className}`}
  >
    <div className='card-content flex flex-col justify-between'>
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
    <>
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
    </>
  );
}

export default page;
