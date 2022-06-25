import React from "react";
import Link from "next/link";

const Nav = () => {
  const navContent = (
    <>
      <Link href="/">
        <a className="">Home</a>
      </Link>
      <Link href="#skills">
        <a className="">Skills and Strength</a>
      </Link>
      <Link className="" href="#About">
        <a className="">About</a>
      </Link>
      <Link href="#portfolios">
        <a>Portfolios</a>
      </Link>
      <Link href="#contact">
        <a className="">Contact</a>
      </Link>
    </>
  );
  return (
    <>
      <header className="shadow-sm">
        <div className="z-10 fixed flex items-center justify-between h-16 px-4 mx-auto w-full bg-gray-800/60">
          <nav className="items-center justify-center hidden space-x-8 text-1xl text-white font-medium lg:flex lg:flex-1 lg:w-0">
            {navContent}
          </nav>
        </div>
        <div className="z-10 absolute border-t border-gray-100 justify-center w-full lg:hidden">
          <nav className="flex items-center justify-center w-full p-4 overflow-x-auto text-sm font-medium text-white">
            {navContent}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
