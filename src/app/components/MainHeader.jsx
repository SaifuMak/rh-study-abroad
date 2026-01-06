'use client'

import Link from "next/link"

const MENU_ITEMS = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "STUDY ABROAD", href: "#" },
    { label: "STUDENT SERVICES", href: "#" },
]

export default function MainHeader() {
    return (
        <header className="w-full py-6">
            <div className="max-w-9/12 mx-auto px-4">

                <div className="bg-white rounded-full px-12 py-6 flex items-center justify-between shadow">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/images/header-logo.jpg" alt="RH Study Abroad" className="xl:h-12 lg:h-10 h-7" />
                    </div>

                    {/* Menu */}
                    <nav className="hidden md:flex gap-10">
                        {MENU_ITEMS.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className={` font-medium ${item.label === "HOME"
                                        ? "text-[#7A0026]"
                                        : "text-gray-800 hover:text-[#7A0026]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact */}
                    <Link
                        href="#"
                        className="bg-[#59585D] text-white font-light px-7 py-2 rounded-full hover:bg-gray-600 transition"
                    >
                        CONTACT
                    </Link>

                </div>
            </div>
        </header>
    )
}
