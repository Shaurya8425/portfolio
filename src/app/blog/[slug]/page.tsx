import { getAllBlogs, getBlogBySlug } from "../../../../lib/blogs";

export function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ IMPORTANT

  const blog = await getBlogBySlug(slug);

  return (
    <article className='mx-auto max-w-3xl'>
      <p className='eyebrow mb-4'>Build log</p>
      <h1 className='text-4xl font-black tracking-tight sm:text-6xl'>{blog.title}</h1>
      <p className='mt-4 text-sm font-bold uppercase tracking-wider text-[var(--muted)]'>
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <div
        className='prose mt-12 max-w-none'
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </article>
  );
}