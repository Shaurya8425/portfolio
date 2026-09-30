type ContributionSkeletonGraphProps = {
  small?: boolean;
};

export const ContributionGraphSkeleton: React.FC<ContributionSkeletonGraphProps> = ({ small = false }) => {
  const rows = 7;
  const cols = small ? 12 : 53;

  return (
    <div className='min-w-[720px]'>
      <div className='mb-2 grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 text-[10px] text-[var(--muted)]'>
        {Array.from({ length: cols }).map((_, index) => <span key={index} className='h-3 w-7 animate-pulse rounded bg-black/5 dark:bg-white/10' />)}
      </div>
      <div className='grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 overflow-hidden'>
      {Array.from({ length: cols }).map((_, colIndex) => (
        <div key={colIndex} className='flex flex-col gap-1'>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className='aspect-square w-full rounded-[3px] bg-black/5 animate-pulse dark:bg-white/10'
            />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};
