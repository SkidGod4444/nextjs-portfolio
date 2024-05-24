import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/Typewriter";
import JadooyiButton from "./ui/JadooyiButton";
import { CircleArrowDown } from "lucide-react";
import { TextGenerateEffect } from "./ui/TextGen";
import { SparklesEffect } from "./ui/Sparkles";

const words = [
  {
    text: "Transforming",
  },
  {
    text: "Ideas",
  },
  {
    text: "into",
  },
  {
    text: "Cool",
  },
  {
    text: "&",
  },
  {
    text: "Creative",
  },
  {
    text: "Products.",
    className: "text-blue-600 dark:text-indigo-500",
  },
];

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:left-32 md:top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="w-full absolute inset-0 h-screen">
        <SparklesEffect
          id="particles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TypewriterEffect
            words={words}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <TextGenerateEffect
            words="Hey! I'm Saidev Dhal, a Technophile based in India."
            className="text-center md:tracking-wider mb-2 mt-4 text-sm md:text-lg lg:text-2xl"
          />
          <a href="/resume">
            <JadooyiButton
              title="Download Resume"
              position="left"
              icon={<CircleArrowDown />}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
