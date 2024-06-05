import React from "react";
import { HeroHighlight, Highlight } from "../ui/HeroHighlight";
import AnimatedShinyText from "../ui/shiny-text";
import DotPattern from "../ui/DotPattern";
import { cn } from "@/lib/utils";

const AboutHero = () => {
  return (
    <div className="flex justify-center relative my-5 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <div className="text-4xl text-center font-bold md:text-5xl lg:text-6xl py-20 mx-auto">
          <h1 className="heading whitespace-nowrap">Who is this guy?</h1>
          <span className="text-center font-semibold md:text-xl text-neutral-500 text-base">
        Hii, I&apos;m {" "}
        <Highlight className="text-white mx-1">
            Saidev Dhal
        </Highlight>
            you can call me {" "}
        <Highlight className="text-white mx-1">
            Dev
        </Highlight>
        . 
      </span>
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
};

export default AboutHero;
