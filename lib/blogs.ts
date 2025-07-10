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
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
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
  const file = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(file);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    contentHtml,
  };
}
