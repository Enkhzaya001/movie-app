"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { PhoneGenre } from "./PhoneGenre";
import { Film, Moon, Search, ChevronDown, Sun } from "lucide-react";
import Link from "next/link";
import { getMovieSearchdApi } from "@/Hooks/GetMovieSearch";
import { SearchResult } from "./SearchResult";
import { Loader } from "lucide-react";
import { SearchByGenre } from "./SearchByGenre";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  const [isOpenGenre, setIsOpenGenre] = useState<boolean>(false);
  const [phoneGenreSearch, setPhoneGenreSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const result = await getMovieSearchdApi(search, "1");
      setSearchResult(result.results);
      console.log(searchResult, "hppp");
    };
    fetchWeather();
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [search]);

  const handleClick = () => {
    setIsOpenGenre(!isOpenGenre);
  };

  const handleSearch = () => {
    setPhoneGenreSearch(!phoneGenreSearch);
  };

  const toggleTheme = () => setTheme(isDarkThemActive ? "light" : "dark");

  return (
    <div
      className={`md:w-full h-[36px]  p-2 flex m-auto mt-[12px]  items-center ${
        !phoneGenreSearch ? "justify-between" : "justify-center"
      } md:justify-between gap-[5px]`}
    >
      <Link href={"/"}>
        <div className={`flex gap-2 ${phoneGenreSearch && "hidden"} md:flex`}>
          <Film color={"#4338CA"} />
          <p className="text-[#4338CA] font-bold italic">Movie Z</p>
        </div>
      </Link>
      <div className="flex gap-[12px] h-[36px] items-center relative">
        <Button
          onClick={handleClick}
          className="hidden md:flex h-[30px] border border-[#90a4ae]"
          variant={"outline"}
        >
          <ChevronDown />
          <p>Genre</p>
        </Button>
        <div className="absolute z-1 mt-[400px]">
          {isOpenGenre && !search && (
            <SearchByGenre
              handleClick={handleClick}
              setIsOpenGenre={setIsOpenGenre}
              isOpenGenre={isOpenGenre}
            />
          )}
        </div>
        <div className="relative">
          <Input
            value={search}
            onChange={searchHandle}
            placeholder="Search"
            className="hidden md:flex w-[379px] h-[30px] outline-none px-[30px] border border-[#90a4ae]"
          />

          <div className=" absolute z-10 mt-2">
            {loading ? (
              <div className=" flex w-[400px] h-[95px] bg-[#f3f4f6] justify-center items-center p-4 rounded-xs">
                <Loading />
              </div>
            ) : (
              search &&
              searchResult.length != 0 && (
                <SearchResult
                  searchResult={searchResult}
                  search={search}
                  setSearch={setSearch}
                />
              )
            )}
            {!loading && search && searchResult.length === 0 && (
              <p
                className={`w-[400px] h-[95px]  flex items-center justify-center rounded-xs ${
                  isDarkThemActive
                    ? "bg-[#353839] text-white"
                    : "bg-[#F3F4F6] text-black"
                } `}
              >
                No results found.
              </p>
            )}
          </div>
        </div>
        <Search
          size={22}
          color={"#90a4ae"}
          className="hidden md:flex absolute ml-[105px] p-1"
        />
      </div>
      <div className={`flex relative `}>
        <Search
          onClick={handleSearch}
          size={22}
          color={"#90a4ae"}
          className={`flex md:hidden absolute right-[50px] bg-white rounded-sm w-[36px] h-[36px] border border-[#F3F4F6] p-2 ${
            phoneGenreSearch ? "hidden" : "flex"
          }`}
        />
        {phoneGenreSearch && (
          <PhoneGenre
            setSearch={setSearch}
            searchResult={searchResult}
            search={search}
            searchHandle={searchHandle}
            setPhoneGenreSearch={setPhoneGenreSearch}
            phoneGenreSearch={phoneGenreSearch}
          />
        )}
        <Button
          onClick={toggleTheme}
          className={`bg-white flex w-[36px] h-[36px] rounded-sm ${
            phoneGenreSearch && "hidden"
          } md:flex`}
          variant={"outline"}
        >
          {isDarkThemActive ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="animate-spin text-[#4338CA]">
      <Loader size={32} />
    </div>
  );
};
