import ProjectCard from "../../../components/ProjectCard";

const projects = [
  {
    title: "HostelMS",
    description:
      "A full-stack app with student registration, complaints, fees, and room allocation.",
    tech: ["React", "Hono", "PostgreSQL", "Render", "Vercel"],
    github: "https://github.com/Shaurya8425/hostelMS.git",
    demo: "https://hostelms.byshaurya.com",
    image: "/projects/hostelms.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    period: "July–August 2025",
    highlights: ["JWT authentication and role-based workflows", "Designed for railway hostel operations"],
  },
  {
    title: "InkFlow",
    description: "Your space to write, connect, and share stories.",
    tech: ["Node.js", "React", "Tailwind", "Cloudflare", "Vercel"],
    github: "https://github.com/Shaurya8425/Blogs.git",
    demo: "https://inkflow.byshaurya.com",
    image: "/projects/inkflow.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    period: "February–May 2025",
    highlights: ["Normalized PostgreSQL schema and REST APIs", "Cloudflare Workers edge deployment"],
  },
  {
    title: "BGRemoveIO",
    description: "A 100% private, client-side tool to remove backgrounds or extract signatures/text in your browser.",
    tech: ["Astro", "ONNX Runtime Web", "Tailwind", "TypeScript", "HTML5 Canvas"],
    github: "https://github.com/Shaurya8425/bg-remover/blob/master/README.md",
    demo: "http://bgremove.byshaurya.com",
    image: "/projects/bgremove.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    period: "2025",
    highlights: ["100% client-side processing", "ONNX Runtime Web and Canvas pipeline"],
  },
  // Add more...
];

export default function ProjectsPage() {
  return (
    <div className='mx-auto max-w-6xl'>
      <p className='eyebrow mb-3'>Selected work</p>
      <h2 className='mb-3 text-5xl font-black tracking-tight'>Things I’ve shipped.</h2>
      <p className='mb-12 max-w-xl text-lg text-[var(--muted)]'>A handful of projects where product thinking, engineering, and a healthy amount of iteration meet.</p>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
