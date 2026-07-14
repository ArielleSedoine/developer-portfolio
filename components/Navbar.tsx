"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white transition hover:text-blue-400"
        >
          Arielle
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">

          <Link
            href="/about"
            className="text-gray-300 transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/experience"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Experience
          </Link>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenProjects(true)}
            onMouseLeave={() => setOpenProjects(false)}
          >

            <button className="flex items-center gap-1 text-gray-300 transition hover:text-blue-400">

              Projects

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openProjects ? "rotate-180" : ""
                }`}
              />

            </button>

            {openProjects && (
              <div className="absolute left-0 mt-4 w-72 rounded-xl border border-white/10 bg-zinc-900 shadow-2xl">

                <Link
                  href="/projects"
                  className="block border-b border-white/10 px-5 py-4 font-medium text-white hover:bg-white/5"
                >
                  View All Projects
                </Link>

                <Link
                  href="/projects/ai-gateway"
                  className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-blue-400"
                >
                  AI Gateway – Real-Time Audio Streaming
                </Link>

                <Link
                  href="/projects/cloud-video-processing"
                  className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-blue-400"
                >
                  Cloud Video Processing Pipeline
                </Link>

                <Link
                  href="/projects/dynamic-ad-insertion"
                  className="block px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-blue-400"
                >
                  Dynamic Ad Insertion (DAI)
                </Link>

                <Link
                  href="/projects/adaptive-streaming"
                  className="block rounded-b-xl px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-blue-400"
                >
                  Adaptive Streaming Orchestration
                </Link>

              </div>
            )}

          </div>

          <Link
            href="/skills"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Skills
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </Link>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 transition hover:border-blue-400 hover:text-blue-400 lg:flex"
          >
            <HiOutlineDocumentText size={18} />
            Resume
          </a>

          <a
            href="https://github.com/ArielleSedoine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaGithub size={21} />
          </a>

          <a
            href="https://www.linkedin.com/in/arielle-60178832a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={21} />
          </a>

        </div>

      </div>
    </nav>
  );
}