import { SearchSvg } from "./svg";

export function Search() {
  return (
    <div className="bg-[#F4F4F5] flex items-center gap-3 p-2 pl-4 rounded-[5px]">
      <input
        type="text"
        className="bg-inherit border-none	p-1"
        placeholder="Search"
      />
      <SearchSvg />
    </div>
  );
}
