"use client";
import React, { useEffect, useState } from 'react'
import BlogsList from './ui/BlogsList'
import { GetAllBlogs } from '@/db/func';

interface BlogItem {
  uid: string;
  title: string;
  content: string;
  img?: string;
  date?: string;
  source?: string;
  labels: string[];
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogsData = await GetAllBlogs();
        setBlogs(Object.values(blogsData)); // Convert object to array
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
    <div className="text-center text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5">
      <h1 className="heading">
      <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-indigo-400 before:dark:bg-indigo-500 relative inline-block">
          <span className="relative head-text text-white">Trending</span>{" "}
        </span>{" "}
        Blogs
      </h1>

      <span className="text-center font-semibold md:text-xl text-neutral-500 text-base">
        I love talking about new technologies and sharing my thoughts on different topic.
      </span>
      <BlogsList items={blogs} className='mt-10' />
    </div>
  )
}

export default Blogs
