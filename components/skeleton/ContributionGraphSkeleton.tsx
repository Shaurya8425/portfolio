type ContributionSkeletonGraphProps = {
  small?: boolean;
};

export const ContributionGraphSkeleton: React.FC<ContributionSkeletonGraphProps> = ({ small = false }) => {
  const rows = 7;
  const cols = small ? 12 : 53;

  return (
    <div className='flex gap-1 overflow-hidden'>
      {Array.from({ length: cols }).map((_, colIndex) => (
        <div key={colIndex} className='flex flex-col gap-1'>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className='w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-700 animate-pulse'
            />
          ))}
        </div>
      ))}
    </div>
  );
};
