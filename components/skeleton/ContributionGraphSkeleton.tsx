type ContributionSkeletonGraphProps = {
  small?: boolean;
};

const SkeletonCells = ({ columns }: { columns: number }) => (
  <div
    className='grid gap-1 overflow-hidden'
    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
  >
    {Array.from({ length: columns }).map((_, colIndex) => (
      <div key={colIndex} className='flex flex-col gap-1'>
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className='skeleton-block aspect-square w-full rounded-[3px]'
          />
        ))}
      </div>
    ))}
  </div>
);

export const ContributionGraphSkeleton: React.FC<ContributionSkeletonGraphProps> = ({ small = false }) => {
  const cols = small ? 12 : 53;

  return (
    <>
      <div className='md:hidden'>
        <div className='mb-2 grid grid-cols-12 gap-1 text-[10px] text-[var(--muted)]'>
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className='skeleton-block h-3 w-full' />
          ))}
        </div>
        <SkeletonCells columns={12} />
      </div>

      <div className='hidden min-w-[720px] md:block'>
        <div className='mb-2 grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 text-[10px] text-[var(--muted)]'>
          {Array.from({ length: cols }).map((_, index) => (
            <span key={index} className='skeleton-block h-3 w-7' />
          ))}
        </div>
        <SkeletonCells columns={cols} />
      </div>
    </>
  );
};
