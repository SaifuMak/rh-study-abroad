import React from 'react'
import CountriesCarousal from './CountriesCarousal'
import { sansita } from '../../fonts';

function CountriesList() {


  return (
    <div className=" my-10 w-full max-sm:text-center text-white  ">
      <div className="w-full  lg:ml-5 2xl:ml-10 py-12 md:py-16 xl:py-20 flex justify-center md:justify-end sm:rounded-l-3xl bg-primary-red border ">
        <div className=" max-sm:w-11/12 xl:w-11/12  xl:mr-3 sm:pl-10 ">
          <h1 className={`heading md:ml-4 ${sansita.className} `}>Top Countries to Study Abroad</h1>
          <div className=" flex max-sm:flex-col md:ml-4 justify-between items-center sm:w-11/12 mt-4 md:mt-6 mb-10 lg:mb-16 ">
            <p className=" text-lg lg:text-xl font-light max-w-md xl:max-w-2xl">Explore the most sought-after destinations for world-class education and life-changing experiences.</p>
            <button className=" btn-primary text-black  max-sm:hidden max-xl:text-sm h-fit max-sm:mt-3 bg-white rounded-full">VIEW ALL</button>
          </div>
          <CountriesCarousal />
            <button className=" btn-primary text-black  sm:hidden max-xl:text-sm h-fit  mt-12 bg-white rounded-full">VIEW ALL</button>

        </div>
      </div>

    </div>
  )
}

export default CountriesList