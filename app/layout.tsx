import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "AI Tools Tracker",
  description: "Discover and track the latest AI tools in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} font-sans antialiased bg-slate-950 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
