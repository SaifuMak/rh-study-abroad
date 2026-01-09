import React from 'react'
import useGsapFadeIn from "@/app/hooks/gsap/useGsapFadeIn";
import useGsapOpacity from "@/app/hooks/gsap/useGsapOpacity";

function GallerySection() {

    const galleryImages = [
        {
            id: 1,
            src: "/images/about/gallery-1.jpg",
            alt: "Student exploring the world",
        },
        {
            id: 2,
            src: "/images/about/gallery-1.jpg",
            alt: "International study experience",
        },
        {
            id: 3,
            src: "/images/about/gallery-1.jpg",
            alt: "Campus life abroad",
        },
        {
            id: 4,
            src: "/images/about/gallery-1.jpg",
            alt: "Students collaborating",
        },
        {
            id: 5,
            src: "/images/about/gallery-1.jpg",
            alt: "Global education journey",
        },
        {
            id: 6,
            src: "/images/about/gallery-1.jpg",
            alt: "Learning without borders",
        },
    ];

     const contentRef = useGsapFadeIn()
    const centerContentRef = useGsapOpacity()
    const leftContentRef = useGsapOpacity()

    return (
        <section className="w-full  py-12 flex justify-end lg:py-20 lg:mt-10 bg-[#F3F3F3]">
            <div className="w-11/12 relative max-lg:mx-auto xl:pl-10 lg:pr-5 ">

                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-44 2xl:gap-56 mb-8 lg:mb-14">

                    {/* Left Text */}
                    <div ref={contentRef} className=' max-lg:text-center'>
                        <h2 className="heading font-semibold mb-4">
                            Gallery
                        </h2>
                        <p className=" lg:leading-10 md:text-lg lg:text-xl 2xl:text-[25px] font-light">
                            A Visual Journey Through Global Experiences: Explore the unforgettable moments,
                            vibrant cultures, and academic adventures captured by our students across the world.
                        </p>
                    </div>

                    {/* Right Tall Image */}
                    <div ref={leftContentRef} className="hidden lg:block ">
                        <div className="relative h-[420px] lg:h-[620px] xl:h-[820px] rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/images/about/paris.jpg"
                                alt="Gallery highlight"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>

                {/* Image Grid */}
                <div className=" lg:absolute lg:inset-0 ">
                    <div className=" w-full h-full lg:relative 2xl:pl-5  ">
                        <div ref={centerContentRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  md:gap-5  lg:w-9/12 2xl:w-8/12 rounded-2xl lg:p-3 2xl:p-5 bg-[#F3F3F3] lg:absolute lg:bottom-10 lg:2xl:bottom-0 lg:2xl:bottom-0 lg:right-0 lg:left-0  ">
                            {galleryImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative aspect-[4/3] rounded-2xl overflow-hidden "
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default GallerySection