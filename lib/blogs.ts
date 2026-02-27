import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism-plus";

const blogDir = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md")); // ✅ ONLY markdown

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");

    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
    };
  });
}

export async function getBlogBySlug(slug: string) {
  if (!slug) {
    throw new Error("Slug is undefined in getBlogBySlug");
  }

  const fullPath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog file not found for slug: ${slug}`);
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);

  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    contentHtml: processedContent.toString(),
  };
}
