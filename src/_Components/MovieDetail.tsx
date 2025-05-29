"use client";
import { DetailMovieHero } from "./DetailMovieHero";
import { DetailMovieInfo } from "./DetailMovieInfo";
import { MovieDetailSimilar } from "./MovieDetailSimilar";
import { useState, useEffect } from "react";
import { MovieDetailsSkeleton } from "./DetailLoader";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  genres: Genre[];
  release_date: number;
  overview: string;
  cast: { name: string }[];
  crew: { name: string; job: string; department: string }[];
}
export interface Genre {
  id: number;
  name: string;
}
interface DetailProps {
  similarMovieFirst2: Movie[];
  similarMovieFirst5: Movie[];
  similarMovieAll: Movie[];
  movieDetail: Movie;
  teamInfo: Movie;
}

export const MovieDetails = ({
  similarMovieFirst5,
  similarMovieFirst2,
  similarMovieAll,
  movieDetail,
  teamInfo,
}: DetailProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieDetail && movieDetail.id && teamInfo) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [movieDetail, teamInfo]);

  if (loading) {
    return <MovieDetailsSkeleton />;
  }

  return (
    <div className="md:ml-[180px] md:mr-[180px] m-[20px]">
      <DetailMovieHero movieDetail={movieDetail} />
      <DetailMovieInfo movieDetail={movieDetail} teamInfo={teamInfo} />
      <MovieDetailSimilar
        similarMovieAll={similarMovieAll}
        similarMovieFirst5={similarMovieFirst5}
        similarMovieFirst2={similarMovieFirst2}
        movieId={movieDetail.id.toString()}
      />
    </div>
  );
};

// const isLoading =
//     !movieDetail ||
//     !movieDetail.id ||
//     !teamInfo ||
//     similarMovieAll.length === 0;

//   if (isLoading) {
//     return <DetailLoading />;
//   }
