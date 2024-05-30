import{ Metadata } from "next";
import { siteConfig } from "@/db/fake.data";

export const metadata: Metadata = {
    title: siteConfig.about.title,
    description: siteConfig.about.description,
  }

  interface AboutLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function AboutLayout({ children }: AboutLayoutProps) {
    return <div>{children}</div>;
  }
