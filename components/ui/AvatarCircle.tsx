"use client";

import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  imageSrcs?: string[];
}

export default function AvatarCircles({
    numPeople,
    className,
    imageSrcs = [],
  }: AvatarCirclesProps) {
    // Ensure imageSrcs is always an array
    const validImageSrcs = Array.isArray(imageSrcs) ? imageSrcs : [];
  
    return (
      <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
        {validImageSrcs.map((src, index) => (
          <img
            key={index}
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            src={src}
            alt="icons"
          />
        ))}
        {/* <a className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
          +{numPeople}
        </a> */}
      </div>
    );
  }
