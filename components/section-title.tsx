import React from 'react'
import { Dot } from './dot';

interface SectionTitleProps{
  title: string
  className:string
}

export const SectionTitle = ({title,className}:SectionTitleProps) => {
  return (
    <div className={`w-max ${className}`}>
      <h2 className="text-4xl font-bold flex items-center gap-x-7">
        <Dot />
        {title}
      </h2>
    </div>
  );
}
