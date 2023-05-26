"use client";
import store from "@/store/store";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = store((state) => state.darkMode);
  return (
    <html lang="en">
      <body className={darkMode ? "dark" : "root"}>{children}</body>
    </html>
  );
}
