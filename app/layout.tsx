"use client";
import store from "@/store/store";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/header/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = store((state) => state.darkMode);
  const myClass = `container m-auto min-h-screen py-4 px-4 p-2 ${
    darkMode ? "dark" : "root"
  }`;
  return (
    <html lang="en">
      <body className={myClass}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
