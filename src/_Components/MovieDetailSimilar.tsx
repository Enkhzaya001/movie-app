"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MovieTitle } from "./MovieTitle";
import { Movie } from "./MovieDetail";
import Link from "next/link";

interface SimilarMovieProps {
  similarMovieFirst5: Movie[];
  similarMovieFirst2: Movie[];
  similarMovieAll: Movie[];
  movieId: string;
}
export const MovieDetailSimilar = ({
  similarMovieFirst5,
  similarMovieFirst2,
  similarMovieAll,
  movieId,
}: SimilarMovieProps) => {
  console.log(similarMovieAll, "hariu");
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <p className="text-xl font-semibold">More like this </p>
        <Link href={`/seemore/${movieId}`}>
          <Button
            className={`bg-white text-black border-none ${
              isDarkThemActive
                ? "bg-[#353839] text-white"
                : "bg-[#F3F4F6] text-black"
            }  mt-[5px] cursor-pointer`}
            variant={"outline"}
          >
            see more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="hidden md:block md:flex md:gap-10  grid  md:grid-cols-5">
        {similarMovieFirst5 ? (
          similarMovieFirst5.map((el, index) => (
            <div key={index}>
              <Link href={`/details/${el.id}`}>
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    alt=""
                    width={290}
                    height={320}
                    className="rounded-t-lg h-[250px] w-[290px]"
                  />
                </div>
              </Link>
              <MovieTitle title={el.original_title} vote={el.vote_average} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </div>
      <div className=" md:hidden flex gap-10 grid grid-cols-2">
        {similarMovieFirst2 ? (
          similarMovieFirst2.map((el, index) => (
            <div key={index}>
              <Link href={`/details/${el.id}`}>
                <div>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    alt=""
                    width={290}
                    height={320}
                    className="rounded-t-lg h-[250px] w-[290px]"
                  />
                </div>
              </Link>
              <MovieTitle title={el.original_title} vote={el.vote_average} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};
