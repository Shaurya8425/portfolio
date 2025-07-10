import ProjectCard from "../../../components/ProjectCard";

const projects = [
  {
    title: "HostelMS",
    description:
      "A full-stack app with student registration, complaints, fees, and room allocation.",
    tech: ["React", "Hono", "PostgreSQL", "Render", "Vercel"],
    github: "https://github.com/Shaurya8425/hostelMS.git",
    demo: "https://hostel-ms-psi.vercel.app",
  },
  {
    title: "InkFlow",
    description: "Your space to write, connect, and share stories.",
    tech: ["Node.js", "React", "Tailwind", "Cloudflare", "Vercel"],
    github: "https://github.com/Shaurya8425/Blogs.git",
    demo: "https://blogs-pi-taupe.vercel.app",
  },
  // Add more...
];

export default function ProjectsPage() {
  return (
    <div>
      <h2 className='text-3xl font-bold text-primary mb-6 text-center'>
        Projects
      </h2>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
