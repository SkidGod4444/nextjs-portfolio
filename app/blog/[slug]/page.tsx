import BlogsLayout from "@/components/Blogs/BlogsLayout";
import BlogsShare from "@/components/Blogs/BlogsShare";
import DotPattern from "@/components/ui/DotPattern";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React from "react";

const BlogPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <BlogsLayout
          blog={[
            {
              title: "First Blog Post",
              content:
                "This is the content of the first blog post.This is the content of the first blog post.This is the content of the first blog post.This is the content of the first blog post.",
              dateNtime: "2024-06-07 10:00 AM",
              img: "/blogtesterIMG.png",
              divs: [
                {
                  serial: 1,
                  topic: "Introduction",
                  content: "This is the introduction section.",
                  img: "/blogtesterIMG.png",
                  imgTop: false,
                  links: [{ name: "Google", url: "https://www.google.com" }],
                  linkTop: false,
                  pointers: [
                    {
                      title: "Point 1",
                      serial: 1,
                      point: [
                        {
                          serial: 1,
                          content: "This is the end",
                        },
                        {
                          serial: 2,
                          content: "This is the second",
                        },
                      ],
                    },
                  ],
                  pointsTop: false,
                },
                {
                  serial: 2,
                  topic: "Introduction 2",
                  content: "This is the introduction section.",
                  img: "/blogtesterIMG.png",
                  imgTop: false,
                  // links: [{ name: "Google", url: "https://www.google.com" }],
                  linkTop: false,
                  // pointers: [
                  //   {
                  //     title: "Point 1",
                  //     serial: 1,
                  //     point: [
                  //       {
                  //         serial: 1,
                  //         content: "This is the end",
                  //       },
                  //       {
                  //         serial: 2,
                  //         content: "This is the second",
                  //       },
                  //     ],
                  //   },
                  // ],
                  pointsTop: false,
                },
              ],
            },
            // Add additional blog objects here if needed
          ]}
        />
        <BlogsShare/>
      </div>
    </main>
  );
};

export default BlogPage;
