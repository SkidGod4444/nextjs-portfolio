import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "../ui/AnimatedGrid";
import { TextGenerateEffect } from "../ui/TextGen";

const BlogsHero = () => {
  return (
    <div className="flex justify-center relative my-5 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <div className="text-4xl text-center font-bold md:text-5xl lg:text-6xl py-20 mx-auto">
          <h1 className="heading whitespace-nowrap">My Blogs</h1>
          <TextGenerateEffect
            words="I love to express my thoughts through writings. Here are some of my
            blogs."
            className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl"
          />
        </div>
      </div>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default BlogsHero;
