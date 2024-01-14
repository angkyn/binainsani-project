"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// component
import { AchievementCard } from "../../../components/achievementCard";
import { SectionTitle } from "@/components/section-title";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SheetDemo } from "./sheeeet";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: "dirt truth hit progress upper fierce step struck arrangement",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Solastice Website",
    description: "yes gasoline double seven choose pack contain ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Lumina Website",
    description: "additional help afraid enter represent pictured mail ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nova Website",
    description: "hill certain frame mean trunk fence new spread yesterday",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Evolne Website",
    description: "down sport in her team he drawn another train smile",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Envision Website",
    description: "special ranch star sudden species respect center me small",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Zenite Website",
    description:
      "nails earlier combination copper moment refer massage at strip",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Serenity Website",
    description: "round wagon sentence lion biggest nearest constantly",
    link: "/",
    github: "/",
  },
];

export const Achievement = () => {
  return (
    <section className="relative py-12 xl:py-24 h-auto">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col xl:flex-row">
          <div className="text-center xl:text-left w-auto">
            <SectionTitle
              title="Achievement"
              className="mx-auto mb-8 xl:mb-16 xl:mx-0"
            />
            <p className="mx-auto max-w-lg xl:max-w-xs mb-8 xl:mx-0 xl:mb-8 font-light text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.a
              fasfasfasdfasf safsfsafasfaadfa fdasdfadfasdf asfdafasf dafdasfdas
              fdasdfasfddasd faafdaaaaadfafdasf dasfasfafasdfas
            </p>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
            <SheetDemo/>
          </div>
          {/* slider */}
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
