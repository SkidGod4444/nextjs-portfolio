"use client";
import React, { useEffect, useState } from "react";
import { ProjectCardWrapper } from "../ui/ProjectCards";
import { GetAllProjects } from "@/db/func";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  img?: string;
  date?: string;
  archived?: boolean;
  iconsList?: string;
  link?: string;
  blog?: string;
  stacks: string[];
  labels: string[];
}

const ProjectsLayout = () => {
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
    <div className="max-w-5xl mx-auto px-8">
      <ProjectCardWrapper
        isPreview={false}
        items={projects}
        className="mt-10"
      />
    </div>
  );
};

export default ProjectsLayout;
