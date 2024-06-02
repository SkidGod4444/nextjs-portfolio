"use client";
import { GetAllProjects } from "@/db/func";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3dPin";
import { CircleArrowOutUpRight } from "lucide-react";
import JadooyiButton from "./ui/JadooyiButton";
import { ProjectCardWrapper } from "./ui/ProjectCards";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  img?: string;
  date?: string;
  archived?: boolean;
  iconsList?: string;
  link?: string;
  stacks: string[];
  labels: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const projectsData = await GetAllProjects();
        setProjects(Object.values(projectsData)); // Convert object to array
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
          <span className="relative head-text text-white">Latest</span>{" "}
        </span>{" "}
        Projects
      </h1>

      <span className="text-center font-semibold md:text-xl text-neutral-500 text-base">
        Don&apos;t just take my word for it. Here&apos;s what real people are
        saying.
      </span>
      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-2 mt-3 ">
        {projects.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="h-[40rem] w-full flex items-center justify-center "
          >
            <PinContainer title="/blogs" href="/blogs">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-4 ">
                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d] border-2 border-indigo-500 border-opacity-50">
                  <img src="/bg.png" alt={item.id} />
                </div>
                <img
                  src={item.img ?? ""}
                  alt={item.id}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {Array.isArray(item.iconsList) &&
                    item.iconsList.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2} px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex font-normal lg:text-xl md:text-xs text-sm text-indigo-500">Read More</p>
                  <CircleArrowOutUpRight className="ms-3" color="#6366F1"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> */}
      <div className="max-w-5xl mx-auto px-8">
        <ProjectCardWrapper items={projects} className="mt-10" />
      </div>
    </div>
  );
};

export default Projects;
