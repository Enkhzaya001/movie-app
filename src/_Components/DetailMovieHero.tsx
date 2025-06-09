"use client";
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { Movie } from "./MovieDetail";
import { TrailerPlayer } from "@/_Components/MovieTrailer";

interface DetailHeroProps {
  movieDetail: Movie;
}
export const DetailMovieHero = ({ movieDetail }: DetailHeroProps) => {
  const [showTrailer, setShowTrailer] = useState(false);
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <p className="text-2xl font-semibold">{movieDetail.original_title}</p>
          <p>{movieDetail.release_date}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Rating</p>
          <div className="flex justify-center items-center">
            <Image
              src={"/star.png"}
              alt="star"
              width={12}
              height={5}
              className="w-[20px] h-[20px]"
            />
            <p className="p-1">{movieDetail.vote_average.toFixed(1)}/10</p>
          </div>
          <p className="text-gray-500 relative left-[40px] bottom-[10px]">
            37k
          </p>
        </div>
      </div>
      <div className="flex gap-15 relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          alt=""
          width={290}
          height={428}
          className={`hidden md:block rounded-xl  md:${
            showTrailer ? "hidden" : "w-1/3"
          }`}
        />
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt=""
            width={760}
            height={420}
            className={` relative rounded-xl h-full  ${
              showTrailer && "w-full"
            }`}
          />
          <button
            onClick={() => setShowTrailer(true)}
            className="absolute bottom-4  text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer "
          >
            <Play
              color={"black"}
              className="bg-white rounded-full p-1 w-[30px] h-[30px]"
            />
            Play trailer
          </button>
          {showTrailer && (
            <div className="absolute w-full h-full  top-0 z-10 bg-black bg-opacity-90 flex items-center justify-center rounded-xl">
              <div>
                <button
                  onClick={() => setShowTrailer(false)}
                  className="absolute z-10 top-2 right-2 text-white text-xl"
                >
                  ✕
                </button>
                <TrailerPlayer id={movieDetail.id.toString()} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
