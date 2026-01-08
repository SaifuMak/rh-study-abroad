
import Image from "next/image"
import { sansita } from '../../fonts'
import { GoDotFill } from "react-icons/go";
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";


export default function IntroSection() {
    const contentRef = useGsapFadeIn()
    const rightContentRef = useGsapOpacity()
    const centerContentRef = useGsapOpacity()
    const leftContentRef = useGsapOpacity()

    return (
        <section className="relative w-full py-24 mt-22 lg:mt-28 2xl:mt-36 overflow-hidden">
            {/* Background illustration */}
            <div className="absolute inset-0 -z-10 bg-white">
                <Image
                    src="/images/about/into-banner.png"
                    alt="Background illustration"
                    fill
                    className="opacity-10   grayscale scale-x-[-1] "
                />
            </div>

            <div className="max-w-10/12 mx-auto px-4">
                {/* Heading */}
                <div ref={contentRef} className="text-center opacity-0 mb-16">
                    <h2 className="heading font-semibold text-[#7A0026] mb-4">
                        About Us
                    </h2>
                    <p className="description">
                        Hear from Students Who've Taken the Leap—Real Stories of Growth,
                        Challenges, and Life-Changing Experiences from Around the World.
                    </p>
                </div>

                {/* Main layout */}
                <div className="relative w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 lg:items-center">

                    {/* Left card */}
                    <div ref={rightContentRef} className="lg:col-span-3 w-full order-2 lg:order-0 opacity-0">
                        <div className="bg-gradient-to-b from-[#E2558B] to-[#771D40] text-white rounded-2xl px-8 2xl:px-12 py-6 shadow-lg">
                            <h3 className={`2xl:text-3xl text-2xl  mb-4 ${sansita.className}`}>
                                Values we Cherish
                            </h3>
                            <ul className="space-y-3 2xl:text-lg">
                                {["Passion", "Commitment", "Reliability", "Transparency"].map(item => (
                                    <li key={item} className="flex items-center">
                                        <GoDotFill className="text-xs mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Small image */}
                        <div className="mt-6  max-lg:hidden flex justify-end ">

                            <img src="/images/about/girl-with-books.jpg" alt="Study abroad" className=" w-48 h-36  rounded-xl" />
                        </div>
                    </div>

                    {/* Center image (fake video) */}
                    <div ref={centerContentRef} className="lg:col-span-6 w-full relative order-1 lg:order-0 lg:h-full opacity-0">
                        <div className="relative w-full h-[300px] lg:h-[105%] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about/gir-with-map-2.jpg"
                                alt="Student exploring city"
                                fill
                                priority
                                className=" object-cover"
                            />

                            {/* Play icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center cursor-pointer">
                                    <div className="w-0 h-0 border-l-[12px] border-l-[#7A0026] border-y-[8px] border-y-transparent ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div  ref={leftContentRef} className="lg:col-span-3 lg:space-y-6 w-full order-3 lg:order-0 opacity-0">
                        {/* Countries card */}
                        <div className=" flex lg:justify-end ">

                            <div className={`bg-white border flex items-end justify-center  rounded-2xl px-7 py-6 gap-2 w-full lg:w-fit text-center `}>
                                <h4 className={`text-5xl text-[#7A0026]  ${sansita.className}`}>20</h4>
                                <p className="text-lg text-gray-600 font-medium mt-2">Countries</p>
                            </div>
                        </div>

                        {/* Students image */}
                        <div className="relative h-[230px] max-lg:hidden rounded-2xl overflow-hidden ">
                            <Image
                                src="/images/about/group-of-students.jpg"
                                alt="Students group"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}