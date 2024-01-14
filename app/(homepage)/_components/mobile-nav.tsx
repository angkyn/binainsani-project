import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import React from "react";
import { Logo } from "./logo";
import { Nav } from "./nav";
import Socials from "./socials";
import { Button } from "@/components/ui/button";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <Nav containerStyles="flex flex-col items-center gap-y-6 my-auto" />
        <SheetFooter className="mx-auto">
          <SheetClose asChild>
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
