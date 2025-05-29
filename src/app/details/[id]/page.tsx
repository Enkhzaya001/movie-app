import { MovieDetails } from "@/_Components/MovieDetail";
import { getSimilarMovieApi } from "@/Hooks/GetSimilarMovieApi";
import { getMovieDetaildApi } from "@/Hooks/GetMovieDetailApi";
import { getMovieTrailer } from "@/Hooks/GetMovieTrailer";
import { getTeamInfApi } from "@/Hooks/GetTeamInfApi";

interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = params;
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

export default DetailPage;
