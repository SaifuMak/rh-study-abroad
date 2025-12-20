'use client'
import React from "react"
import { sansita } from '../../fonts';

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa"

export default function ContactSection() {
  return (
    <section className="w-11/12 min-h-[450px] relative mx-auto rounded-3xl overflow-hidden">

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('images/home/laughing-men.png')" }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-[450px] py-10 px-4">
        <div className="max-w-5xl w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-16 text-white">

          <h1 className={`${sansita.className} text-2xl md:text-3xl lg:text-5xl leading-snug text-center`}>
            Don’t just dream of the world—go explore it.
            <br />
            <span className="block mt-2">
              Study abroad starts here.
            </span>
          </h1>

          <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed text-center">
            Take the first step toward global opportunities,
            world-class education, and life-changing experiences
          </p>

          <div className="flex justify-center">
            <button className="mt-6  rounded-full bg-white text-[#7a1d2b] text-sm font-medium btn-primary ">
              CONTACT US
            </button>
          </div>

          {/* Icons */}
          <div className="mt-10 flex  w-full items-center justify-center  mx-auto gap-3 text-sm">
            <span className="text-white/80">Connect With Us:</span>

            <div className="flex gap-3">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaWhatsapp /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
              <SocialIcon><FaGoogle /></SocialIcon>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function SocialIcon({ children }) {
  return (
    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition cursor-pointer">
      {children}
    </div>
  )
}
