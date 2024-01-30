import Link from "next/link";
import { useRouter } from "next/router";
export function Menu() {
  const router = useRouter();
  return (
    <ul className="flex gap-10">
      <li>
        <button onClick={() => router.push("/")}>Home</button>
      </li>
      <li>
        <button onClick={() => router.push("/blog")}>Blog</button>
      </li>
      <li>
        <button onClick={() => router.push("/contact")}>Contact</button>
      </li>
    </ul>
  );
}
