"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MovieTitle } from "./MovieTitle";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import path from "path";
import Link from "next/link";

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
export const MovieList = ({ title, movie }: MoviesProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  const router = useRouter();
  const MovieDetailHandler = (path: string) => {
    router.push(path);
  };
  return (
    <div className="p-5 mt-[20px] md:mt-[0px]">
      <div className="flex items-center justify-between p-2">
        <p className="text-[20px] font-semibold">{title}</p>
        <Link href={title.toLowerCase()}>
          <Button
            className={`bg-white text-black border-none ${
              isDarkThemActive
                ? "bg-[#353839] text-white"
                : "bg-[#F3F4F6] text-black"
            }  mt-[10px] cursor-pointer`}
            variant={"outline"}
          >
            see more <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="mt-[20px] flex gap-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movie.map((el, index) => (
          <div key={index}>
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
            <MovieTitle title={el.original_title} vote={el.vote_average} />
          </div>
        ))}
      </div>
    </div>
  );
};
