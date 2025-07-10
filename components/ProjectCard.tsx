type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='border rounded-xl p-6 shadow hover:shadow-lg transition'>
      <h3 className='text-xl font-semibold text-primary mb-2'>
        {project.title}
      </h3>
      <p className='text-gray-700 mb-3'>{project.description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {project.tech.map((t) => (
          <span key={t} className='text-xs bg-gray-200 px-2 py-1 rounded'>
            {t}
          </span>
        ))}
      </div>
      <div className='flex gap-4'>
        <a
          href={project.github}
          className='text-sm text-primary underline hover:text-primary-dark'
          target='_blank'
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className='text-sm text-primary underline hover:text-primary-dark'
            target='_blank'
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
