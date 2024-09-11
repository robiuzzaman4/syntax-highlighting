import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MarkdownProvider from "@/provider/mdx-provider";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Syntax Highlighting",
  description: "Highlight your Syntax with Rehype and Shiki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MarkdownProvider>
        <body
          className={`${inter.variable} antialiased font-sans bg-white text-slate-900`}
        >
          <Navbar />
          <div className="min-h-[calc(100vh-56px)] mt-14 w-full max-w-4xl mx-auto px-4 overflow-hidden">
            {children}
          </div>
        </body>
      </MarkdownProvider>
    </html>
  );
}
