"use client";
import Image from "next/image";
import { MovieTitle } from "./MovieTitle";
import { Movie } from "./MovieDetail";
import Link from "next/link";
interface SimilarMovieProps {
  similarMovieSeeMore: Movie[];
}

export const DetailMovieSeeMore = ({
  similarMovieSeeMore,
}: SimilarMovieProps) => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between p-2">
        <p className="text-xl font-semibold">More like this </p>
      </div>
      <div className="hidden   gap-10  md:grid  md:grid-cols-5">
        {similarMovieSeeMore ? (
          similarMovieSeeMore.map((el, index) => (
            <div key={index}>
              <div>
                <Link href={`/details/${el.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    alt=""
                    width={290}
                    height={320}
                    className="rounded-t-lg h-[250px] w-[290px]"
                  />
                </Link>
              </div>
              <MovieTitle title={el.original_title} vote={el.vote_average} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </div>
      <div className=" md:hidden gap-10 grid grid-cols-2">
        {similarMovieSeeMore ? (
          similarMovieSeeMore.map((el, index) => (
            <div key={index}>
              <div>
                <Link href={`/detail/${el.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    alt=""
                    width={290}
                    height={320}
                    className="rounded-t-lg h-[250px] w-[290px]"
                  />
                </Link>
              </div>
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
