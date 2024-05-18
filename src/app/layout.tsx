"use client";
import "@tamagui/core/reset.css";
import { NextTamaguiProvider } from "./NextTamaguiProvider";
import { Inter } from "next/font/google";
import "./globals.css";

if (process.env.NODE_ENV === "production") {
  require("../../public/tamagui.css");
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
