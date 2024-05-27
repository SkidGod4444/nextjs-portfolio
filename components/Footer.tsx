import React from "react";
import JadooyiButton from "./ui/JadooyiButton";
import { Navigation } from "lucide-react";
import { BackgroundBeams } from "./ui/BgBeams";
import { links } from "@/db/fake.data";

const Footer = () => {
  return (
    <div className="w-full pt-20 relative antialiased pb-10 md:pb-15 lg:pb-15">
      <BackgroundBeams className="z-0" />
      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading text-2xl text-center font-bold md:text-4xl lg:text-6xl px-6 md:px-10 lg:px-40 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Open for collab,{" "}
          <span className="text-indigo-500">drop a message.</span> Don&apos;t
          forget to follow me on social media.
        </h1>
        <p className="text-neutral-500 text-base md:text-lg md:mt-10 my-5 text-center">
          Let&apos;s discuss how I can help you achieve your goals
        </p>
        <JadooyiButton
          title="Let's get in touch"
          position="right"
          icon={<Navigation className="w-6 h-6" />}
        />
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mt-6 relative z-10">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={links.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 text-indigo-500"
          >
            Saidev Dhal
          </a>
          . The source code is available on{" "}
          <a
            href={links.src}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 text-indigo-500"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
