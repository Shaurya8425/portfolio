import { getAllBlogs } from "../../../lib/blogs";
import Link from "next/link";

export default function BlogListPage() {
  const blogs = getAllBlogs();

  return (
    <div className='mx-auto max-w-4xl'>
      <p className='eyebrow mb-3'>Notes from the build log</p>
      <h1 className='mb-3 text-5xl font-black tracking-tight'>Writing on the web.</h1>
      <p className='mb-12 max-w-2xl text-lg text-[var(--muted)]'>Lessons, experiments, and practical notes from building full-stack products.</p>
      <ul className='space-y-4'>
        {blogs.map((blog) => (
          <li key={blog.slug} className='surface p-6 transition-transform hover:-translate-y-1'>
            <Link
              href={`/blog/${blog.slug}`}
              className='text-2xl font-black text-[var(--foreground)] hover:text-primary-dark dark:hover:text-primary'
            >
              {blog.title}
            </Link>
            <p className='mt-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]'>
              {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className='mt-3 text-[var(--foreground)]/80'>{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
