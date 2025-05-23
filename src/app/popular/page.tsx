"use client";
import { MovieSeemore } from "@/_Components/SeemoreMovies";
import { useState, useEffect } from "react";
import { getPopularMovieApi } from "@/Hooks/GetPopularMovieApi";

const SeemorePagePopular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const popularRes = await getPopularMovieApi();
      setPopularMovies(popularRes?.results);
    };

    fetchAllMovies();
  }, []);
  return (
    <div>
      <MovieSeemore title={"Popular"} movie={popularMovies} />
    </div>
  );
};
export default SeemorePagePopular;
