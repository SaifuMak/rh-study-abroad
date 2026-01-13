import Image from "next/image"

export default function StudyHighlights({ data }) {
  return (
    <section className="w-full flex  justify-end bg-[#F3F3F3] mb-10">
      <div className=" max-md:max-w-11/12 lg:pl-10  2xl:w-11/12 max-lg:mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-lg:py-6 items-center">

          {/* LEFT SIDE – Background Image + Content */}
          <div
            className="relative  lg:p-12  h-full max-lg:mt-8  max-lg:order-2 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${data?.bgImg})` }}

          >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 pb-10">
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
          <div className="relative w-full xl:h-full md:h-[400px] h-[300px] max-lg:rounded-2xl max-lg:mb-5 lg:rounded-tl-3xl overflow-hidden shadow-xl">
            <Image
              src={data?.mainImg}
              alt={data?.altText}
              fill
              className="object-cover "
              priority
            />
          </div>

        </div>

      </div>
    </section>
  )
}
