import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
