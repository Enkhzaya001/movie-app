"use client";
import { getFilteredGenre } from "@/Hooks/GetFilteredGenre";
import { Genre } from "./_components/Genre";
import { useState, useEffect } from "react";
import { Movie } from "@/_Components/MovieDetail";
import { useParams } from "next/navigation";

const GenrePage = () => {
  // const { id } = await params;
  const params = useParams();
  const id = params.id;

  const [movies, setMovies] = useState<Movie[]>([]);
  const page = 1;
  console.log(movies, "lop");
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const res = await getFilteredGenre(id?.toString(), page);
      console.log(res, "kino");
      setMovies(res.results);
    };

    fetchMoviesByGenre();
  }, [id]);

  return (
    <>
      <Genre movies={movies} id={id?.toString()} />
    </>
  );
};

export default GenrePage;
