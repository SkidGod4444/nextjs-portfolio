import{ Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/db/fake.data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteConfig.contact.title,
    description: siteConfig.contact.description,
  }

interface ContactLayoutProps {
  children: React.ReactNode
}

export default function ContactLayout({
  children,
}: ContactLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
