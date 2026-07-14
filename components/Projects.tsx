/*import Link from "next/link";


const projects = [
  {
    title: "AI Gateway - Real-Time Audio Streaming",
    description:
      "A cloud-native real-time audio processing platform designed for low-latency AI communication workloads.",
    technologies: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Docker",
      "GKE",
      "Cloud Run",
    ],
    metrics: "<200ms latency | 100+ concurrent users",
    link: "/projects/ai-gateway",
  },


  {
    title: "Cloud Video Processing Pipeline",
    description:
      "An event-driven Google Cloud pipeline automating video transcoding, media processing, and streaming asset generation.",
    technologies: [
      "GCP",
      "Cloud Storage",
      "Cloud Functions",
      "Pub/Sub",
      "Transcoder API",
    ],
    metrics:
      "Automated media workflows with scalable cloud processing",
    link: "/projects/cloud-video-processing",
  },


  {
    title: "Dynamic Ad Insertion (DAI) System",
    description:
      "A streaming optimization system enabling dynamic advertisement insertion through HLS and DASH manifest manipulation.",
    technologies: [
      "HLS",
      "DASH",
      "Streaming",
      "Media Processing",
      "Distributed Systems",
    ],
    metrics:
      "Frame-accurate content insertion and adaptive playback",
    link: "/projects/dynamic-ad-insertion",
  },


  {
    title: "Adaptive Streaming Orchestration System",
    description:
      "A distributed orchestration platform designed to optimize media delivery based on streaming conditions.",
    technologies: [
      "Distributed Systems",
      "Event-Driven Architecture",
      "Cloud Computing",
      "Streaming",
    ],
    metrics:
      "Scalable cloud-native media orchestration",
    link: "/projects/adaptive-streaming",
  },

];



export default function Projects() {

  return (

    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">


        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Projects
        </h1>


        <p className="mt-6 max-w-3xl text-lg text-gray-400">

          Selected projects demonstrating my experience in cloud-native
          development, distributed systems, real-time communication,
          and media processing architectures.

        </p>



        <div className="mt-12 grid gap-8 md:grid-cols-2">


          {projects.map((project) => (

            <Link
              key={project.title}
              href={project.link}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-blue-400/50"
            >


              <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition">

                {project.title}

              </h2>



              <p className="mt-4 leading-relaxed text-gray-400">

                {project.description}

              </p>



              {/* Technologies *///}//jai ajouter ici 
/*
              <div className="mt-6 flex flex-wrap gap-2">


                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>

                ))}


              </div>



              <div className="mt-6 text-sm text-blue-400">

                {project.metrics}

              </div>



              <div className="mt-6 text-sm text-gray-400">

                View project →

              </div>


            </Link>


          ))}


        </div>


      </div>


    </section>

  );

}*/

//NOUVEAU CODE
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI Gateway - Real-Time Audio Streaming",
    image: "/ai-gateway.gif",
    description:
      "Cloud-native low-latency audio streaming platform enabling real-time AI communication through distributed backend services.",
    technologies: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Docker",
      "GKE",
      "Cloud Run",
    ],
    metrics: ["<200 ms latency", "100+ concurrent users"],
    link: "/projects/ai-gateway",
  },

  {
    title: "Cloud Video Processing Pipeline",
    image: "/cloud-video-processing.gif",
    description:
      "Event-driven media processing pipeline automating transcoding, multilingual captions, thumbnails, and adaptive streaming assets.",
    technologies: [
      "GCP",
      "Cloud Functions",
      "Cloud Storage",
      "Pub/Sub",
      "Transcoder API",
      "FFmpeg",
    ],
    metrics: ["SD • HD • UHD", "6 Subtitle Languages"],
    link: "/projects/cloud-video-processing",
  },

  {
    title: "Dynamic Ad Insertion (DAI) System",
    image: "/DAI.gif",
    description:
      "Distributed streaming platform supporting frame-accurate dynamic advertisement insertion for adaptive media delivery.",
    technologies: [
      "HLS",
      "DASH",
      "Python",
      "Streaming",
      "Manifest Processing",
    ],
    metrics: ["Frame-Accurate", "Adaptive Streaming"],
    link: "/projects/dynamic-ad-insertion",
  },

  {
    title: "Adaptive Streaming Orchestration System",
    image: "/Orchestration-vod-pipeline-demo.gif",
    description:
      "Cloud-native orchestration platform coordinating distributed video and audio processing services through event-driven workflows.",
    technologies: [
      "Python",
      "Docker",
      "Cloud Run",
      "Pub/Sub",
      "Microservices",
      "Distributed Systems",
    ],
    metrics: ["7+ Services", "Video & Audio"],
    link: "/projects/adaptive-streaming",
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold text-white">
            Projects
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            A selection of production-oriented projects demonstrating
            experience in cloud-native software engineering,
            distributed systems, backend development,
            real-time communication, and scalable media platforms.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {projects.map((project) => (

            <Link
              key={project.title}
              href={project.link}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "
            >

              {/* Preview */}

              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  unoptimized
                  className="
                    h-60
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h2 className="text-2xl font-semibold text-white transition group-hover:text-blue-400">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/30
                        px-3
                        py-1
                        text-xs
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Metrics */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.metrics.map((metric) => (

                    <span
                      key={metric}
                      className="
                        rounded-full
                        bg-blue-500/10
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-blue-400
                      "
                    >
                      {metric}
                    </span>

                  ))}

                </div>

                {/* CTA */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    Click to explore the complete project
                  </span>

                  <span className="font-medium text-blue-400 transition group-hover:translate-x-1">
                    View Project →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}