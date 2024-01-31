import { Bloglink } from "./index";

export default function BlogLayout({ children }) {
  return (
    <>
      <Bloglink />
      <main>{children}</main>
    </>
  );
}
