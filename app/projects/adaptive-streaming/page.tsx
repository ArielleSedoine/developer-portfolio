import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Adaptive Streaming Orchestration System | Arielle Sedoine",
  description:
    "Cloud-native event-driven orchestration platform for distributed audio and video processing using Python, Docker, Kubernetes, and Google Cloud.",
};

export default function AdaptiveStreamingPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <Link
          href="/projects"
          className="text-sm text-blue-400 hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* Header */}

        <section className="mt-10">

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Adaptive Streaming
            <span className="text-blue-400">
              {" "}Orchestration System
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-400">
            A cloud-native orchestration platform that coordinates
            distributed media processing services through an
            event-driven architecture. Unlike traditional monolithic
            media pipelines, independent services execute asynchronously,
            improving scalability, fault isolation, maintainability,
            and deployment flexibility while supporting both audio
            and video workflows.
          </p>

        </section>

        {/* Demo */}

        <section className="mt-12">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">

            <Image
              src="/Orchestration-vod-pipeline-demo.gif"
              alt="Adaptive Streaming Orchestration Demo"
              width={1200}
              height={700}
              unoptimized
              className="rounded-xl"
            />

          </div>

        </section>

        {/* Architecture */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            System Architecture
          </h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

            <Image
              src="/Orchestration-vod-complet.png"
              alt="Adaptive Streaming Architecture"
              width={1200}
              height={700}
              className="rounded-xl"
            />

          </div>

        </section>

        {/* Overview */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            Overview
          </h2>

          <p className="mt-5 leading-relaxed text-gray-400">
            The platform introduces an orchestration layer responsible
            for coordinating multiple specialized media services.
            Instead of executing all processing logic inside a single
            application, independent services collaborate through
            asynchronous events, allowing workloads to scale
            independently while simplifying maintenance and deployment.
          </p>

        </section>

        {/* Workflow */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            Orchestration Workflow
          </h2>

          <div className="mt-6 space-y-4 text-gray-400">

            <p>
              <span className="font-medium text-white">
                1. Media Upload:
              </span>{" "}
              Video or audio files are uploaded to Cloud Storage.
            </p>

            <p>
              <span className="font-medium text-white">
                2. Orchestration:
              </span>{" "}
              An orchestration service determines the processing
              workflow and dispatches independent processing tasks.
            </p>

            <p>
              <span className="font-medium text-white">
                3. Distributed Processing:
              </span>{" "}
              Dedicated services perform transcoding, audio processing,
              subtitle generation, thumbnail creation, metadata
              extraction, and streaming asset packaging.
            </p>

            <p>
              <span className="font-medium text-white">
                4. Event Coordination:
              </span>{" "}
              Processing stages communicate asynchronously using
              cloud-native messaging services.
            </p>

            <p>
              <span className="font-medium text-white">
                5. Asset Delivery:
              </span>{" "}
              Generated media assets are aggregated and stored for
              adaptive streaming delivery.
            </p>

          </div>

        </section>

        {/* Technical Stack */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            Technical Stack
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Python",
              "FastAPI",
              "Docker",
              "Kubernetes",
              "Google Cloud Platform",
              "Cloud Run",
              "Cloud Functions",
              "Pub/Sub",
              "Cloud Storage",
              "Eventarc",
              "Distributed Systems",
              "Microservices",
              "REST APIs",
              "FFmpeg",
              "Speech-to-Text",
              "DASH",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </section>

        {/* Metrics */}

        <section className="mt-16 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-blue-400">
              7+
            </h3>

            <p className="mt-2 text-gray-400">
              Independent Processing Services
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-blue-400">
              Video + Audio
            </h3>

            <p className="mt-2 text-gray-400">
              Supported Media Types
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-blue-400">
              Event-Driven
            </h3>

            <p className="mt-2 text-gray-400">
              Distributed Orchestration
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-bold text-blue-400">
              Cloud Native
            </h3>

            <p className="mt-2 text-gray-400">
              Independent Service Scaling
            </p>
          </div>

        </section>

        {/* GitHub */}

        <section className="mt-16">

          <a
            href="https://github.com/ArielleSedoine/adaptive-streaming-orchestration-system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-white/20 px-6 py-3 text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
          >
            View Source Code →
          </a>

        </section>

      </div>
    </main>
  );
}