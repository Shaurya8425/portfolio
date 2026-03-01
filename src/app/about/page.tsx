export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Cloudflare"
  ];

  return (
    <div className='max-w-3xl mx-auto'>
      <h2 className='text-3xl font-bold text-primary mb-6 text-center'>
        About Me
      </h2>
      <p className='text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed'>
        Hey! I'm Shaurya, a CSE undergrad passionate about building real-world
        applications that solve meaningful problems. I love working across the
        full stack, exploring new tech.
      </p>

      <h3 className='text-xl font-semibold text-primary mb-2'>
        Skills & Tools
      </h3>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill) => (
          <span key={skill} className='bg-gray-100 dark:text-black px-3 py-1 rounded text-sm'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
