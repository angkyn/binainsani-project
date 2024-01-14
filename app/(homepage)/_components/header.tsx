"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";

export const Header: React.FC = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();

  const scrollYPos = () => {
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollYPos);

    // remove event
    return () => {
      window.removeEventListener("scroll", scrollYPos);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "py-4 bg-white opacity-95 shadow-lg" : "py-6"
      } sticky top-0 w-full h-16 bg-white flex items-center z-20
      ${pathname === "/" && "bg-[#fef9f5"}
      `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6 ">
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {/* TODO : Login */}
            <div className="lg:hidden ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
