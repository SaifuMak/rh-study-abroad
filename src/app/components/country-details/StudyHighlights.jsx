import Image from "next/image"
import useGsapFadeIn from '@/app/hooks/gsap/useGsapFadeIn'
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity"

export default function StudyHighlights({ data }) {

    const contentRef = useGsapFadeIn()
    const ImageRef = useGsapFadeIn()

  return (
    <section className="w-full flex   justify-end bg-[#F3F3F3] mb-10 max-md:pb-10 xl:pt-12">
      <div className=" max-md:max-w-11/12 md:w-11/12 max-lg:mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-lg:py-6">

          {/* LEFT SIDE – Background Image + Content */}
          <div
            className="relative   h-full max-lg:mt-4 max-lg:order-2 bg-contain  bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${data?.bgImg})` }}

          >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0  bg-[#F3F3F3]/95 "></div>

            <div ref={contentRef} className="relative flex-center   h-full z-10 lg:pb-10">
              <ul className="xl:space-y-5 space-y-3 text-[#4A4A4A] xl:text-lg 2xl:text-xl leading-relaxed">

                {data?.points?.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <img src="/Icons/tick.svg" alt="" className=" size-3 xl:size-4 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE – Image */}
          <div ref={ImageRef} className="relative w-full xl:h-full md:max-h-[600px] h-[300px] md:min-h-[450px] max-lg:rounded-2xl max-lg:mb-5 lg:rounded-tl-3xl overflow-hidden shadow-xl">
            <Image
              src={data?.mainImg}
              alt={data?.altText}
              fill
              className=" "
              priority
            />
          </div>

        </div>

      </div>
    </section>
  )
}
