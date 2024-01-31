export function Card({ data }) {
  console.log("list=", data);
  return (
    <div className="w-[360px] h-[456px] p-4 rounded-[12px] border flex flex-col gap-4">
      <img src={data.social_image} alt="" className="rounded-[12px] border" />
      <div className="flex gap-2 flex-wrap">
        {data.tag_list.map((e) => {
          return <p className="badge bg-neutral-content">{e}</p>;
        })}
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}
