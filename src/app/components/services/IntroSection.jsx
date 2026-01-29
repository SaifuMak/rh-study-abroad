
import Image from "next/image"
import { sansita } from '../../fonts'
import { GoDotFill } from "react-icons/go";
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";


export default function IntroSection() {
    const contentRef = useGsapFadeIn()
    const imgRef = useGsapOpacity()


    return (
        <section className="relative w-full pt-10 lg:pt-22 pb-5 2xl:pt-24 mt-22 lg:mt-28 2xl:mt-44 overflow-hidden">
            {/* Background illustration */}
            <div className="absolute inset-0 -z-10 bg-white">
                <div className=" lg:h-[50%] h-[80%] w-full  relative ">
                    <Image
                        src="/images/services/city-1.png"
                        alt="Background illustration"
                        fill
                        className="opacity-10 grayscale "
                    />
                </div>
            </div>

            <div className="xl:max-w-10/12 mx-auto px-4">
                {/* Heading */}
                <div ref={contentRef} className=" opacity-0 text-center  2xl:mb-16">
                    <h2 className="heading font-semibold text-[#7A0026] mb-4">
                        Our Services
                    </h2>
                    <p className="description">
                        Comprehensive support tailored to your global education journey—from career
                        guidance and course selection to visa, scholarships, and accommodation assistance.
                    </p>
                </div>

                <div ref={imgRef} className=" mt-10 opacity-0 relative w-11/12 h-[220px] lg:h-[400px] xl:h-[600px] mx-auto">
                    <Image
                        src="/images/services/service-banner.jpg"
                        alt="Background illustration"
                        fill
                        className=" rounded-3xl object-cover"
                    />
                </div>

            </div>
        </section>
    )
}