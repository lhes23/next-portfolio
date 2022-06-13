import React from "react";

const Nav = () => {
  return (
    <>
      {/*
    This component uses @tailwindcss/forms
  
    yarn add @tailwindcss/forms
    npm install @tailwindcss/forms
  
    plugins: [require('@tailwindcss/forms')]
  */}
      <header className="shadow-sm">
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <nav className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
            <a className="text-gray-900" href>
              About
            </a>
            <a className="text-gray-900" href>
              Blog
            </a>
            <a className="text-gray-900" href>
              Projects
            </a>
            <a className="text-gray-900" href>
              Contact
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
            <a className="flex-shrink-0 pl-4 text-gray-900" href>
              About
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href>
              Blog
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href>
              Projects
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href>
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
