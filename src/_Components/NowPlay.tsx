import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { title } from "process";

type PropsType = {
  title: string;
  vote: number;
  view: string;
  setShowTrailer: Dispatch<SetStateAction<boolean>>;
};

export const NowPlay = ({ title, vote, view, setShowTrailer }: PropsType) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  console.log(setShowTrailer);
  return (
    <div className=" hidden md:block absolute z-5 w-[404px] h-[264px] top-[178px] left-[140px] text-white">
      <p className="text-[20px]">Now playing:</p>
      <p className="text-[36px]">{title}</p>
      <div className="flex items-center">
        <Image src={"/star.png"} alt="star" width={28} height={28} />
        <p className="p-1">{vote.toFixed(1)}/10</p>
      </div>
      <p className="line-clamp-3 backdrop-blur-md rounded-sm">{view}</p>
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

// export const NowPlay = ({ title, vote, view }: PropsType) => {
//   const { resolvedTheme } = useTheme();
//   const isDark = resolvedTheme === "dark";

//   return (
//     <div
//       className="
//           w-full md:absolute md:top-[178px] md:left-10 md:w-[440px]
//           bg-white dark:bg-black md:bg-transparent
//           p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none
//           text-black dark:text-white
//           mt-4 md:mt-0
//         "
//     >
//       <p className="text-[16px] md:text-[20px]">Now Playing:</p>
//       <h2 className="text-[24px] md:text-[36px] font-bold">{title}</h2>

//       <div className="flex items-center mt-1">
//         <Image src="/star.png" alt="star" width={24} height={24} />
//         <p className="ml-1">{vote}/10</p>
//       </div>

//       <p className="text-sm md:text-base mt-2">{view}</p>

//       <Button
//         className={`mt-4 ${
//           isDark ? "bg-[#353839] text-white" : "bg-[#F3FAF6] text-black"
//         }`}
//         variant="outline"
//       >
//         <Play className="mr-2" /> Watch Trailer
//       </Button>
//     </div>
//   );
// };
