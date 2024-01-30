export function Trending(props) {
  const { posts } = props;
  return (
    <div>
      <div className="max-w-[1231px] m-auto py-8">
        <div className="max-w-[1231px] m-auto py-8 flex gap-5">
          {posts?.map((e, index) => {
            if (index != 0) {
              return (
                <div
                  style={{
                    backgroundImage: `url(${e.cover_image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "500px",
                    height: "600px",
                  }}
                  className="flex gap flex-col gap-3 relative items-end p-7 border w-[289px] h-[320px]"
                >
                  <div className="z-2">
                    <span>{index + ". " + e.title}</span>
                    {/* <p>{e.description}</p> */}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
