"use client";
import useTheme from "@/store/store";
import "./globals.css";
import { Inter } from "next/font/google";
import { useStore } from "zustand";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useTheme((state) => state.darkMode);
  return (
    <html lang="en">
      <body
        className={darkMode ? "dark transition-all" : "root transition-all"}
      >
        {children}
      </body>
    </html>
  );
}
