import{ Metadata } from "next";
import { siteConfig } from "@/db/fake.data";

export const metadata: Metadata = {
    title: siteConfig.projects.title,
    description: siteConfig.projects.description,
  }

  interface ProjectLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function ProjectLayout({ children }: ProjectLayoutProps) {
    return <div>{children}</div>;
  }
