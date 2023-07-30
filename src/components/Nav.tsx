import React from "react"
import Link from "next/link"

const Nav = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    // { title: "Skills", url: "#skills" },
    { title: "About", url: "#about" },
    { title: "Experiences", url: "#experiences" },
    { title: "Portfolios", url: "#portfolios" },
    // { title: "Info", url: "#info" },
    { title: "Contact", url: "#contact" }
  ]

  const navContent = (
    <>
      {navLinks?.map((navLink, i) => (
        <Link key={i} href={navLink.url} className={styles.navLink}>
          {navLink.title}
        </Link>
      ))}
    </>
  )
  return (
    <>
      <header className="shadow-sm">
        <div className="fixed flex items-center justify-between h-16 px-4 mx-auto w-full bg-gray-800/60 z-20">
          <nav className="items-center justify-center hidden space-x-8 text-1xl text-white font-medium lg:flex lg:flex-1 lg:w-0">
            {navContent}
          </nav>
        </div>
        <div className="fixed border-gray-100 justify-center w-full lg:hidden z-20">
          <nav className="flex items-center justify-center w-full p-4 overflow-x-auto text-sm font-medium text-white">
            {navContent}
          </nav>
        </div>
      </header>
    </>
  )
}

const styles = {
  navLink: "px-2"
}

export default Nav
