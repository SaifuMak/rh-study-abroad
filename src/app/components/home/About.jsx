import React from "react";
import {inriaSans } from '../../fonts';
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

const About = () => {
  const sectionRef = useGsapFadeIn();
  const imageRef = useGsapOpacity();
  return ( 
    <section id='about' className={` ${inriaSans.className} w-full max-sm:text-center`}>
      <div className="flex max-sm:flex-col mx-auto ">

        {/* LEFT – BACKGROUND IMAGE CONTENT */}
        <div
          className=" md:w-1/2 flex-center bg-no-repeat  bg-contain bg-center"
          style={{
            backgroundImage: "url('/images/home/plane.png')",
          }}
        >

          {/* Text */}
          <p ref={sectionRef} className=" text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl  font-light  leading-relaxed  xl:leading-14  2xl:leading-16  text-center md:max-w-md xl:max-w-lg">
            <span className=" text-primary-red font-semibold">
              RH Study Abroad
            </span>{" "}
            is an academic consultancy organization providing every suitable
            advice and assistance to the requirements of those who desire to
            pursue their higher education abroad.
          </p>
        </div>

        {/* RIGHT – IMAGE CARD */}
        <div ref={imageRef} className="flex  mt-5  md:w-1/2 flex-col px-8 md:px-16 bg-white">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/home/education-globe.jpg"
              alt="Study Abroad"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="mt-4 text-sm lg:text-base xl:text-xl xl:leading-10 font-light xl:pr-4  ">
            Since its establishment in 2007 the institution has been the
            frontrunner in catalyzing the admissions of scores of students to
            various foreign universities / colleges.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
