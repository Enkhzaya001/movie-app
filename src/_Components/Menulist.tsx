import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const MenuList = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";

  const nav = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Romance",
    "Short",
    "Sport",
    "Talk-show",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div
      className={`  w-[377px] md:w-[400px]  top-10 rounded-lg p-1 ${
        isDarkThemActive ? "bg-[#353839] text-white" : "bg-[#F3F4F6] text-black"
      }   absolute z-10 `}
    >
      <div className="p-5">
        <p className="font-semibold text-[24px]">Genre</p>
        <p>See list of movies by genre </p>
      </div>
      <div className="flex gap-3 w-full flex-wrap">
        {nav.map((el, index) => (
          <div key={index}>
            <Button className="h-[25px]">
              {el} <ChevronRight />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
