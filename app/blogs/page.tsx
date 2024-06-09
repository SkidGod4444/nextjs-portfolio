import BlogsTab from "@/components/Blogs/BlogsTab";
import BlogsHero from "@/components/Blogs/Hero";
import React from "react";

const Blogs = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <BlogsHero/>
        <BlogsTab/>
      </div>
    </main>
  );
};

export default Blogs;
