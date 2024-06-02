import GridPattern from "@/components/ui/AnimatedGrid";
import BlurIn from "@/components/ui/BlurIn";
import ShinyButton from "@/components/ui/ShinyButton";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="fixed flex flex-col gap-4 justify-center items-center w-full h-screen overflow-hidden">
      <div className="flex">
        <BlurIn
          word="400: The page you're looking for has drifted into the unknown."
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 px-12 md:px-20 lg:px-25"
        />
      </div>
      <Link href="/">
      <ShinyButton text="Back To Home" />
      </Link>
      <GridPattern
        numSquares={60}
        maxOpacity={0.5}
        duration={5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] w-full h-[200%] skew-y-12"
        )}
      />
    </section>
  );
};

export default NotFound;
