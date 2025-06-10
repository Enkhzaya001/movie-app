import { MovieDetails } from "@/_Components/MovieDetail";
import { getSimilarMovieApi } from "@/Hooks/GetSimilarMovieApi";
import { getMovieDetaildApi } from "@/Hooks/GetMovieDetailApi";
import { getTeamInfApi } from "@/Hooks/GetTeamInfApi";
import { FC } from "react";

type PageParams = {
  params: Promise<{
    id: string;
  }>;
};
const Page = async ({ params }: PageParams) => {
  const { id } = await params;
  const [similarMovie, movieDetail, teamInfo] = await Promise.all([
    getSimilarMovieApi(id),
    getMovieDetaildApi(id),
    getTeamInfApi(id),
  ]);
  const similarMovieFirst5 = similarMovie.results?.splice(0, 5);
  const similarMovieFirst2 = similarMovie.results?.splice(0, 2);
  const similarMovieAll = similarMovie.results;

  console.log(movieDetail, "detail");
  console.log(similarMovie, "similar");
  console.log(teamInfo, "team info");
  return (
    <MovieDetails
      similarMovieFirst2={similarMovieFirst2}
      similarMovieFirst5={similarMovieFirst5}
      similarMovieAll={similarMovieAll}
      movieDetail={movieDetail}
      teamInfo={teamInfo}
    />
  );
};

export default Page;
