"use client";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";

interface AirBubbleProps {
  containerStyles: string;
  icon?: any;
  endCountNum?: any;
  endCountText?: string;
  badgeText?: string;
  numContainerStyles?:string
}

export const AirBubble = ({
  badgeText,
  containerStyles,
  endCountNum,
  endCountText,
  icon,
  numContainerStyles
}: AirBubbleProps) => {
  return (
    <Badge 
      variant="secondary"
      className={`z-10 w-auto h-16 bg-white shadow-2xl p-4 rounded-2xl flex items-center gap-x-4 justify-center ${containerStyles}`}
    >
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div
          className={`text-4xl leading-none font-bold text-primary ${numContainerStyles}`}
        >
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-24 leading-none text-base text-black font-medium">
          {badgeText}
        </div>
      </div>
    </Badge>
  );
};
