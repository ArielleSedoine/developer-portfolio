//import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
//import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arielle Sedoine",
            jobTitle: "Cloud Software Engineer",
            url: "https://arielle-sedoine.dev",
            sameAs: [
              "https://github.com/ArielleSedoine",
              "https://www.linkedin.com/in/arielle-60178832a/",
            ],
          }),
        }}
      />

      <main>
        <Hero />
      </main>
    </>
  );
}