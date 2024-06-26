import{ Metadata } from "next";
import { siteConfig } from "@/db/fake.data";

export const metadata: Metadata = {
    title: siteConfig.blogs.title,
    description: siteConfig.blogs.description,
  }

  interface BlogsLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function BlogsLayout({ children }: BlogsLayoutProps) {
    return <div>{children}</div>;
  }
