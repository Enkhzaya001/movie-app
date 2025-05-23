// "use client";
// import { useState, useEffect } from "react";
// import { MovieDetail } from "@/_Components/MovieDetail";
// import { getMovieDetailApi } from "@/Hooks/GetMovieDetailApi";

// export interface Props {
//   id: string;
// }

// export const ClientDetail = ({ id }: Props) => {
//   const [movieDetails, setMovieDetails] = useState([]);

//   useEffect(() => {
//     const fetchAllMovies = async () => {
//       const response = await getMovieDetailApi(id);
//       setMovieDetails(response?.results);
//     };
//     fetchAllMovies();
//   }, [id]);
//   return (
//     <div>
//       <MovieDetail id={id} movieDetails={movieDetails} />
//     </div>
//   );
// };
