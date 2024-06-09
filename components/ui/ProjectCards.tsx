import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ShinyButton from "./ShinyButton";
import AvatarCircles from "./AvatarCircle";
import { Button } from "./button";

export const ProjectCardWrapper = ({
  items,
  className,
  isPreview,
}: {
  items: {
    title: string;
    desc: string;
    id: string;
    link?: string;
    blog?: string;
    src?: string;
    stacks: string[];
  }[];
  className?: string;
  isPreview?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Determine the items to render based on isPreview
  const itemsToRender = isPreview ? items.slice(0, 6) : items;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-15 md:py-10", className)}>
      {itemsToRender.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ProjectCard>
            <ProjectCardImage src={item.src || ""} />
            <ProjectCardTitle>{item.title}</ProjectCardTitle>
            <ProjectCardDescription BlogLink={item.blog}>{item.desc}</ProjectCardDescription>
            <ProjectTechStacks stacks={item.stacks} />
            <ProjectCardFooter src={item.src || ""} live={item.link || ""} />
          </ProjectCard>
        </div>
      ))}
    </div>
  );
};

export const ProjectCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#252525] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const ProjectCardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-start font-bold tracking-wide text-2xl mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const ProjectCardDescription = ({
  className,
  children,
  BlogLink,
}: {
  className?: string;
  BlogLink?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 text-start tracking-wide leading-loose font-normal text-sm",
        className
      )}
    >
      {children}
      {BlogLink && (
        <Link href={BlogLink}>
        <span className="ml-1 hover:underline text-indigo-400">Read More.</span>
        </Link>
      )}
    </p>
  );
};

export const ProjectCardFooter = ({
  src,
  live,
}: {
  src: string;
  live: string;
}) => {
  return (
    <p className="flex justify-center gap-x-5 mt-5 md:mt-0 items-end">
      <Link href={src}>
        <ShinyButton text="GitHub" />
      </Link>
      <Link href={live}>
        <ShinyButton text="Preview" />
      </Link>
    </p>
  );
};

export const ProjectCardImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-[65px] h-[65px] overflow-hidden rounded-full border-2 border-indigo-500 border-opacity-50 justify-center items-start",
        className
      )}
    >
      <img src={src} alt="Project Image" />
    </div>
  );
}


export const ProjectTechStacks = ({
  stacks,
  className,
}: {
  stacks: string[];
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-2 mt-5", className)}>
      <AvatarCircles imageSrcs={stacks} />
    </div>
  );
};
