"use client";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getHeroApi } from "@/Hooks/GetHeroApi";
import { NowPlay } from "./NowPlay";
import { MobileNowPlay } from "./mobileNowPlay";
import { TrailerPlayer } from "@/components/MovieTrailer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type UpcomingMovies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  vote_average: number;
};

export function CarouselBtn() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [getHero, setGetHero] = useState<UpcomingMovies[]>([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const nowPlaying = async () => {
      setIsLoading(true);
      const response = await getHeroApi();
      const firstFive = response?.results.splice(0, 5);
      setGetHero(firstFive);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    nowPlaying();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-[20px] w-full h-[600px]">
      <Carousel
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full h-[600px]"
      >
        <CarouselContent>
          {getHero.map((el, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col md:flex md:items-center md:justify-center"
            >
              <div className="relative w-full h-[375px] md:h-[600px] p-0">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt="carouselImage"
                  fill
                  objectFit="cover"
                />
                <NowPlay
                  setShowTrailer={setShowTrailer}
                  title={el.title}
                  vote={el.vote_average}
                  view={el.overview}
                />
                {showTrailer && (
                  <div className="absolute w-full h-full z-10 bg-black bg-opacity-90 flex items-center justify-center rounded-xl">
                    <div>
                      <button
                        onClick={() => setShowTrailer(false)}
                        className="absolute top-2 right-2 text-white text-xl"
                      >
                        ✕
                      </button>
                      <TrailerPlayer id={el.id.toString()} />
                    </div>
                  </div>
                )}
              </div>
              <div className="relative flex space-between pl-1">
                <MobileNowPlay
                  setShowTrailer={setShowTrailer}
                  title={el.title}
                  vote={el.vote_average}
                  view={el.overview}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="secondary"
          className="absolute top-1/2 left-3 z-2"
        />
        <CarouselNext
          variant="secondary"
          className="absolute top-1/2 right-3 z-2"
        />
      </Carousel>
    </div>
  );
}

export default function Loader() {
  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-full h-[600px] bg-gray-300 rounded-lg animate-pulse mb-8"></div>
    </div>
  );
}
