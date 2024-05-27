import{ Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/db/fake.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.projects.title,
    description: siteConfig.projects.description,
  }

interface ProjectLayoutProps {
  children: React.ReactNode
}

export default function ProjectLayout({
  children,
}: ProjectLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
