"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Movie } from "./MovieDetail";
import Image from "next/image";

interface DetailMovieInfprops {
  movieDetail: Movie;
  teamInfo: Movie;
}

export const DetailMovieInfo = ({
  movieDetail,
  teamInfo,
}: DetailMovieInfprops) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";

  const director = teamInfo.crew.find(
    (c: { job: string }) => c.job === "Director"
  );
  interface WritingType {
    job: string;
    department: string;
  }
  const writers = teamInfo.crew
    .filter((el: WritingType) => el.department === "Writing")
    .map((w: { name: string }) => w.name)
    .slice(0, 3);

  const stars = teamInfo.cast
    .map((el: { name: string }) => el.name)
    .slice(0, 3);

  return (
    <div>
      <div className="flex gap-3 mt-2 ">
        <div className=" h-[150px] md:hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt=""
            width={100}
            height={100}
            className={` md:hidden rounded-xl w-full h-full`}
          />
        </div>
        <div className="w-2/3 md:w-full">
          <div className="flex gap-5 flex-wrap">
            {movieDetail.genres.map((genre, index) => (
              <div key={index}>
                <Button
                  variant={"outline"}
                  className={`h-[20px] rounded-xl ${
                    isDarkThemActive
                      ? "bg-[#353839] text-white"
                      : "bg-[#F3F4F6] text-black"
                  } `}
                >
                  {genre.name}
                </Button>
              </div>
            ))}
          </div>
          <p className="w-full mt-5">{movieDetail.overview}</p>
        </div>
      </div>

      <div className="flex gap-20 border border-b-gray-300 border-t-white border-r-white border-l-white p-1 top-5">
        <p className="text-[20px] font-semibold ">Director </p>
        <p>{director?.name} </p>
      </div>
      <div className="flex gap-21 border border-b-gray-300 border-t-white border-r-white border-l-white p-1 top-5">
        <p className="text-[20px] font-semibold ">Writers</p>
        <p>{writers} </p>
      </div>
      <div className="flex gap-25 border border-b-gray-300 border-t-white border-r-white border-l-white p-1 top-5">
        <p className="text-[20px] font-semibold ">Stars </p>
        <p>{stars} </p>
      </div>
    </div>
  );
};
