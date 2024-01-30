import { Header } from "@/components";

export default function Home({ posts }) {
  console.log(posts);
  // let b = `w-[516px] h-[600px]`;
  return (
    <div className="flex flex-col gap-25">
      <Header />
      <div>
        <div className="max-w-[1231px] m-auto py-8">
          <div className=""></div>
        </div>
      </div>
      <div></div>
      <div>
        <div className="max-w-[1231px] m-auto py-8">
          <div className="max-w-[1231px] m-auto py-8">
            {posts?.map((e, index) => {
              if (index != 0) {
                return (
                  <div>
                    <span>{index + ". " + e.title}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?per_page=5");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
