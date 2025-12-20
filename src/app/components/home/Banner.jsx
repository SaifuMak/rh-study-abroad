import React from 'react'
import { istokWeb,inriaSans } from '../../fonts';


function Banner() {
  return (
    <div
      className="w-full text-white h-[60vh] lg:h-dvh bg-slate-200 bg-cover bg-center"
      style={{
        backgroundImage: "url('images/home/banner.jpg')",
      }}
    >
      {/* Banner content can go here */}
      <div className={`${inriaSans.className} w-11/12 xl:w-9/12  flex items-end mx-auto  h-full`}>
        <div className="  xl:pb-28 lg:pb-20 pb-6   font-semibold w-full">
          <h1 className={`${istokWeb.className} text-3xl md:text-5xl lg:text-7xl xl:leading-20 `}>Study Abroad,<br />
            Live your Dream Life</h1>
          <div className="flex mt-5 items-center max-lg:text-xs  space-x-5">
            <button className=" btn-primary flex-center  text-primary-red bg-white rounded-full">CONTACT US</button>

            <button className=" btn-primary flex-center bg-primary-red text-white rounded-full">OUR STORY</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Banner