import { DetailMovieSeeMore } from "@/_Components/DetailMovieSeeMore";
import { getSimilarMovieApi } from "@/Hooks/GetSimilarMovieApi";

interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = params;
  const similarMovie = await getSimilarMovieApi(id);

  const similarMovieSeeMore = similarMovie.results;

  console.log(similarMovie, "similar hi");

  return <DetailMovieSeeMore similarMovieSeeMore={similarMovieSeeMore} />;
};

export default DetailPage;
