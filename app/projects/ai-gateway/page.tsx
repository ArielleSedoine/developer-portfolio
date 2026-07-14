import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "AI Gateway - Real-Time Audio Streaming | Arielle Sedoine",
  description:
    "Cloud-native real-time audio streaming platform built with Python, FastAPI, WebSockets, Docker, Kubernetes, and Google Cloud.",
};


export default function AIGatewayPage() {

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

        <div className="mt-10">


          <h1 className="text-4xl font-bold text-white md:text-6xl">

            AI Gateway -
            <span className="text-blue-400">
              {" "}Real-Time Audio Streaming
            </span>

          </h1>



          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-400">

            A cloud-native real-time audio processing platform designed
            for low-latency AI communication. The system enables scalable
            audio streaming, distributed processing, and real-time
            communication between clients and backend services.

          </p>


        </div>





        {/* Demo */}

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">


          <Image
            src="/ai-gateway.gif"
            alt="AI Gateway real-time streaming demo"
            width={1200}
            height={700}
            className="rounded-xl"
          />


        </div>





        {/* Overview */}

        <section className="mt-16">


          <h2 className="text-3xl font-semibold text-white">
            Overview
          </h2>



          <p className="mt-5 leading-relaxed text-gray-400">

            The AI Gateway acts as a distributed communication layer
            between audio clients and AI processing services. It manages
            real-time streams using WebSockets while ensuring efficient
            processing and scalability through cloud-native infrastructure.

          </p>


        </section>





        {/* System Architecture */}

        <section className="mt-16">

          <h2 className="text-3xl font-semibold text-white">
            System Architecture
          </h2>


          {/* Architecture Diagram */}

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

            <Image
              src="/ai-gateway-architecture.png"
              alt="AI Gateway System Architecture"
              width={1200}
              height={700}
              className="rounded-xl"
            />

          </div>



          {/* Architecture Workflow */}

          <div className="mt-8 space-y-4 text-gray-400">

            <p>
              <span className="font-medium text-white">
                1. Client Connection:
              </span>{" "}
              Clients establish secure WebSocket connections to stream audio
              frames in real time.
            </p>


            <p>
              <span className="font-medium text-white">
                2. AI Gateway:
              </span>{" "}
              The gateway authenticates requests, manages active sessions,
              performs routing, and distributes audio streams across
              backend AI services.
            </p>


            <p>
              <span className="font-medium text-white">
                3. Distributed AI Services:
              </span>{" "}
              Independent microservices process speech recognition,
              translation, text generation, and speech synthesis
              concurrently.
            </p>


            <p>
              <span className="font-medium text-white">
                4. Response Aggregation:
              </span>{" "}
                AI responses are synchronized and streamed back to the client
                with end-to-end latency below 200 ms.
            </p>


            <p>
              <span className="font-medium text-white">
                5. Cloud Deployment:
              </span>{" "}
                All services are containerized with Docker and deployed on
                Google Kubernetes Engine (GKE) and Cloud Run to provide
                automatic scaling and high availability.
            </p>

          </div>



          {/* Engineering Highlights */}

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                Engineering Challenges
              </h3>

              <ul className="mt-4 space-y-2 text-gray-400">

                <li>
                  • Maintaining end-to-end latency below 200 ms.
                </li>

                <li>
                  • Supporting 100+ concurrent users.
                </li>

                <li>
                  • Efficient routing of bidirectional WebSocket streams.
                </li>

                <li>
                  • Synchronizing distributed AI microservices.
                </li>

              </ul>

            </div>



          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-xl font-semibold text-white">
              Solutions
            </h3>

              <ul className="mt-4 space-y-2 text-gray-400">

                <li>
                  • Asynchronous processing with Python and FastAPI.
                </li>

                <li>
                  • Distributed microservice architecture.
                </li>

                <li>
                  • Containerized deployment using Docker and Kubernetes.
                </li>

                <li>
                  • Horizontal autoscaling on GKE and Cloud Run.
                </li>

              </ul>

            </div>

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
              "WebSockets",
              "Docker",
              "Kubernetes",
              "GKE",
              "Cloud Run",
              "Google Cloud Platform",
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

        <section className="mt-16 grid gap-6 md:grid-cols-3">


          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              &lt;200ms
            </h3>

            <p className="mt-2 text-gray-400">
              End-to-end latency optimization
            </p>

          </div>



          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              100+
            </h3>

            <p className="mt-2 text-gray-400">
              Concurrent users supported
            </p>

          </div>




          <div className="rounded-xl border border-white/10 bg-white/5 p-6">

            <h3 className="text-3xl font-bold text-blue-400">
              5+
            </h3>

            <p className="mt-2 text-gray-400">
              Containerized microservices
            </p>

          </div>


        </section>





        {/* GitHub */}

        <section className="mt-16">


          <a
            href="https://github.com/ArielleSedoine"
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