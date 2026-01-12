import React from 'react'
import Image from 'next/image'

function IntroSection() {
    return (
        <section className="relative w-full pt-22 pb-5 2xl:pt-24 mt-22 lg:mt-28 xl:mt-36 2xl:mt-44 overflow-hidden">
            <div className=" ">

                {/* Image Section */}
                <div className="relative w-11/12 mx-auto rounded-3xl overflow-hidden md:shadow-lg">

                    {/* Title Tab */}
                    <div className="md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 z-20">
                        <div className="bg-white md:px-48 xl:py-9   md:py-7 md:rounded-b-2xl ">
                            <h1 className=" xl:text-5xl text-3xl md:text-4xl 2xl:text-6xl text-center text-nowrap font-semibold text-primary-red">
                                Study in <span className=" text-[#40383B]">USA</span>
                            </h1>
                        </div>
                    </div>

                    {/* Background Image */}
                    <div className="  md:mt-10 mt-6  relative h-[220px] md:h-[400px] xl:h-[600px] mx-auto">
                        <Image
                            src="/images/services/service-banner.jpg"
                            alt="Background illustration"
                            fill
                            className=" rounded-3xl object-cover"
                        />
                    </div>

                    {/* Play Button */}
                    <button className="absolute inset-0 flex items-center justify-center z-10">
                        <span className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                            ▶
                        </span>
                    </button>
                </div>

                {/* Content Card */}
                <div className=" relative mt-7 md:mt-12  2xl:mt-16 pb-8  md:pb-16">
                    <div className="2xl:max-w-6xl lg:max-w-5xl  md:max-w-4xl relative z-10 max-w-11/12  mx-auto bg-white rounded-2xl shadow-2xl px-6 py-8  md:px-24 md:py-12  text-center">
                        <p className="text-[#3D3D3D] font-light leading-8 lg:leading-9 lg:leading-10 2xl:leading-12 md:text-lg lg:text-xl 2xl:text-2xl ">
                            The USA stands as a global frontrunner in education, home to a
                            significant proportion of the world’s top-ranked universities, as
                            consistently highlighted by major international rankings.
                            Renowned for its prestigious institutions and an impressive
                            number of Nobel laureates among its faculty, the U.S. offers an
                            unparalleled academic environment. Few nations can rival the
                            breadth and depth of high-ranking universities that the U.S.
                            provides, making it a prime destination for students seeking
                            excellence in education, cutting-edge research, and access to
                            distinguished scholars across various fields.
                        </p>

                        <button className="lg:mt-8 mt-5 2xl:mt-12 px-12 py-2 rounded-full bg-[#7A1E3A] text-white max-md:text-sm  font-medium hover:bg-[#64172F] transition">
                            CONTACT US
                        </button>
                    </div>

                    {/* Bottom half background */}
                    <div className="absolute bottom-0 left-0 w-full h-8/12 bg-[#F3F3F3] " />

                </div>

            </div>
        </section>
    )
}

export default IntroSection