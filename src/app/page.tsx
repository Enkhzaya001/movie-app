"use client";
import { CarouselBtn } from "@/_Components/CarouselBtn";
import { MovieList } from "@/_Components/MovieList";
import { Loader } from "@/_Components/Loader";
import { getUpcomingApi } from "@/Hooks/GetUpcomingApi";
import { getPopularMovieApi } from "@/Hooks/GetPopularMovieApi";
import { getRatedApi } from "@/Hooks/GetRatedApi";
import { useState, useEffect } from "react";
import { MovieSeemore } from "@/_Components/SeemoreMovies";
import { MovieDetailsSkeleton } from "@/_Components/DetailLoader";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const [popularRes, upcomingRes, topRatedRes] = await Promise.all([
        getPopularMovieApi(),
        getUpcomingApi(),
        getRatedApi(),
      ]);

      setPopularMovies(popularRes?.results?.slice(0, 10) || []);
      setUpcomingMovies(upcomingRes?.results?.slice(0, 10) || []);
      setTopRatedMovies(topRatedRes?.results?.slice(0, 10) || []);
    };

    fetchAllMovies();
  }, []);
  return (
    <div>
      <CarouselBtn />
      <MovieList title={"Upcoming"} movie={upcomingMovies} />
      <MovieList title={"Popular"} movie={popularMovies} />
      <MovieList title={"TopRated"} movie={topRatedMovies} />
      {/* <MovieDetailsSkeleton /> */}
      {/* <Loader /> */}
    </div>
  );
}
