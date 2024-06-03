import{ Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth",
    description: "Authorize to get access to the content",
  }

  interface AuthLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function AuthLayout({ children }: AuthLayoutProps) {
    return <div>{children}</div>;
  }
