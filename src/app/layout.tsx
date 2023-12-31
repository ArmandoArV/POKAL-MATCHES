import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import pokal from "@/images/pokal.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokal",
  description: "Made by: Armando Arredondo Valle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header headerLogo={pokal} />
        {children}
      </body>
    </html>
  );
}
