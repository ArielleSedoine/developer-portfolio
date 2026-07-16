/*"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

      {/* Background Gradient *///}//AJOUTER ICI
/*      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#2563eb25,transparent_45%),radial-gradient(circle_at_bottom_left,#06b6d425,transparent_40%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-24 lg:grid-cols-2">

        {/* Left *///}
/*
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Cloud Software Engineer
          </span>


          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">

            Building
            <span className="text-blue-400">
              {" "}Cloud-Native
            </span>

            <br />

            Distributed Systems

          </h1>


          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            I design scalable backend platforms, distributed architectures,
            and real-time communication systems using Python,
            FastAPI, Kubernetes, and Google Cloud Platform.

          </p>


          {/* Buttons *///}

/*          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Explore Projects

              <FaArrowRight size={14} />
            </Link>


            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
            >
              <HiOutlineDocumentText />

              Resume
            </a>

          </div>


          {/* Social *///}

/*          <div className="mt-10 flex items-center gap-6">

            <a
              href="https://github.com/ArielleSedoine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <FaGithub size={24}/>
            </a>


            <a
              href="https://www.linkedin.com/in/arielle-60178832a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={24}/>
            </a>

          </div>



          {/* Metrics *///}
/*
          <div className="mt-14 flex flex-wrap gap-10">

            <div>

              <h3 className="text-3xl font-bold text-blue-400">
                &lt;200ms
              </h3>

              <p className="text-gray-500">
                End-to-end latency
              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-blue-400">
                100+
              </h3>

              <p className="text-gray-500">
                Concurrent users
              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-blue-400">
                5+
              </h3>

              <p className="text-gray-500">
                Microservices
              </p>

            </div>

          </div>

        </motion.div>





        {/* Right *///}

/*        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-[120px] opacity-20" />

            <Image
              src="/profile.png"
              alt="Arielle Sedoine"
              width={430}
              height={430}
              priority
              className="relative rounded-full border border-white/10 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}*/

//NOVEAU CODE

"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";


export default function Hero() {

  return (

    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        px-6
        pt-24
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-12
          md:grid-cols-2
        "
      >


        {/* LEFT CONTENT */}

        <div>


          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>


          <h1
            className="
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-7xl
            "
          >

            Arielle
            <br />

            Sedoine

          </h1>



          {/* Animated Roles */}

          <div
            className="
              mt-6
              text-2xl
              font-semibold
              text-gray-300
              md:text-3xl
            "
          >

            <TypeAnimation

              sequence={[

                "Cloud Software Engineer",
                2000,

                "Backend Engineer",
                2000,

                "Distributed Systems Engineer",
                2000,

                "Google Cloud Engineer",
                2000,

                "Python Developer",
                2000,

              ]}

              wrapper="span"

              speed={50}

              repeat={Infinity}

            />

          </div>



          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-gray-400
            "
          >

            I design and build scalable cloud-native systems,
            distributed architectures, and real-time platforms
            using Python, Google Cloud Platform, Docker,
            and Kubernetes.

          </p>




          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >


            <Link

              href="/projects"

              className="
                rounded-xl
                bg-blue-500
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-600
              "
            >

              View Projects →

            </Link>



            <a

              href="/Resume.pdf"

              target="_blank"

              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                px-6
                py-3
                text-gray-200
                transition
                hover:border-blue-400
                hover:text-blue-400
              "
            >

              <HiOutlineDocumentText size={20}/>

              Resume

            </a>


          </div>




          {/* Social */}

          <div
            className="
              mt-8
              flex
              gap-5
            "
          >

            <a

              href="https://github.com/ArielleSedoine"

              target="_blank"

              className="
                text-gray-400
                transition
                hover:text-white
              "
            >

              <FaGithub size={26}/>

            </a>



            <a

              href="https://www.linkedin.com/in/arielle-60178832a/"

              target="_blank"

              className="
                text-gray-400
                transition
                hover:text-white
              "
            >

              <FaLinkedin size={26}/>

            </a>


          </div>


        </div>






        {/* RIGHT IMAGE */}

        <div
          className="
            flex
            justify-center
          "
        >

          <div
            className="
              relative
              h-72
              w-72
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-white/5
              md:h-96
              md:w-96
            "
          >

            <Image

              src="/profile.png"

              alt="Arielle Sedoine"

              fill

              className="
                object-cover
              "

            />

          </div>


        </div>



      </div>


    </section>

  );
}