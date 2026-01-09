'use client'
import React from "react"
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn"
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity"

export default function GetInTouch() {

    const detailsRef = useGsapFadeIn()
    const imageRef = useGsapOpacity()

    return (
        <section className="w-full bg-[#771D40]  my-10 xl:my-24 py-12 lg:py-20 2xl:px-8 ">
            <div className="lg:max-w-10/12 max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-start ">

                {/* Left Content */}
                <div ref={detailsRef} className="text-white space-y-6">
                    <h2 className=" 2xl:text-6xl xl:text-5xl text-4xl font-semibold mb-10 xl:mb-12 2xl:mb-20">
                        Get in Touch with us
                    </h2>

                    {/* Location */}
                    <ContactInfoItem
                        icon="/images/contact-us/location.svg"
                        title="Location"
                        href="https://maps.app.goo.gl/iRtNMWUfymbHZQJe9"
                    >
                        <>
                            Ambakkadan Jn, P.I.K Tower,<br />
                            St Thomas College Rd, Thrissur,<br />
                            Kerala 680001
                        </>
                    </ContactInfoItem>

                    {/* Phone */}
                    <ContactInfoItem
                        icon="/images/contact-us/call.svg"
                        title="Contact Us"
                        href="tel:+919544221155"
                    >
                        +91 9544 22 11 55
                    </ContactInfoItem>

                    {/* Email */}
                    <ContactInfoItem
                        icon="/images/contact-us/email.svg"
                        title="Mail ID"
                        href="mailto:info@nhstudyabroad.com"
                    >
                        info@nhstudyabroad.com
                    </ContactInfoItem>

                </div>

                {/* Right Card */}
                <div ref={imageRef} className="bg-[#992E58] rounded-3xl px-4 md:px-7  max-lg:mt-12 xl:px-10 2xl:px-20 py-10 text-white">
                    <h3 className="text-center text-xl lg:text-2xl font-medium ">
                        20 Countries to Study Abroad
                    </h3>

                    {/* Map Placeholder */}
                    <div className="flex justify-center  ">
                        <img
                            src="/images/contact-us/world-map-2.png"
                            alt="World Map"
                            className=" 2xl:h-[450px] xl:h-[380px] lg:h-[300px] md:h-[400px] h-[250px] w-full opacity-90"
                        />
                    </div>

                    {/* Country List */}
                    <div className="grid grid-cols-3  font-light mx-auto lg:w-fit max-xl:text-sm gap-x-10 xl:gap-x-15  sm:grid-cols-4 gap-y-2  text-white">
                        {[
                            "USA", "UK", "Canada", "Australia", "New Zealand",
                            "Ireland", "France", "Germany", "Sweden", "Switzerland",
                            "Austria", "Denmark", "Finland", "Malta", "Italy",
                            "Latvia", "Netherlands", "Singapore", "Malaysia", "UAE"
                        ].map((country) => (
                            <div key={country} className="flex text-nowrap items-center gap-1 xl:gap-2">
                                <span className="md:text-xs text-[8px]">▢</span>
                                <span>{country}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

function ContactInfoItem({
    icon,
    title,
    children,
    href,
    showDivider = true,
}) {
    const ContentWrapper = href ? 'a' : 'div'

    return (
        <div className="flex space-x-1 lg:space-x-2 2xl:space-x-3">
            <img
                src={icon}
                alt={title}
                className="2xl:mt-1 lg:mt-2 mt-1 size-5 lg:size-6 2xl:size-7"
            />

            <div>
                <p className="2xl:text-3xl lg:text-2xl text-xl font-light">{title}</p>

                <ContentWrapper
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block xl:text-lg font-light mt-3 text-white/90 ${href ? 'hover:text-white  transition-colors cursor-pointer' : ''
                        }`}
                >
                    {children}
                </ContentWrapper>

                {showDivider && (
                    <hr className="border-white/30 mt-4 lg:mt-6 w-84 " />
                )}
            </div>
        </div>
    )
}