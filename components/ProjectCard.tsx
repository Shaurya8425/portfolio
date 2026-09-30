import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Image from "next/image";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  period?: string;
  highlights?: string[];
  image?: string;
  blurDataURL?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className='surface group overflow-hidden transition-transform hover:-translate-y-1'>
      <div className='relative h-56 overflow-hidden border-b border-[var(--line)] bg-[#dfe7dc] dark:bg-[#202b24]'>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} homepage preview`}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
            placeholder={project.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={project.blurDataURL}
          />
        ) : (
          <div className='flex h-full items-center justify-center text-sm text-[var(--muted)]'>Preview unavailable</div>
        )}
        <a href={project.demo} target='_blank' rel='noopener noreferrer' className='absolute right-4 top-4 rounded-full bg-white/90 p-2 text-black shadow-sm backdrop-blur hover:bg-primary' aria-label={`Open ${project.title} live demo`}>
          <FiArrowUpRight className='h-4 w-4' />
        </a>
      </div>
      <div className='p-6'>
        <div className='flex items-start justify-between gap-4'>
          <div><p className='eyebrow mb-2'>{project.period ?? "Project"}</p><h3 className='text-2xl font-black'>{project.title}</h3></div>
          <a href={project.github} target='_blank' rel='noopener noreferrer' aria-label={`${project.title} GitHub repository`} className='text-[var(--muted)] hover:text-primary-dark'><FiGithub className='h-5 w-5' /></a>
        </div>
        <p className='mt-3 text-[var(--muted)]'>{project.description}</p>
        {project.highlights && <ul className='mt-4 space-y-2 text-sm text-[var(--muted)]'>{project.highlights.map((highlight) => <li key={highlight} className='flex gap-2'><span className='text-primary-dark'>↳</span>{highlight}</li>)}</ul>}
        <div className='mt-5 flex flex-wrap gap-2'>{project.tech.map((tech) => <span key={tech} className='rounded-full bg-black/5 px-2.5 py-1 text-xs font-bold dark:bg-white/10'>{tech}</span>)}</div>
      </div>
    </article>
  );
}
