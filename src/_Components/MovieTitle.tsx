"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

type PropsType = {
  title: string;
  vote: number;
};

export const MovieTitle = ({ title, vote }: PropsType) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemActive = resolvedTheme === "dark";
  return (
    <div
      className={`h-[85px] w-full ${
        isDarkThemActive ? "bg-[#353839] text-white" : "bg-[#F3F4F6] text-black"
      }   rounded-b-lg `}
    >
      <div className="p-1">
        <div className="flex items-center gap-2">
          <Image src={"/star.png"} alt="star" width={16} height={18} />
          <p className="p-1">{vote.toFixed(1)}/10</p>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};
