import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsReady } from "@/components/JsReady";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <JsReady />
        {children}
      </body>
    </html>
  );
}
