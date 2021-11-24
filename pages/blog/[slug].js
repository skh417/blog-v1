import { blogPosts, getAllPosts } from "../../lib/data";

export default function Post({ title, content }) {
  return <div>{title ? title : "제목없음"}</div>;
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
  getAllPosts();
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })), // See the "paths" section below
    fallback: false,
  };
}
