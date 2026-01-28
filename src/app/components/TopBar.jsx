'use client'

import Link from "next/link"
import {
  FaInstagram,
} from "react-icons/fa"
import { useEffect, useRef } from "react"
import { IoMdMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from 'react-responsive';


gsap.registerPlugin(ScrollTrigger)

export default function TopBar({ isDark = false }) {
  const barRef = useRef(null)
  const lastScrollY = useRef(0)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(barRef.current, {
        backgroundColor: "#771D40",
      })

      if (isDark) return

      gsap.to(barRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.15)", // light glass
        duration: 0.3,
        ease: "sine.out",
        scrollTrigger: {
          trigger: "#banner",
          start: "top bottom",
          toggleActions: "play reverse play reverse",
        },
      })
    })

    return () => ctx.revert()
  }, [])


  /* hide / show topbar on scroll */
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      if (!barRef.current) return

      const current = window.scrollY
      if (current > lastScrollY.current + 15) {
        barRef.current.style.opacity = "0"
      } else if (lastScrollY.current > current + 15) {
        barRef.current.style.opacity = "1"
      }
      lastScrollY.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div
      ref={barRef}
      className={`w-full ${isDark && ' bg-primary-red'} text-white font-light backdrop-blur-md transition-colors z-[1000] max-sm:text-xs max-xl:text-sm`}
    >
      <div className="xl:max-w-10/12 lg:max-w-10/12 max-lg:px-5 mx-auto px-4 py-2 md:py-4 flex max-md:flex-col justify-between md:items-center">

        {/* Left */}
        <div className="flex max-md:flex-col  justify-between md:items-center gap-2 md:gap-6 max-md:hidden">
          <div className="flex items-center">
            <a
              href="mailto:mail@rhstudyabroad.com"
              className="flex items-center hover:underline "
            >
              <IoMdMail className="mr-1 md:text-xl" />
              mail@rhstudyabroad.com
            </a>
          </div>

          <div className="flex md:items-center">
            <a
              href="https://maps.app.goo.gl/tdSqLnxwkSDX57Y86"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline "
            >
              <HiLocationMarker className="mr-1 md:text-xl " />
              Ambakkadan Jn, P.I.K Tower, St Thomas College Rd, Thrissur
            </a>
          </div>

          <div className=" flex items-center ">
            <a
              href="tel:+919544221155"
              className="flex items-center hover:underline cursor-pointer"
            >
              <img
                src="/Icons/phone.svg"
                alt="Phone"
                className="size-3 md:size-4 mr-2"
              />
              +91 9544 22 11 55
            </a>
          </div>

        </div>

        {/* Right */}
        <div className="flex md:items-center  justify-center   text-base md:text-xl max-md:mt-2  gap-4">
          <a
            href="mailto:mail@rhstudyabroad.com"
            className="flex items-center hover:underline md:hidden"
          >
            <IoMdMail className="mr-1 md:text-xl" />
          </a>
          <a
            href="https://maps.app.goo.gl/tdSqLnxwkSDX57Y86"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline md:hidden"
          >
            <HiLocationMarker className="mr-1 md:text-xl" />
          </a>
           <a
              href="tel:+919544221155"
              className="flex items-center hover:underline cursor-pointer"
            >
              <img
                src="/Icons/phone.svg"
                alt="Phone"
                className="size-3 md:size-4 mr-2"
              />
            </a>
          <Link href="https://www.facebook.com/rhstudy.in/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook /></Link>
          <Link href="https://www.instagram.com/rhstudy.in/?hl=en" target="_blank" rel="noopener noreferrer" ><FaInstagram /></Link>
          <Link href="#"><FaWhatsapp /></Link>
          <Link href="https://in.linkedin.com/company/rh-study" target="_blank" rel="noopener noreferrer"><SlSocialLinkedin /></Link>
        </div>

      </div>
    </div>
  )
}
