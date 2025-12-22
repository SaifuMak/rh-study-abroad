'use client'
import React from "react"
import { sansita } from '../../fonts';

export default function ContactSection() {
  return (
    <section className=" mx-10 max-lg:mx-4 min-h-[450px] my-12 relative  rounded-3xl overflow-hidden">

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('images/home/laughing-men.png')" }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-[450px]  py-10 px-4">
        <div className="2xl:max-w-5xl max-w-4xl w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-8  py-10 lg:py-16 text-white">

          <h1 className={`${sansita.className} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 2xl:leading-snug text-center`}>
            Don’t just dream of the world—go explore it.
            <br />
            <span className="block mt-2">
              Study abroad starts here.
            </span>
          </h1>

          <p className="2xl:mt-5 lg:mt-8 mt-5 text-base lg:text-xl xl:text-[22px] lg:max-w-2xl max-w-xl mx-auto font-light  leading-relaxed text-center">
            Take the first step toward global opportunities,
            world-class education, and life-changing experiences
          </p>

          <div className="flex justify-center">
            <button className="mt-8  rounded-full  bg-white text-[#7a1d2b] max-lg:text-sm font-medium btn-primary ">
              CONTACT US
            </button>
          </div>

          {/* Icons */}
          <div className="lg:mt-10 mt-8 flex max-md:flex-col  w-full items-center justify-center  mx-auto md:gap-6 gap-3 text-sm">
            <span className="text-lg">Connect With Us:</span>

            <div className="flex gap-4">
              <SocialIcon src="/images/social/fb.svg" alt="Facebook" />
              <SocialIcon src="/images/social/insta.svg" alt="Instagram" />
              <SocialIcon src="/images/social/whatsapp.svg" alt="WhatsApp" />
              <SocialIcon src="/images/social/linkedin.svg" alt="LinkedIn" />
              <SocialIcon src="/images/social/google.svg" alt="Google" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

function SocialIcon({ src, alt }) {
  return (
        <div className=" size-5 cursor-pointer">
          <img
            src={src}
            alt={alt}
            className="w-full h-full"
          />
        </div>
      );
}
