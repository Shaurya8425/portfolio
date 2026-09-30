import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiStar } from "react-icons/fi";

const featured = [
  { number: "01", title: "HostelMS", text: "A calmer way to manage hostel life — from room allocation to fees and complaints.", tags: "React · Hono · PostgreSQL" },
  { number: "02", title: "InkFlow", text: "A focused publishing space for people who want to write, connect, and share stories.", tags: "Next.js · Tailwind · Cloudflare" },
];

export default function Home() {
  return (
    <div className='mx-auto max-w-6xl'>
      <section className='grid-paper surface overflow-hidden px-6 py-14 sm:px-14 sm:py-20'>
        <div className='max-w-4xl'>
          <p className='eyebrow mb-6 flex items-center gap-2'><FiStar className='h-4 w-4 text-primary-dark' /> Developer · builder · curious human</p>
          <h1 className='text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-8xl'>I turn messy ideas into <span className='text-primary-dark'>useful</span> digital products.</h1>
          <p className='mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]'>Hey, I’m Shaurya — a CSE undergrad and full-stack developer who cares about the details between a good idea and a great experience.</p>
          <div className='mt-9 flex flex-wrap gap-3'><Link href='/projects' className='rounded-full bg-primary px-5 py-3 text-sm font-black text-black hover:bg-primary-dark'>Explore my work <FiArrowUpRight className='ml-2 inline h-4 w-4' /></Link><Link href='/contact' className='rounded-full border border-[var(--line)] px-5 py-3 text-sm font-bold hover:bg-black/5 dark:hover:bg-white/10'>Let’s talk</Link><a href='/docs/shaurya-yadav-resume.pdf' target='_blank' rel='noopener noreferrer' className='rounded-full border border-[var(--line)] px-5 py-3 text-sm font-bold hover:bg-black/5 dark:hover:bg-white/10'>View resume ↗</a></div>
        </div>
        <div className='mt-16 flex flex-wrap items-center gap-6 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]'><span className='font-bold text-[var(--foreground)]'>Currently exploring</span><span>Distributed systems</span><span>Design systems</span><span>Open source</span><div className='ml-auto flex gap-4'><a href='https://github.com/Shaurya8425' aria-label='GitHub' target='_blank' rel='noreferrer'><FiGithub className='h-5 w-5 hover:text-primary-dark' /></a><a href='https://www.linkedin.com/in/shaurya-yadav-57a96722a/'><FiLinkedin className='h-5 w-5 hover:text-primary-dark' /></a><a href='mailto:shaurya.y321@gmail.com' aria-label='Email'><FiMail className='h-5 w-5 hover:text-primary-dark' /></a></div></div>
      </section>
      <section className='py-24'><div className='mb-8 flex items-end justify-between'><div><p className='eyebrow mb-3'>Selected work</p><h2 className='text-3xl font-black tracking-tight sm:text-5xl'>Small team energy.<br />Big product thinking.</h2></div><Link href='/projects' className='hidden text-sm font-bold underline underline-offset-4 sm:block'>See all projects <FiArrowUpRight className='inline h-4 w-4' /></Link></div><div className='grid gap-5 md:grid-cols-2'>{featured.map((item) => <Link href='/projects' key={item.number} className='surface group p-7 transition-transform hover:-translate-y-1'><div className='flex justify-between text-sm text-[var(--muted)]'><span>{item.number}</span><FiArrowUpRight className='h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' /></div><h3 className='mt-14 text-3xl font-black'>{item.title}</h3><p className='mt-3 leading-relaxed text-[var(--muted)]'>{item.text}</p><p className='mt-8 text-xs font-bold uppercase tracking-widest text-primary-dark'>{item.tags}</p></Link>)}</div></section>
    </div>
  );
}
