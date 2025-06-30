"use client";
import { getMovieSearchdApi } from "@/Hooks/GetMovieSearch";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { HeaderSearchResults } from "@/_Components/HeaderSearchResults";

export function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [searchResult, setSearchResult] = useState<any>([]);
  useEffect(() => {
    const fetchWeather = async () => {
      if (!search) return;
      const result = await getMovieSearchdApi(search, "1");
      setSearchResult(result.results);
      console.log(searchResult, "hppp");
    };
    fetchWeather();
  }, [search]);

  return (
    <div>
      <HeaderSearchResults searchResult={searchResult} search={search} />
    </div>
  );
}
