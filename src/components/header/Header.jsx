import SearchBox from "../search_box/SearchBox";
export default function Header() {
  return (
    <div className="flex justify-between items-center w-full h-10 bg-[#fff]">
      <SearchBox />
    </div>
  );
}
