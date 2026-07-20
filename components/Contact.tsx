import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  HiOutlineDocumentText,
} from "react-icons/hi";


const contacts = [
  {
    title: "LinkedIn",
    description:
      "Connect with me professionally and follow my engineering journey.",
    icon: <FaLinkedin size={28} />,
    link:
      "https://www.linkedin.com/in/arielle-60178832a/",
    label: "Visit LinkedIn",
  },


  {
    title: "GitHub",
    description:
      "Explore my cloud, backend, and distributed systems projects.",
    icon: <FaGithub size={28} />,
    link:
      "https://github.com/ArielleSedoine",
    label: "View GitHub",
  },


  {
    title: "Resume",
    description:
      "Download my latest resume and professional experience.",
    icon: <HiOutlineDocumentText size={30} />,
    link:
      "/Resume.pdf",
    label: "Open Resume",
  },


  {
    title: "Email",
    description:
      "Feel free to contact me for opportunities and collaborations.",
    icon: <FaEnvelope size={28} />,
    link:
      "mailto:your.email@example.com",
    label: "Send Email",
  },

];


export default function Contact() {

  return (

    <section className="px-6 py-24">


      <div className="mx-auto max-w-6xl">


        {/* Header */}

        <div className="max-w-3xl">


          <h1 className="text-5xl font-bold text-white">

            Contact

          </h1>


          <p className="mt-6 text-lg leading-relaxed text-gray-400">

            Interested in cloud engineering, backend development,
            distributed systems, or collaboration opportunities?
            Feel free to reach out.

          </p>


        </div>



        {/* Contact Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2">


          {contacts.map((contact) => (


            <a
              key={contact.title}
              href={contact.link}
              target={
                contact.title === "Resume"
                  ? "_blank"
                  : "_blank"
              }
              rel="noopener noreferrer"
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400/50
                hover:bg-white/10
              "
            >


              <div className="flex items-start gap-5">


                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-400
                  "
                >

                  {contact.icon}

                </div>



                <div>


                  <h2 className="
                    text-2xl
                    font-semibold
                    text-white
                    group-hover:text-blue-400
                    transition
                  ">

                    {contact.title}

                  </h2>



                  <p className="
                    mt-2
                    text-gray-400
                  ">

                    {contact.description}

                  </p>



                  <p className="
                    mt-5
                    text-sm
                    font-medium
                    text-blue-400
                  ">

                    {contact.label} →

                  </p>


                </div>


              </div>


            </a>


          ))}


        </div>


      </div>


    </section>

  );

}