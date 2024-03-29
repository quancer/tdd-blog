import { Header } from "@/components";

export default function Page({ posts }) {
  return (
    <div>
      <div>{"contact"}</div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
