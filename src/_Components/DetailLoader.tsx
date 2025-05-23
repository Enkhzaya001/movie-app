import React from "react";

export const MovieDetailsSkeleton = () => {
  return (
    <div className="animate-pulse p-6 max-w-[1440px] mx-auto">
      {/* Cover image skeleton */}
      <div className="h-[400px] w-full bg-gray-300 rounded-lg mb-6"></div>

      {/* Title + buttons */}
      <div className="h-8 bg-gray-300 w-1/3 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 w-1/4 mb-6 rounded"></div>

      {/* Tabs (like overview, trailers, etc) */}
      <div className="flex space-x-4 mb-6">
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
      </div>

      {/* Overview content */}
      <div className="space-y-4 mb-10">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>

      {/* More like this (movie cards) */}
      <div className="flex space-x-4 overflow-x-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="min-w-[150px]">
            <div className="h-[225px] bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 w-3/4 rounded mb-1"></div>
            <div className="h-3 bg-gray-300 w-1/2 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from 'react';
// import MovieDetailsSkeleton from './MovieDetailsSkeleton';

// const MovieDetails = () => {
//   const [loading, setLoading] = useState(true);
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       // Симуляци: ачаалалт дууссан
//       setMovieData({ title: "Wicked" });
//       setLoading(false);
//     }, 2000); // 2 секунд хүлээнэ
//   }, []);

//   if (loading) return <MovieDetailsSkeleton />;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{movieData.title}</h1>
//       {/* Жинхэнэ контент энд орно */}
//     </div>
//   );
// };

// export default MovieDetails;
