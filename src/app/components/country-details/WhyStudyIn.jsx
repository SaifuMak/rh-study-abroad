import Image from "next/image"
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn'


export default function WhyStudyIn({ data }) {

    const contentRef = useGsapFadeIn()

    return (
        <section className="w-full 2xl:pt-10  lg:pt-5 flex ">
            <div className=" lg:pr-10 w-full">

                {/* Background Container */}
                <div className="relative lg:rounded-r-3xl  overflow-hidden flex justify-center ">

                    <div className=" border border-white 2xl:max-w-9/12 lg:max-w-10/12 md:max-w-10/12 max-w-11/12  ">

                        {/* Background Image */}
                        <Image
                            src={data?.bgImg}
                            alt="USA background"
                            fill
                            priority
                            className="object-cover "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#3B3F7A]/50  " />

                        <div className="relative z-10 py-10 lg:py-16 xl:py-20  2xl:py-24 text-white ">

                            <div ref={contentRef} className=" w-full  ">
                                <h2 className=" heading mb-4 lg:mb-6">
                                    {data?.title}
                                </h2>

                                <p
                                    className="xl:max-w-6xl lg:max-w-4xl xl:text-xl font-light text-white mb-12"
                                    dangerouslySetInnerHTML={{ __html: data?.description }}
                                />

                            </div>

                            <div className={` ${data?.gridClass || 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'} gap-6`}>
                                {data?.points.map((feature, index) => {

                                    return (
                                        <div
                                            key={index}
                                            className="bg-[#B1275D] rounded-2xl max-md:py-6 max-md:px-4 md:p-5 xl:p-6 flex flex-col justify-center  2xl:p-9 text-center shadow-lg hover:scale-[1.02] transition"
                                        >
                                            <div className="flex justify-center mb-2 xl:mb-4">
                                                <img src={feature.icon} alt="" className=" size-9" />
                                            </div>

                                            <p className="2xl:text-lg max-xl:text-xs font-light leading-snug text-white">
                                                {feature.title}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
