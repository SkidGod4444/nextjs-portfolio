import React from "react";
import { TextGenerateEffect } from "../ui/TextGen";
import { BackgroundBeams } from "../ui/BgBeams";
import GridPattern from "../ui/AnimatedGrid";
import { cn } from "@/lib/utils";

const ProjectsHero = () => {
  return (
    <div className="flex justify-center relative my-5 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <div className="text-4xl text-center font-bold md:text-5xl lg:text-6xl py-20 mx-auto">
          <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl heading whitespace-nowrap shadow-lg">
            My Projects
          </h1>
          <TextGenerateEffect
            words="Some cool stuff I've built. Check them out!"
            className="mb-2 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider shadow-md"
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

export default ProjectsHero;
