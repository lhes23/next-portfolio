import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <header className="shadow-sm">
        <div className="z-10 absolute flex items-center justify-between h-16 px-4 mx-auto w-full">
          <nav className="items-center justify-center hidden space-x-8 text-1xl text-white font-medium lg:flex lg:flex-1 lg:w-0">
            <Link className="" href="#About">
              About
            </Link>
            <a className="" href="">
              Blog
            </a>
            <a className="" href="">
              Projects
            </a>
            <a className="" href="">
              Contact
            </a>
          </nav>
        </div>
        <div className="z-10 absolute border-t border-gray-100 justify-center w-full lg:hidden">
          <nav className="flex items-center justify-center w-full p-4 overflow-x-auto text-sm font-medium text-white">
            <a className="flex-shrink-0 pl-4" href="">
              About
            </a>
            <a className="flex-shrink-0 pl-4" href="">
              Blog
            </a>
            <a className="flex-shrink-0 pl-4" href="">
              Projects
            </a>
            <a className="flex-shrink-0 pl-4" href="">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
