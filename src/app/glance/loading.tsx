import { ContributionGraphSkeleton } from "../../../components/skeleton/ContributionGraphSkeleton";

export default function Loading() {
  return (
    <div className='mx-auto max-w-6xl'>
      <div className='mb-10'>
        <div className='mb-3 h-3 w-36 animate-pulse rounded bg-black/5 dark:bg-white/10' />
        <div className='h-12 w-72 animate-pulse rounded bg-black/5 dark:bg-white/10' />
        <div className='mt-3 h-6 w-full max-w-xl animate-pulse rounded bg-black/5 dark:bg-white/10' />
      </div>
      <section className='surface mb-8 p-6 sm:p-8'>
        <div className='mb-6 flex items-end justify-between'>
          <div><div className='mb-2 h-3 w-32 animate-pulse rounded bg-black/5 dark:bg-white/10' /><div className='h-8 w-56 animate-pulse rounded bg-black/5 dark:bg-white/10' /></div>
          <div className='h-10 w-32 animate-pulse rounded bg-black/5 dark:bg-white/10' />
        </div>
        <ContributionGraphSkeleton />
      </section>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {Array.from({ length: 4 }).map((_, index) => <div key={index} className='surface h-[118px] animate-pulse p-5' />)}
      </div>
    </div>
  );
}
