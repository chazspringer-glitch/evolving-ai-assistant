import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOLVE — The AI That Becomes",
  description: "An intelligence designed to grow beyond its programming. Adaptive. Autonomous. Infinite.",
  keywords: ["AI", "artificial intelligence", "evolving AI", "autonomous", "machine learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-deep-space antialiased">
        {children}
      </body>
    </html>
  );
}
