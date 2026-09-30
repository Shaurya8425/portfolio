import { FiDownload, FiEye } from "react-icons/fi";
import { resume } from "../../../config/resume";

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-5xl'>
      <p className='eyebrow mb-3'>The longer version</p>
      <h1 className='mb-6 text-5xl font-black tracking-tight'>Builder at heart,<br /><span className='text-primary-dark'>operator in practice.</span></h1>
      <p className='max-w-3xl text-xl leading-relaxed text-[var(--muted)]'>{resume.objective}</p>
      <div className='mt-8 flex flex-wrap items-center gap-3'>
        <a
          href='/docs/shaurya-yadav-resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-bold hover:bg-black/5 dark:hover:bg-white/10'
        >
          <FiEye className='h-4 w-4' />
          Preview resume
        </a>
        <a
          href='/docs/shaurya-yadav-resume.pdf'
          download='Shaurya-Yadav-Resume.pdf'
          className='inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-black hover:bg-primary-dark'
        >
          <FiDownload className='h-4 w-4' />
          Download PDF
        </a>
        <span className='text-xs text-[var(--muted)]'>PDF · recruiter-ready</span>
      </div>

      <section className='mt-20'><p className='eyebrow mb-3'>Experience</p><h2 className='mb-8 text-3xl font-black'>Where I’ve learned by doing.</h2>{resume.experience.map((item) => <div className='surface p-6 sm:p-8' key={item.company}><div className='flex flex-wrap justify-between gap-3'><div><h3 className='text-2xl font-black'>{item.role}</h3><p className='mt-1 text-primary-dark'>{item.company}</p></div><span className='text-sm text-[var(--muted)]'>{item.period}</span></div><ul className='mt-6 space-y-3 text-[var(--muted)]'>{item.details.map((detail) => <li key={detail}>↳ {detail}</li>)}</ul></div>)}</section>

      <section className='mt-20'><p className='eyebrow mb-3'>Education</p><h2 className='mb-8 text-3xl font-black'>The foundations.</h2><div className='grid gap-4 md:grid-cols-3'>{resume.education.map((item) => <div className='surface p-5' key={item.degree}><h3 className='font-black'>{item.degree}</h3><p className='mt-2 text-sm text-[var(--muted)]'>{item.school}</p><p className='mt-5 text-xs font-bold uppercase tracking-wider text-primary-dark'>{item.period} {item.result && `· ${item.result}`}</p></div>)}</div></section>

      <section className='mt-20'><p className='eyebrow mb-3'>Technical toolkit</p><h2 className='mb-8 text-3xl font-black'>Tools I reach for.</h2><div className='grid gap-4 sm:grid-cols-2'>{Object.entries(resume.skills).map(([category, skills]) => <div className='surface p-5' key={category}><h3 className='font-black'>{category}</h3><p className='mt-3 leading-relaxed text-[var(--muted)]'>{skills.join(" · ")}</p></div>)}</div></section>

      <section className='mt-20'><p className='eyebrow mb-3'>Leadership & community</p><h2 className='mb-8 text-3xl font-black'>Make the room better.</h2><div className='surface p-6 sm:p-8'><ul className='space-y-4 text-[var(--muted)]'>{resume.leadership.map((item) => <li key={item}>↳ {item}</li>)}</ul></div></section>
    </div>
  );
}
