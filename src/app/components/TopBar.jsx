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

export default function TopBar() {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(barRef.current, {
        backgroundColor: "#771D40",
      })

      gsap.to(barRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.15)", // light glass
        duration: 0.3,
        ease: "sine.out",
        scrollTrigger: {
          trigger: "#banner",
          start: "top bottom",
          toggleActions: "play reverse play reverse",
          markers: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  
  return (
    <div
      ref={barRef}
      className="w-full text-white font-light backdrop-blur-md transition-colors"
    >
      <div className="max-w-9/12 mx-auto px-4 py-4 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-6">
          <span className="flex items-center">
            <IoMdMail className="mr-1 text-xl" />
            mail@rhstudyabroad.com
          </span>

          <span className="flex items-center">
            <HiLocationMarker className="mr-1 text-xl" />
            Ambakkadan Jn, P.I.K Tower, St Thomas College Rd, Thrissur
          </span>
        </div>


        {/* Right */}
        <div className="flex items-center text-xl gap-4">
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
