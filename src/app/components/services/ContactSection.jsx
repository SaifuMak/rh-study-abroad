'use client'
import React from "react"
import { sansita } from '../../fonts';
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn';
import Link from "next/link";

export default function ContactSection() {

  const contentRef = useGsapFadeIn();

  return (
    <section className=" mx-10 max-lg:mx-4  lg:my-16 my-10 relative  rounded-3xl overflow-hidden">

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('images/services/girl-with-books.jpg')" }}
      />


      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center   py-10 2xl:py-16 px-4">
        <div ref={contentRef} className="2xl:max-w-5xl max-w-4xl w-full rounded-2xl border border-white/40 backdrop-blur-xl px-8  py-10 lg:py-16 text-white">

          <h1 className={`${sansita.className} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 2xl:leading-snug text-center`}>
            Contact now and take the first step toward your international future.
            <br />
            {/* <span className="block mt-2">
              Study abroad starts here.
            </span> */}
          </h1>

          <p className="2xl:mt-5 lg:mt-8 mt-5 text-base lg:text-xl xl:text-[22px] lg:max-w-4xl max-w-xl mx-auto font-light  leading-relaxed text-center">
            Our expert counselors are here to guide you every step of the way—from choosing the right course and country to visa processing and settling abroad.
          </p>

          <div className="flex justify-center">
            <Link href="/contact-us">
              <button className="xl:mt-12 mt-7 cursor-pointer  rounded-full  bg-white text-[#7a1d2b] max-lg:text-sm font-medium btn-primary ">
                CONTACT US
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
