import React from 'react'
import { sansita } from '../../fonts';
import TestimonialGrid from './TestimonialGrid';
import { useMediaQuery } from 'react-responsive';
import TestimonialCarousal from './TestimonialCarousal';
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn';

function Testimonials() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const contentRef = useGsapFadeIn();

    return (
        <div className=" w-full max-md:w-11/12 mx-auto my-10 lg:my-12 2xl:my-20  ">
            <div ref={contentRef} className="mx-auto text-center ">
                {/* Add content here */}
                <h2 className={`${sansita.className} text-center mb-4   heading `}>
                    Testimonial
                </h2>
                <p className=" max-w-lg mx-auto lg:leading-10 text-lg lg:text-xl 2xl:text-[25px] font-light">Hear from Students Who’ve Taken the Leap—Real Stories of Growth, Challenges,
                    and Life-Changing Experiences from Around the World.</p>
            </div>

            <div className=" w-full md:w-10/12 md:mx-auto md:mt-8 mt-4">

                {isMobile ? (
                    <TestimonialCarousal />
                ) : (
                    <TestimonialGrid />
                )}
            </div>
        </div>
    )
}

export default Testimonials