"use client";
import React, { useEffect, useState } from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import Image from 'next/image';
import { GetAllBlogs } from '@/db/func';

interface BlogItem {
  uid: string;
  title: string;
  image: string;
  labels: string;
  source: string;
  content: string;
}

const Grid: React.FC = () => {
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
  if (error) console.error("Fuck: "+error);

  return (
    <section id="blogs-preview">
      {/* <BentoGrid>
        {blogs.slice(0, 6).map((item) => (
          <BentoGridItem
            key={item.uid}
            id={item.uid}
            title={item.title}
            description={item.content}
          />
        ))}
      </BentoGrid> */}
    </section>
  );
}

export default Grid;
