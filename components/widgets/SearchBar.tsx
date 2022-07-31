import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex-center rounded-3xl bg-grey6 overflow-hidden px-3 py-1 border-2 border-grey5 focus-within:border-grey4">
      <input type="text" className="bg-grey6 outline-none text-grey2 pl-2 w-40 sm:w-auto" />
      <Image src="/search-icon.svg" height={30} width={30} alt="search icon" />
    </div>
  );
}
