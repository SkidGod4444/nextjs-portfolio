"use client";
import Image from "next/image";
import { GripHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";

export default function BlogsList({
  items,
  className,
}: {
  items: {
    uid: string;
    title: string;
    content: string;
    img?: string;
    date?: string;
    source?: string;
    labels: string[];
  }[];

  className?: string;
}) {
  return (
    <Card className={cn("border-2 border-[#252525]", className)}>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Topics</TableHead>
              <TableHead>Labels</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items &&
              items.slice(0, 6).map((item) => (
                <TableRow key={item.uid}>
                  <TableCell className="hidden sm:table-cell">
                    {item.img ? (
                      <Image
                        alt="image"
                        className="aspect-square rounded-md object-cover border"
                        height="64"
                        src={item.img}
                        width="64"
                      />
                    ) : (
                      <Image
                        alt="Placeholder image"
                        className="aspect-square rounded-md object-cover border"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    {Array.isArray(item.labels) &&
                      item.labels.map((label, index) => (
                        <Badge key={index} variant="outline">
                          {label}
                        </Badge>
                      ))}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.date}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="outline"
                        >
                          <GripHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>View</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Check out my{" "}
          <a
            href="/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline underline-offset-4 text-indigo-500"
          >
            blogs page
          </a>{" "}
          for more articles.
        </p>
      </CardFooter>
    </Card>
  );
}
