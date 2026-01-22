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
import { SiGoogle } from "react-icons/si";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TopBar({isDark=false}) {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(barRef.current, {
        backgroundColor: "#771D40",
      })

      if(isDark) return

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


  return (
    <div
      ref={barRef}
      className={`w-full ${isDark && 'bg-[#771D40]'} text-white font-light backdrop-blur-md transition-colors z-999 max-sm:text-xs max-xl:text-sm`}
    >
      <div className="xl:max-w-10/12 lg:max-w-10/12 max-lg:px-5 mx-auto px-4 py-4 flex max-md:flex-col justify-between  md:items-center">

        {/* Left */}
        <div className="flex max-md:flex-col  justify-between md:items-center gap-2 md:gap-6">
          <span className="flex items-center">
            <IoMdMail className="mr-1 md:text-xl " />
            mail@rhstudyabroad.com
          </span>

          <span className="flex md:items-center">
            <HiLocationMarker className="mr-1 md:text-xl" />
            Ambakkadan Jn, P.I.K Tower, St Thomas College Rd, Thrissur
          </span>
        </div>

        {/* Right */}
        <div className="flex md:items-center text-base md:text-xl max-md:mt-2  gap-4">
          <Link href="#"><IoLogoFacebook /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaWhatsapp /></Link>
          <Link href="#"><SlSocialLinkedin /></Link>
          <Link href="#"><SiGoogle /></Link>
        </div>

      </div>
    </div>
  )
}
