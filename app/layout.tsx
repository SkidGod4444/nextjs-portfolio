import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Themes.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saidev's Portfolio",
  description: "Modern portfolio for Saidev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
