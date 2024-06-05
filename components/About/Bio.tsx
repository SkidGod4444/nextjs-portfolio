import React from "react";
import BoxReveal from "../ui/BoxReveal";

const AboutBio = () => {
  return (
    <div className="text-start text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5">
      <h1 className="heading">
        <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-400 before:dark:bg-indigo-500 relative inline-block">
          <span className="relative head-text text-white">Short</span>{" "}
        </span>{" "}
        Intro
      </h1>
      <BoxReveal boxColor={"#5046e6"} duration={0.2}>
        <p className="text-start mt-5 font-normal md:text-xl border border-neutral-500 border-opacity-10 rounded-md text-neutral-500 text-base leading-relaxed p-3">
          Don&apos;t just take my word for it. Here&apos;s what real people are
          saying. Don&apos;t just take my word for it. Here&apos;s what real
          people are saying. Don&apos;t just take my word for it. Here&apos;s
          what real people are saying. Don&apos;t just take my word for it.
          Here&apos;s what real people are saying. Don&apos;t just take my word
          for it. Here&apos;s what real people are saying. Don&apos;t just take
          my word for it. Here&apos;s what real people are saying. Don&apos;t
          just take my word for it. Here&apos;s what real people are saying.
          Don&apos;t just take my word for it. Here&apos;s what real people are
          saying.
        </p>
      </BoxReveal>
      <div className="max-w-5xl mx-auto px-8"></div>
    </div>
  );
};

export default AboutBio;
