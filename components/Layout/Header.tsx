import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../widgets/Logo";
import SearchBar from "../widgets/SearchBar";

export default function Header() {
  return (
    <header className="flex justify-between items-center shadow-lg sticky top-0 z-10 bg-grey5 px-2 py-2 sm:px-4 md:px-6">
      <Logo />
      <nav className="hidden space-x-8 md:flex">
        <Link href="/courses">
          <a className="uppercase opacity-75 font-semibold hover:opacity-95">Courses</a>
        </Link>
        <Link href="/blogs">
          <a className="uppercase opacity-75 font-semibold hover:opacity-95">Blogs</a>
        </Link>
      </nav>
      <div className="flex space-x-3">
        <SearchBar />
        <div className="flex-center rounded-full">
          <Image
            src="/user-icon.svg"
            height={40}
            width={40}
            alt="namaste dev logo"
          />
        </div>
      </div>
    </header>
  );
}
