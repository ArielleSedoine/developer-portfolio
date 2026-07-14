export default function Experience() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Professional Experience
        </h1>


        {/* Vosyn Experience */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">


          <div className="flex flex-col justify-between gap-4 md:flex-row">

            <div>

              <h2 className="text-2xl font-semibold text-white">
                Cloud Software Engineer
              </h2>

              <p className="mt-1 text-blue-400">
                Vosyn
              </p>

            </div>


            <p className="text-gray-400">
              Sep 2024 - Present
            </p>


          </div>



          <p className="mt-6 leading-relaxed text-gray-400">

            Designed and deployed cloud-native distributed systems for
            real-time audio and video processing using Python, FastAPI,
            and WebSockets. Focused on scalable backend architectures,
            low-latency communication, and cloud infrastructure.

          </p>



          {/* Responsibilities */}

          <ul className="mt-6 space-y-3 text-gray-400">


            <li>
              • Developed backend services supporting real-time communication
              workloads with end-to-end latency below 200ms.
            </li>


            <li>
              • Built and deployed 5+ containerized microservices using Docker
              within Linux-based cloud environments, enabling scalable execution
              across GKE and Cloud Run.
            </li>


            <li>
              • Designed event-driven architectures supporting concurrent
              real-time audio/video processing workloads for 100+ users.
            </li>


            <li>
              • Implemented REST APIs and WebSocket communication layers for
              distributed service integration.
            </li>


            <li>
              • Improved system reliability through debugging, performance
              optimization, testing, and distributed system design.
            </li>


            <li>
              • Contributed to CI/CD workflows and cloud deployment automation
              for production-ready applications.
            </li>


          </ul>



          {/* Technologies */}

          <div className="mt-8 flex flex-wrap gap-3">


            {[
              "Python",
              "FastAPI",
              "WebSockets",
              "Docker",
              "Kubernetes",
              "GKE",
              "Cloud Run",
              "Distributed Systems",
            ].map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>

            ))}


          </div>



          {/* Metrics */}

          <div className="mt-10 grid gap-5 sm:grid-cols-3">


            <div className="rounded-xl border border-white/10 p-5">

              <h3 className="text-3xl font-bold text-blue-400">
                &lt;200ms
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Real-time processing latency
              </p>

            </div>



            <div className="rounded-xl border border-white/10 p-5">

              <h3 className="text-3xl font-bold text-blue-400">
                100+
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Concurrent users supported
              </p>

            </div>



            <div className="rounded-xl border border-white/10 p-5">

              <h3 className="text-3xl font-bold text-blue-400">
                5+
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Cloud-native microservices
              </p>

            </div>


          </div>


        </div>





        {/* InterRent Experience */}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">


          <div className="flex flex-col justify-between gap-4 md:flex-row">


            <div>

              <h2 className="text-2xl font-semibold text-white">
                Automation Engineering Intern
              </h2>

              <p className="mt-1 text-blue-400">
                InterRent REIT
              </p>

            </div>


            <p className="text-gray-400">
              Feb 2024 - Mar 2024
            </p>


          </div>



          <p className="mt-6 leading-relaxed text-gray-400">

            Supported the integration, validation, and deployment of
            industrial automation control systems while contributing to
            reliability improvements and troubleshooting activities.

          </p>




          <ul className="mt-6 space-y-3 text-gray-400">


            <li>
              • Supported integration and deployment of industrial automation
              control systems across 10+ automated components.
            </li>


            <li>
              • Performed system validation and troubleshooting activities
              across 50+ test scenarios to improve reliability.
            </li>


            <li>
              • Contributed to electrical control integration and building
              automation projects.
            </li>


          </ul>



          <div className="mt-8 flex flex-wrap gap-3">


            {[
              "Industrial Automation",
              "System Validation",
              "Troubleshooting",
              "Control Systems",
            ].map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>

            ))}


          </div>



        </div>


      </div>

    </section>
  );
}