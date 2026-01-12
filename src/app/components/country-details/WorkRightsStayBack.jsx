import Image from "next/image"

export default function WorkRightsStayBack() {

    const workRightsPoints = [
        "Post-graduation work visas (OPT) extend up to 3 years for STEM graduates.",
        "Curricular Practical Training (CPT) allows up to 12 months of internships during studies.",
    ]

    return (
        <section className="w-full pt-10 xl:pt-16 ">
            <div className=" mx-auto md:px-6 px-3">

                {/* Banner */}
                <div className="relative flex flex-col  items-center justify-center rounded-3xl  overflow-hidden min-h-[260px] md:min-h-[300px] xl:min-h-[400px] 2xl:min-h-[450px]">

                    {/* Background Image */}
                    <Image
                        src="/images/services/service-banner.jpg"
                        alt="Work rights and stay back"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[#5A1F2D]/80" />

                    <div className="relative z-10 h-full flex items-center justify-center text-center px-6 max-sm:py-6">
                        <div className="max-w-3xl text-white">

                            <h2 className="heading  font-semibold mb-2 md:mb-4">
                                Workrights and Stayback
                            </h2>

                            <ul className="mt-8 space-y-2 md:text-lg 2xl:text-xl text-white/90">
                                {workRightsPoints.map((point, index) => (
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
