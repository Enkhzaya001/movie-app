// "use client";
// import { getFilteredGenre } from "@/Hooks/GetFilteredGenre";
// import { Genre } from "./_components/Genre";
// import { useEffect, useState } from "react";
// import { Movie } from "@/_Components/MovieDetail";
// import { useRouter } from "next/navigation";
// import { Loader } from "@/components/ui/loader"; // өөрийн Spinner компонентоор солиорой

// interface PageProps {
//   params: {
//     genreIds: string;
//   };
//   searchParams: {
//     page?: string;
//   };
// }

// const GenrePage = ({ params, searchParams }: PageProps) => {
//   const { genreIds } = params;
//   const currentPage = Number(searchParams.page) || 1;

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalResults, setTotalResults] = useState(0);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchMoviesByGenre = async () => {
//       setLoading(true);
//       try {
//         const response = await getFilteredGenre(genreIds, currentPage);
//         setMovies(response.data.results);
//         setTotalResults(response.data.total_results);
//       } catch (error) {
//         console.error("Movie fetch error:", error);
//       }
//       setLoading(false);
//     };

//     fetchMoviesByGenre();
//   }, [genreIds, currentPage]);

//   const handlePageChange = (page: number) => {
//     router.push(`/genre/${genreIds}?page=${page}`);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">
//         Selected Genre: <span className="text-blue-600">{genreIds}</span>
//       </h2>

//       {loading ? (
//         <Loader />
//       ) : movies.length === 0 ? (
//         <p className="text-gray-500">No movies found for this genre.</p>
//       ) : (
//         <>
//           <Genre movies={movies} />
//           <Pagination
//             currentPage={currentPage}
//             totalCount={totalResults}
//             pageSize={20}
//             onPageChange={handlePageChange}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default GenrePage;
