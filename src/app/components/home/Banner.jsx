import React from 'react'
import { istokWeb, inriaSans } from '../../fonts';
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn';
import Link from "next/link";

function Banner() {
  const contentRef = useGsapFadeIn({ delay: '0.2' })

  return (
    <div
      id='banner'
      className="w-full text-white h-[60vh] lg:h-dvh bg-slate-200 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home/banner.jpg')",
      }}
    >
      {/* Banner content can go here */}
      <div className={`${inriaSans.className} w-11/12 xl:w-9/12  flex items-end mx-auto  h-full`}>
        <div ref={contentRef} className=" opacity-0  xl:pb-28 lg:pb-20 pb-6   font-semibold w-full">
          <h1 className={`${istokWeb.className} text-3xl  md:text-5xl lg:text-7xl xl:leading-20 `}>Study Abroad,<br />
            Live your Dream Life</h1>
          <div className="flex mt-5 items-center max-lg:text-xs  space-x-5">
            <Link href="/contact-us">
              <button className="btn-primary flex-center cursor-pointer text-primary-red bg-white rounded-full">
                CONTACT US
              </button>
            </Link>

            <Link href="/about">
              <button className="btn-primary flex-center cursor-pointer bg-primary-red text-white rounded-full">
                OUR STORY
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Banner