import React from "react";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={cn("h-full text-shark overflow-hidden", inter.className)}>
        <div className="h-full w-full">
        <div className="flex h-screen w-full max-w-[1600px] mx-auto">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 h-full overflow-visible">
            <main className="flex-1 min-h-0 relative z-20">
              {children}
            </main>
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
