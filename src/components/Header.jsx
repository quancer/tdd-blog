import { Menu, Search } from "./";
import { MetaBlog } from "./svg";

export function Header() {
  return (
    <div>
      <div className="max-w-[1231px] m-auto py-8">
        <div className="flex justify-between items-center">
          <MetaBlog />
          <Menu />
          <Search />
        </div>
      </div>
    </div>
  );
}
