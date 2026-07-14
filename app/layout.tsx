import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";


const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Arielle Sedoine | Cloud Software Engineer",
  description:
    "Cloud Software Engineer specializing in cloud-native distributed systems, real-time streaming platforms, Python, Kubernetes, and Google Cloud Platform.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className={`${inter.className} bg-black text-white`}>

        <Navbar />
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Page Content */}
        <main className="relative z-10">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}
