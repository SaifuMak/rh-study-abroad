import React from 'react'
import CountriesCarousal from './CountriesCarousal'
import { sansita } from '../../fonts';
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn';

function CountriesList() {

  const titleRef = useGsapFadeIn();
  const descriptionRef = useGsapFadeIn();

  return (
    <div className=" my-10 w-full max-sm:text-center text-white  ">
      <div className="w-full relative  lg:ml-5 2xl:ml-10 py-12 md:py-16 xl:py-20 flex justify-center md:justify-end sm:rounded-l-3xl bg-primary-red border ">

        <div className=" z-10 max-sm:w-11/12   xl:mr-3 sm:pl-10 xl:pl-24 2xl:pl-28">
          <h1 ref={titleRef} className={`heading md:ml-4 ${sansita.className}`}>Top Countries to Study Abroad</h1>
          <div ref={descriptionRef} className=" flex max-sm:flex-col md:ml-4 justify-between items-center sm:w-11/12 mt-4 md:mt-6 mb-10 lg:mb-16 ">
            <p className=" text-lg lg:text-xl font-light max-w-md xl:max-w-2xl">Explore the most sought-after destinations for world-class education and life-changing experiences.</p>
            <button className=" btn-primary text-black  max-sm:hidden max-xl:text-sm h-fit max-sm:mt-3 bg-white rounded-full">VIEW ALL</button>
          </div>
          <CountriesCarousal />
          <button className=" btn-primary text-black  sm:hidden max-xl:text-sm h-fit  mt-12 bg-white rounded-full">VIEW ALL</button>
        </div>

        <div
          className="absolute inset-0 bg-no-repeat w-full h-full  bg-contain opacity-50  bg-center"
          style={{ backgroundImage: "url('/images/home/dot-map.png')" }}
        />
      </div>

    </div>
  )
}

export default CountriesList