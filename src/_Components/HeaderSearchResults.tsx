import { Movie } from "./MovieDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MovieTitle } from "./MovieTitle";
import Link from "next/link";
import { MenuList } from "./Menulist";
import { SearchByGenre } from "./SearchByGenre";

interface PropsType {
  searchResult: Movie[];
  search: string | null;
}
export const HeaderSearchResults = ({ searchResult, search }: PropsType) => {
  const router = useRouter();
  const MovieDetailHandler = (path: string) => {
    router.push(path);
  };
  const result = searchResult.slice(0, 5);
  console.log(result);

  return (
    <div className="md:flex  gap-20">
      <div>
        <div className=" items-center justify-between p-2">
          <p className="text-xl font-semibold">Search result </p>
          <p className="text-[20px]">
            {result.length} result for "{search}"{" "}
          </p>
        </div>
        <div className="hidden   gap-10  md:grid  md:grid-cols-5">
          {result ? (
            result.map((el, index) => (
              <div key={index}>
                <div className="flex wrap">
                  <Link href={`/details/${el.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                      alt=""
                      width={290}
                      height={320}
                      className="rounded-t-lg h-[150px] w-[180px]"
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
          {result ? (
            result.map((el, index) => (
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
      <div>
        <SearchByGenre />
      </div>
    </div>
  );
};
