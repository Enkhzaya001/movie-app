import { DetailMovieSeeMore } from "@/_Components/DetailMovieSeeMore";
import { getSimilarMovieApi } from "@/Hooks/GetSimilarMovieApi";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const similarMovie = await getSimilarMovieApi(id);

  const similarMovieSeeMore = similarMovie.results;

  console.log(similarMovie, "similar hi");

  return <DetailMovieSeeMore similarMovieSeeMore={similarMovieSeeMore} />;
};

export default DetailPage;
