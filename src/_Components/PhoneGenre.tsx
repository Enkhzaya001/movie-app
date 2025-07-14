import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Dispatch } from "react";
import { Movie } from "./MovieDetail";
import { SearchResult } from "./SearchResult";
import { SearchByGenre } from "./SearchByGenre";

type PhoneGenreProps = {
  setPhoneGenreSearch: Dispatch<boolean>;
  phoneGenreSearch: boolean;
  search: string;
  setSearch: Dispatch<string>;
  searchResult: Movie[];
  searchHandle: (_event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PhoneGenre = ({
  setPhoneGenreSearch,
  phoneGenreSearch,
  searchHandle,
  search,
  setSearch,
  searchResult,
}: PhoneGenreProps) => {
  const clickHandle = () => {
    setSearch("");
    setPhoneGenreSearch(!phoneGenreSearch);
  };
  const [isOpenGenre, setIsOpenGenre] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpenGenre(!isOpenGenre);
  };
  console.log(search, "phone");
  return (
    <div className="flex  md:hidden  items-center justify-center ">
      <div className="flex justify-center items-center  w-full h-[44px] relative gap-5 sm:flex md:hidden ">
        <Button
          className="bg-white h-[30px]"
          variant={"outline"}
          onClick={handleClick}
        >
          <ChevronDown />
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
            className="  h-[30px] outline-none px-[30px] border border-none relative"
          />
          <Search
            size={22}
            color={"#90a4ae"}
            className=" absolute bottom-[5px] p-1 z-10"
          />
          <div className="flex absolute  justify-center  ml-[20px] z-10">
            {search && searchResult.length != 0 && (
              <SearchResult
                setSearch={setSearch}
                search={search}
                searchResult={searchResult}
              />
            )}
          </div>
        </div>

        <div>
          <Button
            className="border border-none h-[30px]"
            variant={"outline"}
            onClick={clickHandle}
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
