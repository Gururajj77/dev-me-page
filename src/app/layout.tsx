import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import { JsReady } from "@/components/JsReady";
import { site } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Brutal Me Page`,
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — Brutal Me Page`,
    description: site.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>
        <JsReady />
        {children}
      </body>
    </html>
  );
}
