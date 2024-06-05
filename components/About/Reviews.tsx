"use client";
import React, { useEffect, useState } from "react";
import { GetAllReviews } from "@/db/func";
import { cn } from "@/lib/utils";
import Marquee from "../ui/Morquee";

interface ReviewsItem {
  id: string;
  title?: string;
  name: string;
  quote: string;
  pic: string;
  date?: string;
}

const AboutReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const reviewsData = await GetAllReviews();
        setReviews(Object.values(reviewsData)); // Convert object to array
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) console.log("Loading...");
  if (error) console.error("Fuck: " + error);

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    pic,
    name,
    username,
    quote,
  }: {
    pic: string;
    name: string;
    username?: string;
    quote: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={pic}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 font-normal text-sm">{quote}</blockquote>
      </figure>
    );
  };

  return (
    <div className="text-start text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5">
      <h1 className="heading">
      <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-400 before:dark:bg-indigo-500 relative inline-block">
          <span className="relative head-text text-white">Kind</span>{" "}
        </span>{" "}
        Words
      </h1>
      <div className="relative flex w-full h-full flex-col items-center overflow-hidden mt-5">
        <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default AboutReviews;
