import { Circle } from "lucide-react";
import React from "react";

export const Dot = () => {
  return (
    <div>
      <div className="flex items-center -mt-[2px] relative">
        <Circle size={20} className="absolute z-10" />
        <Circle
          size={18}
          className="absolute bg-primary text-primary rounded-full mt-1 -ml-1"
        />
      </div>
    </div>
  );
};
