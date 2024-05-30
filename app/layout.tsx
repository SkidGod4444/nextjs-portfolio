import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Themes.provider";
import { NavItems, siteConfig } from "@/db/fake.data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import MobNav from "@/components/ui/MobNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "SkidGod4444",
    "SkidGod",
    "Portfolio",
    "Saidev Dhal",
    "Next.js",
    "TypeScript",
    "Aceternity",
    "Tailwind CSS",
    "Server Components",
    "Next.js App Router",
    "shadcn",
    "shadcn/ui",
  ],
  authors: [
    {
      name: "Saidev Dhal",
      url: "https://saidevdhal.xyz",
    },
  ],
  creator: "Saidev Dhal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="hidden md:block">
            <FloatingNav navItems={NavItems} />
          </div>
          <MobNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
