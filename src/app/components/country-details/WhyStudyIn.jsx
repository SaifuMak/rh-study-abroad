import Image from "next/image"
import { GraduationCap } from "lucide-react"

export default function WhyStudyIn() {
    const usaStudyFeatures = [
        {
            title: "Vibrant Campus Life and Student Support Systems",
            icon: GraduationCap,
        },
        {
            title: "Abundant Scholarship and Financial Aid Options",
            icon: GraduationCap,
        },
        {
            title: "Multicultural Environment and Global Networking",
            icon: GraduationCap,
        },
        {
            title: "Excellent Career Opportunities and High Earning Potential",
            icon: GraduationCap,
        },
        {
            title: "Optional Practical Training (OPT) and STEM OPT Extension",
            icon: GraduationCap,
        },
        {
            title: "Work Rights and Stay Back",
            icon: GraduationCap,
        },
        {
            title: "Strong Emphasis on Practical Learning and Skill Development",
            icon: GraduationCap,
        },
        {
            title: "Pioneering Research Opportunities",
            icon: GraduationCap,
        },
        {
            title: "Diverse Programs and Flexible Education System",
            icon: GraduationCap,
        },
        {
            title: "World-Class Academic Excellence",
            icon: GraduationCap,
        },
    ]
    return (
        <section className="w-full lg:py-20 flex ">
            <div className=" lg:pr-10">

                {/* Background Container */}
                <div className="relative lg:rounded-r-3xl  overflow-hidden flex justify-center ">

                    <div className=" border border-white 2xl:max-w-9/12 lg:max-w-10/12 md:max-w-10/12 max-w-11/12 ">

                        {/* Background Image */}
                        <Image
                            src="/images/services/service-banner.jpg"
                            alt="USA background"
                            fill
                            priority
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#3B3F7A]/70" />

                        <div className="relative z-10 py-10 lg:py-16 xl:py-20  2xl:py-24 text-white">

                            <h2 className=" heading mb-4 lg:mb-6">
                                Why study in USA
                            </h2>

                            <p className="xl:max-w-5xl lg:max-w-4xl  xl:text-xl font-light text-white leading-relaxed mb-12">
                                Pursue your education within one of the world’s most esteemed higher
                                education systems, where you’ll engage with advanced technology and
                                groundbreaking research for a deeply immersive and collaborative
                                learning experience. With a vast selection of institutions, diverse
                                academic disciplines, and specialised programs often unavailable
                                elsewhere, the U.S. offers unparalleled educational opportunities.
                                Its uniquely adaptable system allows you to tailor your studies to
                                align with your academic ambitions and career objectives.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {usaStudyFeatures.map((feature, index) => {
                                    const Icon = feature.icon

                                    return (
                                        <div
                                            key={index}
                                            className="bg-[#B1275D] rounded-2xl max-md:py-6 max-md:px-4 md:p-5 xl:p-6 text-center shadow-lg hover:scale-[1.02] transition"
                                        >
                                            <div className="flex justify-center mb-2 xl:mb-4">
                                                <Icon className="size-7 text-white" />
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
