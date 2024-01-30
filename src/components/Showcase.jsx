export function Showcase(props) {
  const { data } = props;
  console.log("showcase=", data);
  return (
    <div>
      <div className="max-w-[1231px] m-auto py-8">
        <div
          style={{
            backgroundImage: `url(${data.cover_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="max-w-[1216px] h-[600px] relative"
        >
          <div className="p-10 bg-white absolute">
            <div>
              {data.tag_list?.map((e, index) => {
                return <div>{e}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
