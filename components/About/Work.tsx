import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordian";
import AnimatedShinyText from "../ui/shiny-text";
import BoxReveal from "../ui/BoxReveal";

const AboutWorkExp = () => {
  return (
    <div className="text-start text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5">
      <h1 className="heading">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-400 before:dark:bg-indigo-500 relative inline-block">
          <span className="relative head-text text-white">Work</span>{" "}
        </span>{" "}
        Experience
      </h1>
      <div className="relative flex w-full h-full flex-col items-start overflow-hidden mt-5">
        
      </div>
    </div>
  );
};

export default AboutWorkExp;
