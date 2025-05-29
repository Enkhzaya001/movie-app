"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MovieTitle } from "@/_Components/MovieTitle";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export type GetApiMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

type MoviesProps = {
  title: string;
  movie: GetApiMovies[];
};

export const MovieSeemore = ({ title, movie }: MoviesProps) => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";
  const router = useRouter();

  const MovieDetailHandler = (path: string) => {
    router.push(path);
  };

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(movie.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleMovies = movie.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5 mt-[20px] md:mt-[0px]">
      <div className="flex items-center justify-between p-2">
        <p className="text-[20px] font-semibold">{title}</p>
      </div>

      <div className="mt-[20px] gap-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {visibleMovies.map((el, index) => (
          <div key={index}>
            <Link href={`/details/${el.id}`}>
              <div className="relative w-full h-[300px] hover:bg-red-300">
                <Image
                  onClick={() => MovieDetailHandler(`/details/${el.id}`)}
                  src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </Link>
            <MovieTitle title={el.original_title} vote={el.vote_average} />
          </div>
        ))}
      </div>

      {/* Pagination UI */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
