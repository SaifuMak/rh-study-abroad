
import Image from 'next/image';
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

export default function WhoWeAre() {
    const teamMembers = [
        {
            name: "Sebastian Antony",
            role: "Founder & Managing Director",
            image: "/images/about/gir-with-map-2.jpg"
        },
        {
            name: "Binny Sebastian",
            role: "Director",
            image: "/images/about/gir-with-map-2.jpg"
        },
        {
            name: "Greeshma Thomas",
            role: "Executive Director",
            image: "/images/about/gir-with-map-2.jpg"
        }
    ];

     const firstRef = useGsapFadeIn()
     const contentRef = useGsapFadeIn()
     const foundersRef = useGsapFadeIn()
     const secondContentRef = useGsapFadeIn()


    return (
        <section className="w-full lg:pr-6">
            <div className="bg-[#771D400D] lg:rounded-r-xl xl:py-20 py-12 lg:mt-10 px-4 sm:px-6 lg:px-8">
                <div className="2xl:max-w-5xl md:max-w-10/12 max-w-11/12 mx-auto">
                    {/* Header */}
                    <h2 ref={firstRef} className="heading xl:mb-8 mb-4 text-center  font-semibold text-[#7A0026]">
                        Who We Are
                    </h2>

                    {/* Description */}
                    <p ref={contentRef} className="description text-center !max-w-11/12">
                        RH Study Abroad is an academic consultancy organization providing every suitable advice and
                        assistance to the requirements of those who desire to pursue their higher education abroad. Since
                        its establishment in 2007 the institution has been the frontrunner in catalyzing the admissions of
                        scores of students to various foreign universities / colleges.
                    </p>

                    {/* Team Members */}
                    <div ref={foundersRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 xl:my-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative w-full  aspect-9/10 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-2 left-0 max-w-11/12 rounded-r-xl overflow-hidden right-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-4">
                                        <h3 className="text-white font-bold xl:text-xl mb-1">{member.name}</h3>
                                        <p className="text-white/90 max-xl:text-sm">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Founder Description */}
                    <p ref={secondContentRef} className="  mx-auto xl:text-xl lg:leading-8 xl:leading-10 font-light text-center !max-w-11/12">
                        Mr Sebastian Antony, the Founder and CEO of the Organization, has enormous experience of nearly two decades to his
                        credit in this arena. Our office at Ambakkadan Junction in Thrissur is a testimony to the reputation and recognition we
                        possess in the spectrum of overseas higher education. The persistent patronage by our benefactors has been the
                        driving force behind our consistent effort towards success.
                    </p>
                </div>
            </div>
        </section>
    );
}