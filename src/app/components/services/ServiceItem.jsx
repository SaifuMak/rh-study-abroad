import Image from "next/image"
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn"

function ServiceItem({ item, index }) {
  const isOdd = index % 2 !== 0

  // GSAP hook attached to the section
  const sectionRef = useGsapFadeIn()

  return (
    <section
      ref={sectionRef}
      className={`${isOdd ? "md:ml-10" : "md:mr-10"}`}
    >
      <div
        className={`
          relative w-full py-8 lg:py-14 xl:py-20 my-8 lg:my-10 2xl:my-16
          ${isOdd ? "md:rounded-l-2xl " : "bg-[#F8F3F5] md:rounded-r-2xl"}
          overflow-hidden
        `}
      >
        {/* Background image only for odd items */}
        {isOdd && (
          <div className="absolute inset-0 -z-10 bg-[#F3F3F3] ">
            <Image
              src="/images/services/city-1.png"
              alt="Background illustration"
              fill
              className="opacity-10  grayscale scale-x-[-1]"
            />
          </div>
        )}

        <div
          className={`
            xl:max-w-9/12 max-w-11/12 mx-auto
            flex flex-col lg:flex-row
            items-center gap-5 lg:gap-10 xl:gap-16
            ${isOdd ? "lg:flex-row-reverse" : ""}
          `}
        >
          {/* Image */}
          <div className="w-full lg:w-6/12">
            <div className="relative w-full h-[190px] md:h-[320px] xl:h-[390px] rounded-3xl overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className={`
                  w-full h-full lg:object-cover
       
                `}
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-6/12 max-lg:mt-3">
            <div className="flex items-center max-lg:justify-center gap-2 xl:gap-3 mb-3 lg:mb-4">
              <img
                src={item.iconUrl}
                alt=""
                className="size-8 xl:size-10"
              />
              <h3 className="text-xl md:text-2xl 2xl:text-3xl">
                {item.title}
              </h3>
            </div>

            <p className="text-[#3D3D3D] max-lg:text-center leading-7 xl:leading-8 xl:text-lg font-light">
              {item.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceItem
