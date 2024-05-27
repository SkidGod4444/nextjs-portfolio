import{ Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/db/fake.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.about.title,
    description: siteConfig.about.description,
  }

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({
  children,
}: AboutLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
