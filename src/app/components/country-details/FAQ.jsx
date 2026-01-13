"use client"

import { useState } from "react"
import { MdPlayArrow } from "react-icons/md";
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";

export default function FAQ({ data }) {

    const titleRef = useGsapFadeIn()

    return (
        <section className="w-full  bg-white py-12 lg:py-16 xl:py-20 2xl:py-28 px-4">
            <div className=" lg:max-w-10/12 max-w-11/12 mx-auto">
                {/* Title */}
                <h2 ref={titleRef} className="text-center heading font-semibold  mb-10 2xl:mb-14">
                    Frequently Asked Questions
                </h2>

                {/* Accordion */}
                <div className="space-y-6 lg:pt-8">
                    {data.map((item, index) => (
                        <FaqItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FaqItem({ item, index }) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div key={index} className="border  flex flex-col px-3 lg:px-5  w-full rounded-md   border-black/15 ">

            <div onClick={() => setIsOpened(!isOpened)} className=" flex py-4  justify-between  w-full cursor-pointer ">
                <div

                    className="w-full flex items-start gap-1 lg:gap-2 text-left"
                >
                    {/* Number */}
                    <span className="text-black  font-medium lg:text-xl text-lg 2xl:text-2xl">
                        {index + 1}.
                    </span>

                    {/* Question */}
                    <span className="lg:text-xl  text-base 2xl:text-2xl font-medium text-black flex-1">
                        {item.ques}
                    </span>

                </div>

                {/* Icon */}
                <div className="ml-auto">
                    <MdPlayArrow className={`lg:text-xl  mt-1 ${isOpened ? ' opacity-0' : ''} `} />
                </div>

            </div>

            {/* Answer */}
            <div
                className={`overflow-hidden   transition-all duration-700 ease-in-out ${isOpened ? "max-h-56 " : "max-h-0"
                    }`}
            >
                <p className=" pb-3 max-sm:pl-4 xl:max-w-11/12  md:text-lg  2xl:text-xl text-[#363636] lg:leading-8 2xl:pr-8">
                    {item.ans}
                </p>
            </div>
        </div>
    )
}

