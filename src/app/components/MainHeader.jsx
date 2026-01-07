'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"

export default function MainHeader() {
  const navRef = useRef(null)
  const lastScrollY = useRef(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const MENU_ITEMS = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "STUDY ABROAD", href: "#" },
    { label: "STUDENT SERVICES", href: "#" },
  ]

  /* hide / show navbar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScrollY.current + 15) {
        navRef.current.style.opacity = "0"
      } else if (lastScrollY.current > current + 15) {
        navRef.current.style.opacity = "1"
      }
      lastScrollY.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  return (
    <>
      <header className="w-full lg:py-3 xl:py-6 z-50 relative">
        <div ref={navRef} className="xl:max-w-10/12 lg:max-w-10/12 mx-auto lg:px-4">
          <div className="bg-white lg:rounded-full px-5 lg:px-12 py-3 lg:py-5 flex items-center justify-between  border">

            {/* Logo */}
            <img
              src="/images/header-logo.jpg"
              alt="RH Study Abroad"
              className="xl:h-12 lg:h-8 h-7"
            />

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-10">
              {MENU_ITEMS.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`font-medium ${
                    item.label === "HOME"
                      ? "text-[#7A0026]"
                      : "text-gray-800 hover:text-[#7A0026]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact */}
            <Link
              href="#"
              className="bg-[#59585D] hidden md:flex text-white font-light px-7 py-2 rounded-full"
            >
              CONTACT
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-2xl"
            >
              <IoIosMenu />
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-white z-[999]
          transform transition-transform duration-700
          ${isMenuOpen ? "translate-y-0 " : "-translate-y-full"}
          md:hidden
        `}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            src="/images/header-logo.jpg"
            alt="RH Study Abroad"
            className="h-8"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl"
          >
            <IoIosClose />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col  px-8 mt-10  h-full gap-8  font-medium">
          {MENU_ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-[#7A0026]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className=" px-8 w-fit py-2 flex-center bg-[#59585D] text-white rounded-xl"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  )
}
