import { sansita } from '../../fonts';
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";
import Link from 'next/link';

function UnlockingDoorSection() {

    const contentRef = useGsapFadeIn();
    const imageRef = useGsapOpacity({start: "top 75%"});

    const pillBase =
        "xl:w-[180px] lg:w-[150px] w-[110px] md:py-2 py-1 h-fit  text-nowrap  border-[#E8E8E8] shadow-md shadow-[#0000001A] rounded-full bg-white"

    return (
        <div className="relative my-12 max-sm:text-center  lg:my-20 w-11/12 xl:w-10/12 mx-auto overflow-hidden">

            {/* Background map */}
            <div
                className="absolute inset-0 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url('/images/home/map.png')" }}
            />


            {/* Content */}
            <div className="relative z-10 bg-white/97 max-sm:space-x-0 max-xl:space-x-10 flex  h-full items-center">

                {/* Left content */}
                <div ref={contentRef} className="sm:w-7/12  md:px-6">
                    <h1 className={`heading text-light-black max-w-xl 2xl:max-w-2xl   ${sansita.className}`}>
                        Unlocking doors to worldwide opportunities
                    </h1>
                    {/*  image only on the mobile */}
                    <div className="  h-full   sm:hidden  mx-auto relative flex justify-end my-8  ">
                        <div className="absolute text-xs lg:text-sm left-5  text-center top-1/2 flex flex-col items-end gap-5 xl:gap-8 -translate-y-1/2 ">
                            <span className={pillBase}>Global Exposure</span>

                            <span className={`${pillBase} mr-5`}>
                                Career Boost
                            </span>

                            <span className={pillBase}>Personal Growth</span>
                        </div>
                        <img
                            src="/images/home/women-with-globe.png"
                            alt="Woman with globe"
                            className="h-[230px] object-cover  "
                        />
                    </div>
                    <p className="mt-4 max-sm:mt-6 text-lg xl:text-xl lg:max-w-md font-light md:leading-8 xl:leading-10">
                        Studying abroad isn't just about earning a degree—it's about unlocking
                        doors to worldwide opportunities, where global exposure, diverse
                        networks, and top-tier education come together to shape a truly
                        international future.
                    </p>
                     <Link href="/contact-us">
                    <button className="xl:mt-8 mt-5 btn-primary cursor-pointer  text-sm rounded-full bg-primary-red text-white">
                        CONTACT US
                    </button>
                    </Link>
                </div>

                {/* Right image */}
                <div ref={imageRef} className="sm:w-5/12 max-sm:hidden  h-full  relative flex  ">
                    <div className="absolute text-xs lg:text-sm lg:-left-30 -left-16  xl:-left-34 text-center top-1/2 flex flex-col items-end gap-5 xl:gap-8 -translate-y-1/2 ">
                        <span className={pillBase}>Global Exposure</span>

                        <span className={`${pillBase} mr-5`}>
                            Career Boost
                        </span>

                        <span className={pillBase}>Personal Growth</span>
                    </div>
                    <img
                        src="/images/home/women-with-globe.png"
                        alt="Woman with globe"
                        className="h-full  object-cover  "
                    />
                </div>

            </div>
        </div>
    )
}

export default UnlockingDoorSection
