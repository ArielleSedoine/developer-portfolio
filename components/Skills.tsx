const skillCategories = [
  {
    title: "Backend Development",
    description:
      "Building scalable backend systems, APIs, and real-time communication services.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Microservices",
      "Asynchronous Programming",
    ],
  },


  {
    title: "Cloud Platforms",
    description:
      "Designing and deploying cloud-native applications using managed services.",
    skills: [
      "Google Cloud Platform",
      "Cloud Run",
      "Cloud Functions",
      "Google Kubernetes Engine (GKE)",
      "Cloud Storage",
      "Pub/Sub",
    ],
  },


  {
    title: "DevOps & Infrastructure",
    description:
      "Automating deployments and managing containerized cloud environments.",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "Linux",
      "CI/CD Pipelines",
      "Container Orchestration",
    ],
  },


  {
    title: "Streaming & Media Systems",
    description:
      "Developing low-latency streaming platforms and distributed media workflows.",
    skills: [
      "MPEG-DASH",
      "HLS",
      "FFmpeg",
      "Speech-to-Text",
      "Media Processing",
      "Adaptive Streaming",
    ],
  },


  {
    title: "Software Engineering",
    description:
      "Applying engineering principles to build reliable and maintainable systems.",
    skills: [
      "Object-Oriented Programming",
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Testing",
      "Debugging",
    ],
  },


];


export default function Skills() {

  return (

    <section className="px-6 py-24">


      <div className="mx-auto max-w-6xl">


        {/* Header */}

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold text-white">
            Technical Skills
          </h1>


          <p className="mt-6 text-lg leading-relaxed text-gray-400">

            Technologies and engineering concepts used to design,
            develop, deploy, and optimize scalable cloud-native systems.

          </p>


        </div>



        {/* Skill Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/50
              "
            >


              <h2 className="text-2xl font-semibold text-white">

                {category.title}

              </h2>



              <p className="mt-4 leading-relaxed text-gray-400">

                {category.description}

              </p>



              <div className="mt-6 flex flex-wrap gap-3">


                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-black/30
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >

                    {skill}

                  </span>

                ))}


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}