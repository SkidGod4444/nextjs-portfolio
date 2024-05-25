"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/MovingCards";
import { GetAllReviews } from "@/db/func";

interface ReviewsItem {
  id: string;
  title: string;
  name: string;
  quote: string;
  pic: string;
  date?: string;
}

const Reviews: React.FC = () => {
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

  return (
    <div className="text-center text-4xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-20">
      <h1 className="heading">
      Some {""}
        <span className="text-indigo-500">kind Words</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
          <InfiniteMovingCards items={reviews} direction="right" speed="normal" className="mt-10 bg-transparent" />

      </div>
    </div>
  );
};

export default Reviews;
