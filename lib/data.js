import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "_content");
export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);
  console.log("contentDirectory", contentDirectory);
  return {};
}

export const blogPosts = [
  {
    title: "first content title",
    slug: "post-1",
    content: "첫번째 샘플 데이터",
  },
  {
    title: "second content title",
    slug: "post-2",
    content: "2번째 샘플 데이터",
  },
  {
    title: "third content title",
    slug: "post-3",
    content: "3번째 샘플 데이터",
  },
];
