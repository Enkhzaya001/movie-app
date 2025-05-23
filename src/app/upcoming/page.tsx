"use client";
import { MovieSeemore } from "@/_Components/SeemoreMovies";
import { useState, useEffect } from "react";
import { getUpcomingApi } from "@/Hooks/GetUpcomingApi";

const SeemorePageUpcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const upcomingRes = await getUpcomingApi();
      setUpcomingMovies(upcomingRes?.results);
    };

    fetchAllMovies();
  }, []);
  return (
    <div>
      <MovieSeemore title={"Upcoming"} movie={upcomingMovies} />
    </div>
  );
};
export default SeemorePageUpcoming;
