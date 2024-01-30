export function AllBlog({ posts, limit }) {
  console.log("p=", posts, " limit=", limit);
  return (
    <div>
      <div className="max-w-[1231px] m-auto py-8">
        <div className="flex flex-wrap gap-5">
          {posts.map((e, index) => {
            if (index < 9) {
              return (
                <div className="w-[360px] h-[456px] p-4 rounded-[12px] border flex flex-col gap-4">
                  <img src={e.social_image} alt="" />
                  <h2>{e.title}</h2>
                  <p>{e.description}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
