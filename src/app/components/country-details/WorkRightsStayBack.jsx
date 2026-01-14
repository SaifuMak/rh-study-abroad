import Image from "next/image"

import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn"

export default function WorkRightsStayBack({ data }) {

    const contentRef = useGsapFadeIn()

    return (
        <section className="w-full pt-10 xl:pt-16 ">
            <div className=" mx-auto md:px-6 px-3">

                {/* Banner */}
                <div className="relative flex flex-col  items-center justify-center rounded-3xl  overflow-hidden min-h-[260px] md:min-h-[300px] xl:min-h-[400px] 2xl:min-h-[450px]">

                    {/* Background Image */}
                    <Image
                        src={data?.bgImage}
                        alt="Work rights and stay back"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#720024]/50" />


                    <div className="relative z-10 h-full flex items-center justify-center text-center px-6 max-sm:py-9">
                        <div ref={contentRef} className="max-w-3xl text-white">

                            <h2 className="heading  font-semibold mb-2 md:mb-4">
                                {data?.title}
                            </h2>

                            <ul className="mt-8 space-y-4 md:text-lg 2xl:text-xl text-white/90">
                                {data?.points.map((point, index) => (
                                    <li key={index} className="flex justify-center gap-2">
                                        <img src="/Icons/white-tick.svg" alt="" className=" size-3 xl:size-4 mt-2 shrink-0" />

                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
