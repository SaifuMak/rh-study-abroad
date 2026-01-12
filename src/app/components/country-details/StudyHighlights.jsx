import Image from "next/image"
import { Check } from "lucide-react"

export default function StudyHighlights() {
  return (
    <section className="w-full flex  justify-end bg-[#F3F3F3] mb-10">
      <div className=" max-md:max-w-11/12 lg:pl-10  2xl:w-11/12 max-lg:mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-lg:py-6 items-center">

          {/* LEFT SIDE – Background Image + Content */}
          <div
            className="relative  lg:p-12 h-full max-lg:mt-8  max-lg:order-2 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/services/city-1.png')" }}
            
          >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-[#F3F3F3]/90"></div>

            <div className="relative z-10">
              <ul className="xl:space-y-5 space-y-3 text-[#4A4A4A] xl:text-lg 2xl:text-xl leading-relaxed">

                {[
                  "The United States is the world’s third-largest country, comprising 50 states.",
                  "Capital: Washington, D.C.",
                  "Currency: US Dollar.",
                  "The USA welcomes over a million international students annually.",
                  "Over 25% of the world’s top 100 universities are located in the USA.",
                  "Both Merit-Based and Need-Based Scholarships are available.",
                  "Choose from over 4,500 accredited universities and institutions.",
                  "12 U.S. cities rank among the world’s best student cities (QS Best Student Cities 2023).",
                  "Extensive opportunities for Research, Teaching, and Graduate Assistantships are available."
                ].map((item, index) => (
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
              src="/images/services/service-banner.jpg"
              alt="Students exploring"
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
