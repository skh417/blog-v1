import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(contentDirectory, filename),
      "utf-8"
    );
    const { data, content } = matter(fileContent);

    return {
      data,
      content,
      slug,
    };
  });
}
