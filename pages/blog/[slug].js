import { getAllPosts } from "../../lib/data";

export default function Post({ title, date, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{date}</div>
      <div>{content}</div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);

  return {
    props: {
      ...data,
      date: data.date.toString(),
      content,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })), // See the "paths" section below
    fallback: false,
  };
}
