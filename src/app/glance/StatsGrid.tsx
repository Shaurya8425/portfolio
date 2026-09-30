"use client";

type GithubStats = {
  followers?: number;
  following?: number;
  public_repos?: number;
  location?: string;
};

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className='surface p-5 transition-transform duration-200 hover:-translate-y-1'>
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

export default function StatsGrid({ initialStats }: { initialStats: GithubStats | null }) {
  const stats = initialStats;

  const cards = [
    { title: "Followers", value: stats?.followers },
    { title: "Following", value: stats?.following },
    { title: "Total Public Repositories", value: stats?.public_repos },
    { title: "Location", value: stats?.location },
  ];

  return (
    <div className='mb-8 mt-2'>
      <div className='grid grid-cols-1 gap-4 card-container md:grid-cols-2'>
        {cards.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value === undefined ? <div className='skeleton-block h-10 w-28' /> : card.value || "Limit Reached"}
          />
        ))}
      </div>
    </div>
  );
}
