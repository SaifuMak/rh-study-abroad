import React from 'react'
import Image from 'next/image'
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn'

function IntroSection({ data, country }) {
    const containerRef = useGsapFadeIn()
    const contentRef = useGsapFadeIn()

    return (
        <section className="relative w-full pt-12 lg:pt-22 2xl:pt-24 mt-22 lg:mt-28 xl:mt-36 2xl:mt-44 overflow-hidden">
            <div className=" ">

                {/* Image Section */}
                <div ref={containerRef} className="relative opacity-0 w-11/12 mx-auto rounded-3xl overflow-hidden  ">

                    {/* Title Tab */}
                    <div className="md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 z-20">
                        <div className="bg-white md:px-48 xl:py-9   md:py-7 md:rounded-b-2xl ">
                            <h1 className=" xl:text-5xl text-3xl md:text-4xl 2xl:text-6xl text-center text-nowrap font-semibold text-primary-red">
                                Study in <span className=" text-[#40383B]">{country}</span>
                            </h1>
                        </div>
                    </div>

                    <div className="md:mt-8 mt-6 relative w-full aspect-[16/9] xl:aspect-[21/8]">
                        <Image
                            src={data.bannerImg}
                            alt="Background illustration"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 90vw"
                            className="rounded-3xl object-cover"
                        />
                    </div>

                    {/* Play Button */}
                    <button className="absolute inset-0 flex items-center justify-center z-10">
                        <span className="w-16 h-16 max-sm:mt-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                            ▶
                        </span>
                    </button>
                </div>

                {/* Content Card */}
                <div className=" relative mt-3 md:mt-12  2xl:mt-16 pb-8 md:pb-12  xl:pb-16">
                    <div ref={contentRef} className="2xl:max-w-6xl opacity-0 lg:max-w-5xl  md:max-w-4xl relative z-10 max-w-11/12  mx-auto bg-white rounded-2xl shadow-xl xl:shadow-2xl px-6 py-8  md:px-24 md:py-12  text-center">
                        <p
                            className="text-[#3D3D3D] font-light leading-8 md:text-lg xl:text-xl lg:leading-10 2xl:text-[22px] "
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />

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