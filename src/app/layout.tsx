import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "MD. Naymul Islam - MERN Stack Developer Portfolio",
  description: "Frontend Developer and MERN Stack specialist with 3+ years of experience. Expert in MongoDB, Express.js, React, Node.js, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
