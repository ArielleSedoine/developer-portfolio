import Experience from "@/components/Experience";


export const metadata = {
  title: "Experience | Arielle Sedoine",
  description:
    "Professional experience building cloud-native distributed systems, real-time platforms, and automation solutions.",
};


export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24">
      <Experience />
    </main>
  );
}