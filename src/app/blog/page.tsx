import { getAllBlogs } from "../../../lib/blogs";
import Link from "next/link";

export default function BlogListPage() {
  const blogs = getAllBlogs();

  return (
    <div>
      <h2 className='text-3xl font-bold text-primary mb-6'>Blog</h2>
      <ul className='space-y-6'>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              href={`/blog/${blog.slug}`}
              className='text-xl text-primary hover:underline'
            >
              {blog.title}
            </Link>
            <p className='text-sm text-gray-500'>
              {new Date(blog.date).toLocaleDateString()}
            </p>
            <p className='text-gray-700'>{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
