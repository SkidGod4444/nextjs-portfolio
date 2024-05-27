import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Cpu } from "lucide-react";
import { Separator } from "./separator";

export function Announcement() {
  return (
    <Link
      href="/appy"
      className="inline-flex items-center rounded-lg border-2 border-indigo-500 bg-transparent px-3 py-1 text-sm font-medium"
    >
      <Cpu className="h-4 w-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>Introducing Appy</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}
