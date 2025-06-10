"use client";
import { getFilteredGenre } from "@/Hooks/GetFilteredGenre";
import { Genre } from "./_components/Genre";
import { useState, useEffect } from "react";
import { Movie } from "@/_Components/MovieDetail";

type PageParams = {
  params: Promise<{
    id: string;
  }>;
};
const GenrePage = async ({ params }: PageParams) => {
  const { id } = await params;
  const [movies, setMovies] = useState<Movie[]>([]);
  const page = 1;

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const res = await getFilteredGenre(id, page);
      console.log("Fetched movies: ", res);
      setMovies(res.results);
    };

    fetchMoviesByGenre();
  }, [id]);

  return (
    <>
      <Genre movies={movies} id={id} />
    </>
  );
};

export default GenrePage;
