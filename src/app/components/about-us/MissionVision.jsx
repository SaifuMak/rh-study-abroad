

import { TbTargetArrow } from "react-icons/tb";
import { sansita } from '../../fonts'
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

export default function MissionVision() {

    const contentRef = useGsapFadeIn()
    const rightContentRef = useGsapOpacity()
    const centerContentRef = useGsapFadeIn({start : "top 99%"})
    const leftContentRef = useGsapOpacity()

    return (
        <section className="w-full py-12 flex justify-end lg:py-20 lg:mt-10">
            <div className="w-11/12 max-lg:mx-auto xl:pl-10 lg:pr-5">
                {/* Header Section */}
                <div className=" flex justify-center w-full  lg:gap-8 xl:gap-10  max-lg:mb-7">

                    <div className=" flex max-md:flex-col  md:items-center md:justify-between   w-full ">
                        {/* Left Image */}
                        <div ref={rightContentRef} className="relative md:w-[460px] lg:w-[560px] xl:h-[570px] lg:h-[420px] h-[340px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/images/about/girl-with-globe.jpg"
                                alt="Student with globe"
                                className="w-full h-full object-cover "
                            />
                        </div>

                        {/* Right Content */}
                        <div ref={contentRef} className="md:mx-10 max-md:text-center max-md:mt-5 ">
                            <h2 className="text-3xl md:text-4xl  xl:text-6xl font-bold text-gray-900 mb-4 xl:mb-5">
                                Our Mission and Vision
                            </h2>
                            <p className="md:text-lg max-md:px-4 max-w-2xl md:text-xl text-gray-700 leading-relaxed">
                                Guided by purpose, driven by passion — shaping a future with clarity,
                                commitment, and impact.
                            </p>
                        </div>
                    </div>


                    {/* Floating Book Image - Desktop Only */}
                    <div ref={leftContentRef} className="">
                        <div className="relative  max-lg:hidden lg:size-36 xl:size-44 2xl:size-56">
                            <img
                                src="/images/about/fly.jpg"
                                alt="Book with landmarks"
                                className="w-full h-full rounded-2xl "
                            />
                        </div>
                    </div>

                </div>

                {/* Mission and Vision Cards */}
                <div ref={centerContentRef} className="lg:relative xl:h-64 lg:h-60  2xl:max-w-9/12 lg:max-w-11/12 mx-auto ">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 lg:absolute lg:-top-32 lg:left-0 lg:right-0 ">
                        {/* Mission Card */}
                        <div className="bg-gradient-to-b from-[#E2558B] to-[#771D40] rounded-3xl p-6 md:p-8 xl:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className=" items-center gap-3 xl:mb-6 mb-4">
                                <TbTargetArrow className="size-8 text-white" />
                                <h3 className={` ${sansita.className} text-2xl lg:text-3xl font-light`}>Mission</h3>
                            </div>
                            <p className="text-white/95 leading-relaxed  font-light xl:text-lg">
                                To inculcate a holistic view among the student community across
                                the country upon the avenues for pursuing higher education abroad
                                to rise to the level of expectation of every learner to obtain globally
                                recognized academic qualification to establish ourselves to be a
                                pilar of support to the students in their search to find out the best
                                Academic institution abroad.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-gradient-to-b from-[#E2558B] to-[#771D40] rounded-3xl p-6 md:p-8 xl:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="xl:mb-6 mb-4">
                                <TbTargetArrow className="size-8 text-white" />
                                <h3 className={` ${sansita.className} text-2xl lg:text-3xl font-light`}>Vision</h3>
                            </div>
                            <p className="text-white/95 leading-relaxed  font-light xl:text-lg">
                                To meet the emerging demand of the students in India to pursue
                                their higher education abroad to provide the students and parents
                                the precise picture on the rules and regulations being followed by
                                the foreign Universities of their choice. To assist the clients to get
                                acclimatized with the admission procedures to various reputed
                                overseas universities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}