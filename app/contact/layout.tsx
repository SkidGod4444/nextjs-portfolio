import { siteConfig } from "@/db/fake.data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: siteConfig.contact.title,
    description: siteConfig.contact.description,
  }

interface ContactLayoutProps {
  children: React.ReactNode;
}

export default async function ContactLayout({ children }: ContactLayoutProps) {
  return <div>{children}</div>;
}
