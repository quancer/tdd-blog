import { Bloglink, Card } from "@/components";
import BlogLayout from "@/components/blogLayout";
export default function Page({ data }) {
  console.log("blog=", data);
  return (
    <div className="max-w-[1231px] m-auto py-8 flex flex-col gap-2">
      <Bloglink />
      <div className="flex justify-center ">
        <div className="flex flex-wrap gap-5 justify-center">
          {data.map((e) => {
            return <Card data={e} />;
          })}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const res = await fetch(`https://dev.to/api/articles`);
  const data = await res.json();
  return { props: { data } };
}
