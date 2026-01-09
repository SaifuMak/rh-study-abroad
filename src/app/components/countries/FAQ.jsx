"use client"

import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"

export default function FAQ({ items }) {

    return (
        <section className="w-full bg-[#771D400D] py-12 lg:py-20 xl:py-24 2xl:py-28 px-4">
            <div className=" lg:max-w-10/12 max-w-11/12 mx-auto">
                {/* Title */}
                <h2 className="text-center heading font-semibold text-[#7A1E3A] mb-10 2xl:mb-14">
                    Frequently Asked Questions
                </h2>

                {/* Accordion */}
                <div className="space-y-6 lg:pt-10">
                    {items.map((item, index) => (
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
        <div key={index} className="border-b  border-black/15 pb-4">
            <button
                onClick={() => setIsOpened(!isOpened)}
                className="w-full flex items-start gap-1 lg:gap-2 text-left"
            >
                {/* Number */}
                <span className="text-black max-md:font-semibold font-medium lg:text-xl text-lg 2xl:text-2xl">
                    {index + 1}.
                </span>

                {/* Question */}
                <span className="lg:text-xl max-md:font-semibold text-lg 2xl:text-2xl font-medium text-black flex-1">
                    {item.ques}
                </span>

                {/* Icon */}
                <span className="ml-auto">
                    {isOpened ? (
                        <FiMinus className="text-lg mt-1" />
                    ) : (
                        <FiPlus className="text-lg mt-1" />
                    )}
                </span>
            </button>

            {/* Answer */}
            <div
                className={`overflow-hidden mt-2 lg:mt-4 transition-all duration-700 ease-in-out ${isOpened ? "max-h-56 " : "max-h-0"
                    }`}
            >
                <p className="  max-md:pl-4 2xl:max-w-11/12 md:text-lg text-[#363636] lg:leading-8 2xl:pr-8">
                    {item.ans}
                </p>
            </div>
        </div>
    )
}

