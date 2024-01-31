import { Card } from ".";
export function AllBlog({ posts, limit }) {
  console.log("p=", posts, " limit=", limit);
  return (
    <div>
      <div className="max-w-[1231px] m-auto py-8">
        <div className="flex flex-wrap gap-5">
          {posts.map((e, index) => {
            if (index < 9) {
              return <Card data={e} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
