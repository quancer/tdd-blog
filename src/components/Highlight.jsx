import { useState } from "react";

export function Highlight(props) {
  const { data } = props;
  // let [count, setCount] = useState(0);
  let count = 0;
  // console.log("showcase=", data);
  function add() {
    count = (count + 1) % 4;
    console.log("count=", count);
  }
  function sub() {
    if (count == 0) count = 4;
    count = (count - 1) % 4;
    console.log("count=", count);
  }

  return (
    <div className=" flex">
      <div className="max-w-[1231px] m-auto py-8 ">
        <div className="flex flex-col gap-10 ">
          <div className="carousel w-full ">
            {data.map((e, index) => {
              if (index < 4) {
                return (
                  <div
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                  >
                    <img src={e?.social_image} alt="" className="w-full" />
                  </div>
                );
              }
            })}
            <div className="flex justify-end">
              <div className=" flex justify-between transform -translate-y-1/2">
                <a
                  onClick={sub}
                  href={`#slide${count - 1}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${count + 1}`}
                  className="btn btn-circle"
                  onClick={add}
                >
                  ❯
                </a>
                {/* <button
                // href={`#slide${count}`}
                className="btn btn-circle"
                onClick={sum}
              >
                ❮
              </button>
              <button
                // href={`#slide${count}`}
                className="btn btn-circle"
                onClick={add}
              >
                ❯
              </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div
          style={{
            backgroundImage: `url(${data.cover_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="max-w-[1216px] h-[600px] relative"
        >
          
        </div> */}
      </div>
    </div>
  );
}
