import Projects from "@/components/Projects";


export const metadata = {
  title: "Projects | Arielle Sedoine",
  description:
    "Explore Arielle Sedoine's projects including AI Gateway, cloud video processing pipelines, dynamic ad insertion, and adaptive streaming systems.",
};


export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Projects />
    </main>
  );
}