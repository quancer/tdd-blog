import { useRouter } from "next/router";

export function Bloglink() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl pl-4">All blog post</h1>
      <ul className="flex">
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog");
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog/design");
            }}
          >
            Design
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog/travel");
            }}
          >
            Travel
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog/fashion");
            }}
          >
            Fashion
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog/technology");
            }}
          >
            Technology
          </button>
        </li>
        <li>
          <button
            className="btn btn-ghost"
            onClick={() => {
              router.push("/blog/branding");
            }}
          >
            Branding
          </button>
        </li>
      </ul>
    </div>
  );
}
