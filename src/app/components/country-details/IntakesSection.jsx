import Image from "next/image"

export default function IntakesSection() {
    return (
        <section className="w-full 2xl:py-20 lg:py-16 py-10 bg-[#F8F3F5] mt-10 xl:mt-16">
            <div className="lg:max-w-11/12 mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="relative 2xl:col-span-5 max-lg:order-2 col-span-6 h-full max-lg:mt-8  bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/services/city-1.png')" }}

                    >
                        <div className="absolute z-0 inset-0 bg-[#F8F3F5]/90"></div>
                        <div className=" flex-center max-md:flex-col  max-md:text-center h-full lg:p-4 p-1  relative md:space-x-12 z-10">

                            <h2 className=" heading font-semibold text-black mb-3">
                                Intakes
                            </h2>

                            <div className=" text-lg xl:text-xl 2xl:text-2xl lg:max-w-md font-light  leading-8 lg:leading-10">
                                <p className="">
                                    Students have the opportunity to apply for admissions during three
                                    main intakes throughout the year-
                                </p>

                                <p className="">
                                    <strong>September</strong>, <strong>January</strong>, or{" "}
                                    <strong>May</strong>-depending on the university and program
                                    availability.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative 2xl:col-span-7 col-span-6 w-full h-[300px] xl:h-[400px] 2xl:h-[430px] rounded-3xl overflow-hidden md:shadow-xl">
                        <Image
                            src="/images/services/service-banner.jpg"
                            alt="Student intake information"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}
