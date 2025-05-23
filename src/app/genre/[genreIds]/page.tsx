"use client";
import { getFilteredGenre } from "@/Hooks/GetFilteredGenre";
import { Genre } from "./_components/Genre";
import { useState, useEffect } from "react";
import { Movie } from "@/_Components/MovieDetail";

interface PageProps {
  params: {
    genreIds: string;
  };
}
const GenrePage = ({ params }: PageProps) => {
  const { genreIds } = params;
  const [movies, setMovies] = useState<Movie[]>([]);
  const page = 1;

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const res = await getFilteredGenre(genreIds, page);
      console.log("Fetched movies: ", res);
      setMovies(res.results);
    };

    fetchMoviesByGenre();
  }, [genreIds]);

  return (
    <>
      <Genre movies={movies} id={genreIds} />
    </>
  );
};

export default GenrePage;
