
import Image from "next/image"
import { sansita } from '../../fonts'
import { GoDotFill } from "react-icons/go";
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

export default function IntroSection() {

    const contentRef = useGsapFadeIn()
    const imageContainerRef = useGsapOpacity()
    const rightContentRef = useGsapFadeIn({ start: "top 100%" })

    return (
        <section className="relative w-full pt-24 mt-20 lg:mt-28 2xl:mt-36 overflow-hidden">
            {/* Background illustration */}
            <div className="absolute inset-0 h-[50%] lg:h-[70%] -z-10 bg-white">
                <Image
                    src="/images/contact-us/cities-1.png"
                    alt="Background illustration"
                    fill
                    className="opacity-10   grayscale scale-x-[-1] "
                />
            </div>

            <div className="lg:max-w-10/12   mx-auto px-4">
                {/* Heading */}
                <div ref={contentRef} className="text-center opacity-0 xl:mb-16 mb-10">
                    <h2 className="heading font-semibold text-[#7A0026] mb-4">
                        Contact Us
                    </h2>
                    <p className="description">
                        Hear from Students Who’ve Taken the Leap—Real Stories of Growth,
                        Challenges, and Life-Changing Experiences from Around the World.
                    </p>
                </div>

                {/* Main layout */}
                <div className="relative  mx-auto px-4">

                    {/* Grid */}
                    <div ref={imageContainerRef} className="grid opacity-0 grid-cols-12 lg:gap-6 rounded-3xl overflow-hidden">

                        {/* Left big image */}
                        <div className="col-span-12 lg:col-span-7 2xl:col-span-5 row-span-2 relative h-[300px] lg:h-[340px] xl:h-[400px] 2xl:h-[460px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about/girl-with-globe.jpg"
                                alt="Students exploring"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* middle image for above xl  */}
                        <div className="col-span-12 md:col-span-2 max-2xl:hidden row-span-2 relative h-[260px] xl:h-[400px] 2xl:h-[460px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about/girl-with-globe.jpg"
                                alt="Students exploring"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/*right image  for above lg */}
                        <div className="col-span-6 lg:col-span-5 2xl:col-span-5 max-lg:hidden  relative h-[300px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/about/girl-with-globe.jpg"
                                alt="Students together"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* CTA */}
                    <div ref={rightContentRef} className=" opacity-0 bg-white rounded-3xl text-white lg:absolute p-3 max-lg:mt-3 max-lg:text-center  lg:bottom-0 lg:-right-10  xl:-right-16">
                        <div className="bg-gradient-to-r from-[#E2558B] to-[#771D40] px-5 xl:px-8 xl:py-10 py-8 rounded-3xl">
                            <p className=" text-2xl lg:text-xl xl:text-3xl 2xl:text-4xl 2xl:max-w-lg xl:max-w-sm lg:max-w-xs font-semibold leading-snug">
                                Reach out for expert study abroad support.
                            </p>
                        </div>
                    </div>

                    {/* <div className="
                        absolute 
                        bottom-6 right-6
                        bg-gradient-to-r from-pink-500 to-purple-700
                        text-white
                        px-8 py-6
                        rounded-2xl
                        shadow-xl
                        max-w-xs
                        ">
                        <p className="text-lg font-medium leading-snug">
                            Reach out for expert study abroad support.
                        </p>
                    </div> */}

                </div>
            </div>
        </section>
    )
}