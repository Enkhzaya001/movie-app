import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { title } from "process";

type PropsType = {
  title: string;
  vote: number;
  view: string;
  setShowTrailer: Dispatch<SetStateAction<boolean>>;
};

export const MobileNowPlay = ({
  title,
  vote,
  view,
  setShowTrailer,
}: PropsType) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  return (
    <div className={`relative md:hidden  w-full  text-left text-white p-3`}>
      <div className="flex justify-between">
        <div>
          <p
            className={`text-[20px] ${
              isDarkThemActive ? "text-white" : "text-black"
            } `}
          >
            Now playing:
          </p>
          <p
            className={`text-[36px] ${
              isDarkThemActive ? "text-white" : "text-black"
            }`}
          >
            {title}
          </p>
        </div>
        <div className="flex items-center">
          <Image src={"/star.png"} alt="star" width={28} height={28} />
          <p className="p-1">{Math.floor(vote)}/10</p>
        </div>
      </div>
      <p
        className={`${
          isDarkThemActive ? "text-white" : "text-black"
        } line-clamp-3 `}
      >
        {view}
      </p>
      <Button
        onClick={() => setShowTrailer(true)}
        className={`${
          isDarkThemActive
            ? "bg-[#353839] text-white"
            : "bg-[#F3F4F6] text-black"
        }  mt-[10px] cursor-pointer`}
        variant={"outline"}
      >
        <Play /> Watch Trailer
      </Button>
    </div>
  );
};
