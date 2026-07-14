export default function About() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          About Me
        </h1>


        {/* Introduction */}
        <div className="mt-10 max-w-4xl space-y-6">

          <p className="text-lg leading-relaxed text-gray-400">

            I am a Cloud Software Engineer specializing in the design and
            development of cloud-native distributed systems, backend platforms,
            and real-time communication architectures.

          </p>


          <p className="text-lg leading-relaxed text-gray-400">

            My experience focuses on building scalable software solutions using
            Python, FastAPI, Docker, Kubernetes, and Google Cloud Platform.
            I design reliable systems that combine performance, scalability,
            and maintainability across distributed environments.

          </p>


          <p className="text-lg leading-relaxed text-gray-400">

            I am particularly interested in distributed systems, low-latency
            streaming technologies, event-driven architectures, and cloud
            platforms that enable real-time processing at scale.

          </p>

        </div>



        {/* Technical Highlights */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-3xl font-bold text-blue-400">
              &lt;200ms
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Real-time processing latency optimized for interactive workloads
            </p>

          </div>




          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-3xl font-bold text-blue-400">
              100+
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Concurrent users supported through scalable architectures
            </p>

          </div>





          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-3xl font-bold text-blue-400">
              5+
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Containerized microservices deployed in cloud environments
            </p>

          </div>





          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-3xl font-bold text-blue-400">
              GCP
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Cloud-native deployments using Kubernetes and managed services
            </p>

          </div>


        </div>



        {/* Areas of Interest */}
        <div className="mt-16">

          <h2 className="text-2xl font-semibold text-white">
            Areas of Expertise
          </h2>


          <div className="mt-6 grid gap-4 md:grid-cols-3">


            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

              <h3 className="font-semibold text-white">
                Distributed Systems
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Designing scalable architectures with reliable
                service-to-service communication.
              </p>

            </div>



            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

              <h3 className="font-semibold text-white">
                Cloud Engineering
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Building and deploying containerized applications using
                GCP, Kubernetes, and Cloud Run.
              </p>

            </div>




            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

              <h3 className="font-semibold text-white">
                Real-Time Systems
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Developing low-latency streaming platforms and event-driven
                processing pipelines.
              </p>

            </div>


          </div>

        </div>


      </div>

    </section>
  );
}