import{ Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/db/fake.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.blogs.title,
    description: siteConfig.blogs.description,
  }

interface BlogsLayoutProps {
  children: React.ReactNode
}

export default function BlogsLayout({
  children,
}: BlogsLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
