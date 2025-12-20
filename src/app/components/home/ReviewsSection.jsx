import React from 'react'
import ReviewsCarousel from './ReviewsCarousal'

function ReviewsSection() {
  return (
   <div className=" w-full ">
    <div className="  rounded-2xl bg-[#F3F3F3] lg:mx-10 mx-5">
      {/* Add content here */}
        <ReviewsCarousel/>
    </div>
   </div>
  )
}

export default ReviewsSection