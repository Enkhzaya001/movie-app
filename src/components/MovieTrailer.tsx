"use client";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { getMovieTrailer } from "@/Hooks/GetMovieTrailer";

interface TrailerPlayerProps {
  id: string;
}

export const TrailerPlayer = ({ id }: TrailerPlayerProps) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  useEffect(() => {
    const fetchTrailer = async () => {
      const data = await getMovieTrailer(id);
      const trailer = data.results.find(
        (vid: any) =>
          vid.site === "YouTube" && vid.type.toLowerCase().startsWith("trailer")
      );
      if (trailer) setTrailerKey(trailer.key);
      else console.log("Trailer not found");
      console.log(trailer);
    };

    fetchTrailer();
  }, [id]);

  if (!trailerKey) return <p>No trailer available.</p>;

  return (
    <div className="relative w-[450px] h-[300px]  mx-auto rounded-md overflow-hidden">
      {/* YouTube player (no background!) */}
      <div className="absolute   top-0 left-0 w-full h-full flex items-center justify-center z-5 sm:bg-black/60">
        <YouTube
          videoId={trailerKey}
          opts={{
            width: "400",
            height: "250",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
    </div>
  );
};
