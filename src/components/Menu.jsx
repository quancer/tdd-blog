import Link from "next/link";

export function Menu() {
  return (
    <ul className="flex gap-10">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Blog">Blog</Link>
      </li>
      <li>
        <Link href="/Contact">Contact</Link>
      </li>
    </ul>
  );
}
