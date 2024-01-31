import { AllBlog, Header, Highlight, Trending } from "@/components";

export default function Home({ posts, allPost }) {
  console.log("post=", posts, " allpost=", allPost);
  // let b = `w-[516px] h-[600px]`;
  return (
    <div className="flex flex-col gap-25">
      {/* <Header /> */}
      <Highlight data={posts} />
      <Trending posts={posts} />
      <AllBlog posts={allPost} limit={9} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?per_page=5&top=1");
  const posts = await res.json();
  const resPost = await fetch("https://dev.to/api/articles");
  const allPost = await resPost.json();
  return {
    props: {
      posts,
      allPost,
    },
  };
}
