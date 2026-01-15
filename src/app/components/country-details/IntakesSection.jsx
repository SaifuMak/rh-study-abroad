import Image from "next/image"
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn"
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity"

export default function IntakesSection({ data }) {

    const {
        title,
        descriptionHtml,
        leftBackgroundImage,
        rightImage,
        sectionBg,
    } = data

    const contentRef = useGsapFadeIn()
    const imageRef = useGsapOpacity()

    return (
        <section className="w-full 2xl:py-20 lg:py-16 py-10  mt-10 xl:mt-16" style={{ backgroundColor: sectionBg }}>
            <div className="lg:max-w-11/12 mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="relative 2xl:col-span-5 max-lg:order-2 col-span-6 h-full max-lg:mt-8  bg-cover bg-center"
                        style={{ backgroundImage: `url('${leftBackgroundImage}')` }}
                    >
                        <div className="absolute z-0 inset-0 bg-[#F8F3F5]/96 "></div>
                        <div ref={contentRef} className=" flex-center max-md:flex-col  max-md:text-center h-full lg:p-4 p-1  relative md:space-x-12 z-10">

                            <h2 className=" heading font-semibold text-black mb-3">
                                {title}
                            </h2>

                            <div className=" text-lg xl:text-xl 2xl:text-2xl lg:max-w-md font-light  leading-8 lg:leading-10">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: descriptionHtml,
                                    }}
                                />
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div ref={imageRef} className="relative 2xl:col-span-7 col-span-6 w-full h-[300px] xl:h-[420px] 2xl:h-[498px]  rounded-3xl overflow-hidden">
                        <Image
                            src={rightImage.src}
                            alt={rightImage.alt}
                            fill
                            priority
                            className=" "
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}
