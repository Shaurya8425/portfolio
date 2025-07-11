import { getBlogBySlug } from "../../../../lib/blogs";
import type { JSX } from "react"; // ✅ fixes JSX not found

export async function generateStaticParams() {
  const { getAllBlogs } = await import("../../../../lib/blogs");
  return getAllBlogs().map((b) => ({ slug: b.slug })) satisfies {
    slug: string;
  }[];
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-primary mb-2'>{blog.title}</h1>
      <p className='text-sm text-gray-500 mb-6'>
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
      />
    </div>
  );
};

export default BlogPostPage satisfies (props: {
  params: { slug: string };
}) => Promise<JSX.Element>;
