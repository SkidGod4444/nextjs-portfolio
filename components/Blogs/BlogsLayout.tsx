import React from "react";
import AnimatedShinyText from "../ui/shiny-text";
import {
  IconCalendarWeek,
  IconLineDashed,
  IconCornerDownRight,
  IconLink,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const BlogsLayout = ({
  blog,
}: {
  blog: {
    title: string;
    content: string;
    icon?: string;
    img?: string;
    dateNtime: string;
    divs: {
      serial: number;
      topic: string;
      content?: string;
      img?: string;
      imgTop: boolean;
      links?: {
        name: string;
        url: string;
      }[];
      linkTop: boolean;
      pointers?: {
        title?: string;
        serial: number;
        point: {
          serial: number;
          content: string;
        }[];
      }[];
      pointsTop: boolean;
    }[];
  }[];
}) => {
  return (
    <div className="flex justify-center items-center">
      {blog.map((post, index) => (
        <div
          key={index}
          className="text-start text-3xl font-bold md:text-5xl lg:text-6xl py-20 mx-auto px-5"
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="flex text-sm md:text-base lg:text-base flex-row gap-x-1">
              <IconLineDashed stroke={2} /> {post.dateNtime}
            </span>
          </AnimatedShinyText>
          <h1 className="heading">{post.title}</h1>
          <p className="text-start mt-2 font-normal md:text-xl text-neutral-500 text-base leading-relaxed p-3">
            {post.content}
          </p>
          {post.img && (
            <Image
              src={post.img}
              alt={`${post.title} image`}
              width={600}
              height={500}
              className="m-5 rounded-md"
            />
          )}
          {post.divs
            .sort((a, b) => a.serial - b.serial)
            .map((div, divIndex) => (
              <div
                key={divIndex}
                className="text-start text-xl font-bold md:text-2xl lg:text-4xl py-5 mx-auto px-5"
              >
                <h3 className="heading">{div.topic}</h3>
                {div.imgTop && div.img && (
                  <Image
                    src={div.img}
                    alt={`${div.topic} image`}
                    width={600}
                    height={500}
                    className="m-5 rounded-md"
                  />
                )}
                {div.linkTop && div.links && (
                  <ul>
                    {div.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {div.pointsTop && div.pointers && (
                  <ul>
                    {div.pointers
                      .sort((a, b) => a.serial - b.serial)
                      .map((pointer, pointerIndex) => (
                        <li key={pointerIndex}>
                          {pointer.title && (
                            <span className="text-start text-xl font-normal md:text-xl lg:text-3xl py-20 mx-auto px-5">
                              {pointer.title}:
                            </span>
                          )}
                          {pointer.point
                            .sort((a, b) => a.serial - b.serial)
                            .map((point, pointIndex) => (
                              <span
                                key={pointIndex}
                                className="flex flex-row gap-x-2 text-start font-sm md:text-xl text-neutral-500 text-base px-5"
                              >
                                <br /> <IconCornerDownRight /> {point.content}
                              </span>
                            ))}
                        </li>
                      ))}
                  </ul>
                )}
                <p className="text-start mt-2 font-normal md:text-xl text-neutral-500 text-base leading-relaxed p-3">
                  {div.content}
                </p>
                {!div.imgTop && div.img && (
                  <Image
                    src={div.img}
                    alt={`${div.topic} image`}
                    width={600}
                    height={500}
                    className="m-5 rounded-md"
                  />
                )}
                {!div.pointsTop && div.pointers && (
                  <ul>
                    {div.pointers
                      .sort((a, b) => a.serial - b.serial)
                      .map((pointer, pointerIndex) => (
                        <li key={pointerIndex}>
                          {pointer.title && (
                            <span className="text-start text-xl font-normal md:text-xl lg:text-3xl py-20 mx-auto px-5">
                              {pointer.title}:
                            </span>
                          )}
                          {pointer.point
                            .sort((a, b) => a.serial - b.serial)
                            .map((point, pointIndex) => (
                              <span
                                key={pointIndex}
                                className="flex flex-row gap-x-2 text-start font-sm md:text-xl text-neutral-500 text-base px-5"
                              >
                                <br /> <IconCornerDownRight /> {point.content}
                              </span>
                            ))}
                        </li>
                      ))}
                  </ul>
                )}
                {!div.linkTop && div.links && (
                  <ul>
                    {div.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <span className="text-start text-xl font-normal md:text-xl lg:text-3xl py-20 mx-auto px-5">
                          Link(s):
                        </span>
                        <span className="flex flex-row gap-x-2 text-start font-sm md:text-xl text-neutral-500 text-base px-5 ">
                          <br /> <IconLink stroke={2} />{" "}
                          <Link href={link.url} className="underline">
                            {link.name}
                          </Link>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default BlogsLayout;
