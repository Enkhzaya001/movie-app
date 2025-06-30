"use client";
import { Movie } from "./MovieDetail";
import { MovieTitle } from "./MovieTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Dispatch } from "react";

interface PropsType {
  searchResult: Movie[];
  search: string;
  setSearch: Dispatch<string>;
}
export const SearchResult = ({
  searchResult,
  search,
  setSearch,
}: PropsType) => {
  const searchResultFirst5 = searchResult.splice(0, 5);
  const searchClear = () => {
    setSearch("");
  };
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  return (
    <div
      className={` mt-[20px] w-[400px] md:w-[500px] h-full  md:mt-3 rounded-xl  ${
        isDarkThemActive ? "bg-[#353839] text-white" : "bg-[#F3F4F6] text-black"
      }  `}
    >
      {searchResultFirst5.map((result, index) => (
        <div
          key={index}
          className="flex justify-between items-center pl-2 pr-2 border border-gray-100"
        >
          <div className="flex mt-[3px] mb-[10px] gap-1">
            <div className="relative items-center w-[50px] h-[100px] md:w-[80px]">
              <Image
                src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                alt=""
                fill
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            {/* {searchResultFirst5.length===0 && 
            <p>No result </p>} */}
            <div
              className={`p-1  ${
                isDarkThemActive
                  ? "bg-[#353839] text-white"
                  : "bg-[#F3F4F6] text-black"
              } `}
            >
              <p className="font-semibold text-ml">{result.title}</p>
              <div className="flex items-center ">
                <Image src={"/star.png"} alt="star" width={15} height={15} />
                <p className="p-1">{result.vote_average.toFixed(1)}/10</p>
              </div>
              <p>{result.release_date}</p>
            </div>
          </div>
          <Link href={`/details/${result.id}`}>
            <button
              onClick={searchClear}
              className="text-black mt-[60px] gap-1 flex items-center cursor-pointer p-2 text-[15px]"
            >
              See more <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      ))}
      {searchResult.length != 0 && (
        <Link href={`/search?search=${search}`}>
          <button onClick={searchClear} className=" p-3 cursor-pointer">
            See all result for "{search}"
          </button>
        </Link>
      )}
    </div>
  );
};
