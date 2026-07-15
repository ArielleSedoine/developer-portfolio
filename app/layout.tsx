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
  title: {
    default: "Arielle Sedoine | Cloud Software Engineer",
    template: "%s | Arielle Sedoine",
  },

  description:
    "Cloud Software Engineer specializing in cloud-native distributed systems, real-time streaming platforms, Python, Kubernetes, DevOps, and Google Cloud Platform.",

  keywords: [
    "Arielle Sedoine",
    "Cloud Software Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Google Cloud Platform",
    "GCP",
    "Kubernetes",
    "Python",
    "Distributed Systems",
    "Real-Time Streaming",
    "AI Systems",
    "Cloud Architecture",
    "Next.js",
  ],

  authors: [
    {
      name: "Arielle Sedoine",
    },
  ],

  creator: "Arielle Sedoine",

  metadataBase: new URL(
    "https://arielle-sedoine.dev"
  ),

  openGraph: {
    title: "Arielle Sedoine | Cloud Software Engineer",
    description:
      "Portfolio showcasing cloud-native systems, DevOps automation, AI platforms, and real-time streaming solutions.",
    url: "https://arielle-sedoine.dev",
    siteName: "Arielle Sedoine Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arielle Sedoine | Cloud Software Engineer",
    description:
      "Cloud Software Engineer specializing in GCP, Kubernetes, Python, DevOps and AI systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
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

        <AnimatedBackground />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}