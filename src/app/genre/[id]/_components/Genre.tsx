"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Movie } from "@/_Components/MovieDetail";
import { getSearchByGenre } from "@/Hooks/GetSearchByGenre";

type MovieProps = {
  movies: Movie[];
  id?: string;
};
interface Genre {
  id: number;
  name: string;
}
export const Genre = ({ movies, id }: MovieProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const genre = await getSearchByGenre();
      setGenres(genre.genres);
    };
    fetchGenres();
  }, []);

  const genreName = genres?.find((el) => el.id === Number(id));
  console.log(movies, "kee");

  return (
    <div className="p-4 md:flex">
      <div>
        <h2 className="text-xl font-bold mb-2">Search by genre</h2>
        <p className="mb-4 text-gray-600">See lists of movies by genre</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {genres.map((genre) => (
            <Link href={`/genre/${genre.id}`}>
              <button
                key={genre.id}
                className="px-3 py-1 border rounded-full hover:bg-gray-200"
              >
                {genre.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className=" text-[20px] h-[40px] p-2">
          {movies.length} title's in "{genreName?.name}"
        </div>
        <div className=" grid grid-cols-2  md:grid-cols-4 gap-4">
          {movies.slice(0, 10).map((movie) => (
            <div key={movie.id} className="shadow-md p-2">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
              <p className="mt-2 font-semibold">{movie.title}</p>
              <p className="text-sm text-gray-500">
                ⭐ {movie.vote_average.toFixed(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
