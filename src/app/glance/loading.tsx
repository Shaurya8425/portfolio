import { ContributionGraphSkeleton } from "../../../components/skeleton/ContributionGraphSkeleton";

export default function Loading() {
  return (
    <div className='mx-auto max-w-6xl'>
      <div className='mb-10'>
        <p className='eyebrow mb-3'>Behind the scenes</p>
        <h1 className='text-5xl font-black tracking-tight'>A quick glance.</h1>
        <p className='mt-3 max-w-xl text-lg text-[var(--muted)]'>A live snapshot of my open-source activity and the numbers behind it.</p>
      </div>
      <section className='surface mb-8 p-6 sm:p-8'>
        <div className='mb-6 flex items-end justify-between'>
          <div>
            <p className='eyebrow mb-2'>Open source pulse</p>
            <h2 className='text-2xl font-black'>A year in commits.</h2>
          </div>
          <div className='skeleton-block h-10 w-32' />
        </div>
        <ContributionGraphSkeleton />
      </section>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {["Followers", "Following", "Total Public Repositories", "Location"].map((title) => (
          <div key={title} className='surface p-5'>
            <div className='card-content flex flex-col justify-between'>
              <h3 className='text-sm font-bold uppercase tracking-wider text-[var(--muted)]'>{title}</h3>
              <div className='skeleton-block mt-2 h-10 w-28' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
