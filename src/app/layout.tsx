import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar1 from "../components/Navbar1";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafis portfolio",
  description: "It is my professional portfolio where i introduced my skills",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  return (

      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar1 session={session} />
          <Toaster richColors position="top-center" />
          <div className="min-h-screen mx-auto">{children}</div>
        </body>
      </html>
   
  );
}
