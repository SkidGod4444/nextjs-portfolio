"use client";
import { GetAllProjects } from "@/db/func";
import React, { useEffect, useState } from "react";
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
      <div className="max-w-5xl mx-auto px-8">
        <ProjectCardWrapper items={projects} className="mt-10" />
      </div>
    </div>
  );
};

export default Projects;
