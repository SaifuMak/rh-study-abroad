
import Image from "next/image"
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

import CountriesGrid from "./CountriesGrid";
import { faqItems } from "@/app/data/faqItems";
import FAQ from "./FAQ";

export default function ContentSection() {

    const contentRef = useGsapFadeIn()
    const imagesContainerRef = useGsapOpacity()

    return (
        <section className="relative w-full pt-24 mt-24 lg:mt-36 2xl:mt-48 overflow-hidden">
            {/* Background illustration */}
            <div className="absolute inset-0 h-[600px] -z-10  bg-white">
                <Image
                    src="/images/countries/pattern.png"
                    alt="Background illustration"
                    fill
                    className="opacity-10   grayscale  "
                />
            </div>

            <div className="lg:max-w-10/12 mx-auto px-4">
                {/* Heading */}
                <div ref={contentRef} className="text-center opacity-0 xl:mb-16 mb-10">
                    <h2 className="heading font-semibold text-[#7A0026] mb-4">
                        Top Countries to Study Abroad
                    </h2>
                    <p className="description">
                        Explore the world’s most sought-after study destinations—offering world-class education, vibrant cultures, career opportunities,
                        and a gateway to global success.
                    </p>
                </div>
            </div>

            {/* countries list  */}
            <div ref={imagesContainerRef} className=" mb-12 lg:mb-20 opacity-0 w-10/12 mx-auto">
                <CountriesGrid />
            </div>

            <FAQ items={faqItems}/>

        </section>
    )
}