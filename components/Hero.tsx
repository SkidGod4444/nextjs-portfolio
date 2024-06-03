"use client";

import React from "react";
import { TypewriterEffect } from "./ui/Typewriter";
import JadooyiButton from "./ui/JadooyiButton";
import { CircleArrowDown } from "lucide-react";
import { TextGenerateEffect } from "./ui/TextGen";
import { SparklesEffect } from "./ui/Sparkles";
import { Announcement } from "./ui/Anouncement";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { placeholders} from "@/db/fake.data";
import { PlaceholdersAndVanishInput } from "./ui/VanishInput";

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

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

const Hero = () => {
  return (
    <div className="pb-10 pt-20">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesEffect
          id="particles"
          background="transparent"
          minSize={0.6}
          maxSize={1.6}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex justify-center relative my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="mb-10">
            <Announcement />
          </div>
          <TypewriterEffect
            words={words}
            className="text-center text-[40px] mt-6 md:text-5xl lg:text-6xl "
          />

          <TextGenerateEffect
            words="Hey! I'm Saidev Dhal, a Technophile based in India."
            className="text-center md:tracking-wider mb-2 mt-4 text-sm md:text-lg lg:text-2xl"
          />
          <AlertDialog>
            <AlertDialogTrigger>
              <JadooyiButton
                title="Download Resume"
                position="right"
                icon={<CircleArrowDown className="w-5 h-5" />}
              />
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-xl bg-transparent border-2 backdrop-blur-lg">
              <AlertDialogHeader>
                <AlertDialogTitle>Let&apos;s connect</AlertDialogTitle>
                <AlertDialogDescription>
                  Please enter your email. So that i can reach you later.
                </AlertDialogDescription>
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                  type="email"
                />
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Skip & Download</AlertDialogCancel>
                {/* <AlertDialogAction>Continue</AlertDialogAction> */}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;
