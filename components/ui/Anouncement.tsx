import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Cpu } from "lucide-react";
import { Separator } from "./separator";
import AnimatedShinyText from "./shiny-text";
import { cn } from "@/lib/utils";

export function Announcement() {
  return (
    <div className="z-10 flex items-center justify-center">
      <Link href="/projects/appy">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Appy</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      </Link>
    </div>
  );
}
