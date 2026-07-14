import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Cloud Video Processing Pipeline | Arielle Sedoine",
  description:
    "Event-driven video processing pipeline built on Google Cloud Platform using Cloud Functions, Transcoder API, Pub/Sub, Cloud Storage, and Cloud Run.",
};


export default function CloudVideoProcessingPage() {

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

            Cloud Video Processing
            <span className="text-blue-400">
              {" "}Pipeline
            </span>

          </h1>



          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-400">

            Designed and implemented an event-driven cloud-native video
            processing pipeline on Google Cloud Platform to automate video
            ingestion, multi-resolution transcoding, audio extraction,
            multilingual caption generation, thumbnail creation, and
            adaptive streaming asset preparation.

          </p>


        </section>





        {/* Demo GIF */}

        <section className="mt-12">


          <h2 className="mb-6 text-3xl font-semibold text-white">
            Demo
          </h2>


          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">


            <Image
              src="/cloud-video-processing.gif"
              alt="Cloud Video Processing Pipeline Demo"
              width={1200}
              height={700}
              unoptimized
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

            The platform automatically processes uploaded videos through
            a scalable Google Cloud workflow. Each uploaded video is
            transcoded into multiple quality levels, generates dedicated
            audio assets, creates multilingual caption files, produces
            thumbnails, and prepares streaming-ready content for adaptive
            playback.

          </p>


        </section>






        {/* Architecture */}

        <section className="mt-16">


          <h2 className="text-3xl font-semibold text-white">
            System Architecture
          </h2>



          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">


            <Image
              src="/cloud-video-architecture.png"
              alt="Cloud Video Processing Architecture"
              width={1200}
              height={700}
              className="rounded-xl"
            />


          </div>




          <div className="mt-8 space-y-4 text-gray-400">


            <p>
              <span className="font-medium text-white">
                1. Video Upload:
              </span>{" "}
              Source videos are uploaded into Google Cloud Storage.
            </p>



            <p>
              <span className="font-medium text-white">
                2. Event Trigger:
              </span>{" "}
              Cloud Functions and Eventarc detect new media assets and
              trigger processing workflows.
            </p>



            <p>
              <span className="font-medium text-white">
                3. Transcoding:
              </span>{" "}
              Google Cloud Transcoder API generates SD, HD, and UHD
              video outputs.
            </p>



            <p>
              <span className="font-medium text-white">
                4. Media Processing:
              </span>{" "}
              FFmpeg handles audio extraction, thumbnail generation,
              and additional processing tasks.
            </p>



            <p>
              <span className="font-medium text-white">
                5. Captions:
              </span>{" "}
              Speech processing generates multilingual caption files.
            </p>



            <p>
              <span className="font-medium text-white">
                6. Delivery:
              </span>{" "}
              Processed assets are stored and prepared for adaptive
              streaming delivery.
            </p>


          </div>


        </section>







        {/* Generated Assets */}

        <section className="mt-16">


          <h2 className="text-3xl font-semibold text-white">
            Generated Media Assets
          </h2>



          <div className="mt-8 grid gap-6 md:grid-cols-2">


            <div className="rounded-xl border border-white/10 bg-white/5 p-6">


              <h3 className="text-xl font-semibold text-white">
                Video Outputs
              </h3>


              <ul className="mt-4 space-y-2 text-gray-400">


                <li>
                  • SD version (480p)
                </li>


                <li>
                  • HD version (720p)
                </li>


                <li>
                  • UHD version (1080p)
                </li>


                <li>
                  • DASH manifest and streaming segments
                </li>


              </ul>


            </div>





            <div className="rounded-xl border border-white/10 bg-white/5 p-6">


              <h3 className="text-xl font-semibold text-white">
                Audio & Captions
              </h3>


              <ul className="mt-4 space-y-2 text-gray-400">


                <li>
                  • Audio-only extracted output
                </li>


                <li>
                  • English captions
                </li>


                <li>
                  • French captions
                </li>


                <li>
                  • Spanish captions
                </li>


                <li>
                  • Japanese captions
                </li>


                <li>
                  • Mandarin captions
                </li>


                <li>
                  • Korean captions
                </li>


              </ul>


            </div>


          </div>


        </section>








        {/* Challenges */}

        <section className="mt-16">


          <h2 className="text-3xl font-semibold text-white">
            Engineering Challenges & Solutions
          </h2>



          <ul className="mt-6 space-y-3 text-gray-400">


            <li>
              • Designed dynamic workflows supporting videos with unknown
              filenames and variable durations.
            </li>


            <li>
              • Automated cloud processing using event-driven serverless
              components.
            </li>


            <li>
              • Integrated adaptive streaming generation with DASH manifests.
            </li>


            <li>
              • Built automated speech processing workflows for multilingual
              captions.
            </li>


          </ul>


        </section>








        {/* Technical Stack */}

        <section className="mt-16">


          <h2 className="text-3xl font-semibold text-white">
            Technical Stack
          </h2>



          <div className="mt-6 flex flex-wrap gap-3">


            {[
              "Google Cloud Platform",
              "Cloud Storage",
              "Cloud Functions",
              "Cloud Run",
              "Pub/Sub",
              "Eventarc",
              "Transcoder API",
              "Docker",
              "Python",
              "FFmpeg",
              "DASH",
              "HLS",
              "Speech-to-Text",
              "WebVTT Captions",
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
              50+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Videos processed
            </p>

          </div>





          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              3
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Quality profiles (SD/HD/UHD)
            </p>

          </div>





          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              6
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Caption languages supported
            </p>

          </div>





          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              Cloud
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Serverless event-driven architecture
            </p>

          </div>


        </section>

        {/* Source Code */}

        <section className="mt-16">


          <a
            href="https://github.com/ArielleSedoine/cloud-video-processing-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
          >

            View Source Code →

          </a>


        </section>





      </div>


    </main>

  );

}