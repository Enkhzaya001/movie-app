"use client";
import { MovieSeemore } from "@/_Components/SeemoreMovies";
import { useState, useEffect } from "react";
import { getUpcomingApi } from "@/Hooks/GetUpcomingApi";
import { getPopularMovieApi } from "@/Hooks/GetPopularMovieApi";
import { getRatedApi } from "@/Hooks/GetRatedApi";

const SeemorePageTopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const topRatedRes = await getRatedApi();
      setTopRatedMovies(topRatedRes?.results);
    };

    fetchAllMovies();
  }, []);
  return (
    <div>
      <MovieSeemore title={"Top Rated"} movie={topRatedMovies} />
      {/* <MovieSeemore title={"Popular"} movie={popularMovies} />
      <MovieSeemore title={"Top Rated"} movie={topRatedMovies} /> */}
    </div>
  );
};
export default SeemorePageTopRated;
