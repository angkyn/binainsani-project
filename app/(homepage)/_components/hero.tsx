import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { BellDot, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./socials";
import Image from "next/image";
import { AirBubble } from "../../../components/air-bubble";

export const Hero = () => {
  return (
    <section className="-mt-16 bg-hero bg-no-repeat bg-bottom bg-cover h-svh flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* text */}
          <div className="flex flex-col justify-center text-center mx-auto xl:mx-0 xl:text-left max-w-xl">
            <div className="text-sm uppercase font-semibold mb-4 tracking-[20px] xl:tracking-[10px] text-primary">
              welcome to
            </div>
            <h1 className="text-6xl xl:text-7xl xl:leading-[5rem]  font-bold  mb-4 ">
              Bina Insani Boarding School
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto xl:mx-0 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              laboriosam placeat sequi magni et!
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8">
              <Link href="/">
                <Button className="rounded-full gap-x-2">
                  Our Contact <Send size={18} />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" className="rounded-full gap-x-2">
                  Announcement <BellDot size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* illustration */}
          <div className="hidden xl:flex relative right-10">
            {/* badge 1 */}
            <AirBubble
              containerStyles=" absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={14}
              numContainerStyles="w-10"
              badgeText="Teacher"
            />
            {/* badge 2 */}
            <AirBubble
              containerStyles="absolute  top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={666}
              endCountText=""
              badgeText="Achievement"
              numContainerStyles="w-16"
            />
            {/* badge 3 */}
            <AirBubble
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              numContainerStyles="w-10"
              endCountText="k"
              badgeText="Student"
            />
            <Image
              src="/hero/study-online.svg"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
