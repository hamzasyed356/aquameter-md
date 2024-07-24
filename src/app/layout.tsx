import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Fotterlogin from "@/components/Fotterlogin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquameter",
  description: "By Pentaprism Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'backgroundImage flex flex-col justify-between h-screen'}>
        <Topbar/>
        <div className="mx-10">
        {children}
        </div>
        <Fotterlogin/>
      </body>
    </html>
  );
}
