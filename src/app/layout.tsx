import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espresso Pratunam Car Rental",
  description: "Espresso Pratunam Car Rental",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en" className="overflow-x-hidden no-scrollbar">
      <body className={inter.className}>
        <NextAuthProvider sessionAuth={nextAuthSession}>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
