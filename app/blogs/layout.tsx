import{ Metadata } from "next";
import { siteConfig } from "@/db/fake.data";

export const metadata: Metadata = {
    title: siteConfig.blogs.title,
    description: siteConfig.blogs.description,
  }

  interface BlogLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function BlogLayout({ children }: BlogLayoutProps) {
    return <div>{children}</div>;
  }
