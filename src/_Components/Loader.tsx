export const Loader = () => {
  const skeletonCount = 20;
  return (
    <div className="p-4">
      {/* <div className="w-full h-[600px] bg-gray-300 rounded-lg animate-pulse mb-8"></div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-c  ols-5 gap-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
const MovieCardSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="h-[300px] bg-gray-300 rounded-lg mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};
