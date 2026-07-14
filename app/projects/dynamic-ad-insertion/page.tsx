import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dynamic Ad Insertion (DAI) System | Arielle Sedoine",
  description:
    "Cloud-native Dynamic Ad Insertion platform supporting adaptive streaming through HLS and DASH manifest manipulation.",
};

export default function DynamicAdInsertionPage() {
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
            Dynamic Ad
            <span className="text-blue-400">
              {" "}Insertion (DAI) System
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-400">
            A cloud-native media platform designed to insert advertisements
            dynamically into adaptive streaming content without modifying
            the original media assets. The system manipulates streaming
            manifests in real time, enabling personalized advertising while
            maintaining seamless playback across multiple devices.
          </p>

        </section>

        {/* Demo */}

        <section className="mt-12">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">

            <Image
              src="/DAI.gif"
              alt="Dynamic Ad Insertion Demo"
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
              src="/DAI-architecture.png"
              alt="Dynamic Ad Insertion Architecture"
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
            The platform intercepts adaptive streaming requests and
            dynamically updates streaming manifests to include
            advertisement segments. Instead of modifying the original
            video, advertisements are inserted at predefined cue points,
            allowing personalized and scalable ad delivery while preserving
            uninterrupted playback.
          </p>

        </section>

        {/* Workflow */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            Processing Workflow
          </h2>

          <div className="mt-6 space-y-4 text-gray-400">

            <p>
              <span className="font-medium text-white">
                1. Content Request:
              </span>{" "}
              A streaming client requests media playback.
            </p>

            <p>
              <span className="font-medium text-white">
                2. Manifest Analysis:
              </span>{" "}
              The platform retrieves and parses HLS or DASH manifests to
              identify advertisement insertion opportunities.
            </p>

            <p>
              <span className="font-medium text-white">
                3. Advertisement Selection:
              </span>{" "}
              Advertisement assets are selected according to playback
              context and campaign rules.
            </p>

            <p>
              <span className="font-medium text-white">
                4. Manifest Rewriting:
              </span>{" "}
              Streaming manifests are updated dynamically to include
              advertisement segments while preserving adaptive bitrate
              playback.
            </p>

            <p>
              <span className="font-medium text-white">
                5. Continuous Streaming:
              </span>{" "}
              The updated manifest is delivered to the player, enabling
              smooth playback with frame-accurate advertisement insertion.
            </p>

          </div>

        </section>

        {/* Key Features */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            Key Features
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">

            <li>• Dynamic HLS and DASH manifest manipulation.</li>

            <li>• Frame-accurate advertisement insertion.</li>

            <li>• Adaptive bitrate streaming compatibility.</li>

            <li>• Non-destructive media processing.</li>

            <li>• Personalized advertisement delivery.</li>

            <li>• Cloud-native scalable architecture.</li>

          </ul>

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
              "Google Cloud Platform",
              "Cloud Run",
              "Cloud Storage",
              "HLS",
              "MPEG-DASH",
              "Manifest Processing",
              "FFmpeg",
              "REST APIs",
              "Distributed Systems",
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
              HLS + DASH
            </h3>

            <p className="mt-2 text-gray-400">
              Supported Streaming Formats
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              Frame Accurate
            </h3>

            <p className="mt-2 text-gray-400">
              Advertisement Placement
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              Adaptive
            </h3>

            <p className="mt-2 text-gray-400">
              Bitrate Streaming
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              Cloud Native
            </h3>

            <p className="mt-2 text-gray-400">
              Distributed Deployment
            </p>

          </div>

        </section>

        {/* GitHub */}

        <section className="mt-16">

          <a
            href="https://github.com/ArielleSedoine/dynamic-ad-insertion-system"
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