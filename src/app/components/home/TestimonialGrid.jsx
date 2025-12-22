'use client'

import { FaPlay } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const TestimonialsImages = [
    "/images/testimonials/img4.jpg",
    "/images/testimonials/img1.jpg",
    "/images/testimonials/img2.jpg",
    "/images/testimonials/img4.jpg",
    "/images/testimonials/img1.jpg",
    "/images/testimonials/img3.jpg",
    "/images/testimonials/img4.jpg",
    "/images/testimonials/img3.jpg",
    "/images/testimonials/img4.jpg",
    "/images/testimonials/img1.jpg",
    "/images/testimonials/img4.jpg",
    "/images/testimonials/img1.jpg",
];

export default function TestimonialGrid() {
    const gridRef = useRef(null);

    useGSAP(() => {
        gsap.from(".testimonial-card", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                toggleActions: 'play none none reverse'
            },
        });
    }, []);

    return (
        <div className="w-full max-md:hidden ">
            <div
                ref={gridRef}
                className="grid grid-cols-1  sm:grid-cols-3   lg:grid-cols-5 2xl:grid-cols-6 gap-6"
            >
                {TestimonialsImages.map((img, index) => (
                    <div
                        key={index}
                        className="testimonial-card relative group  rounded-lg overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={img}
                            alt={`testimonial-${index + 1}`}
                            className="w-full h-full object-cover rounded-lg "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 rounded-2xl transition-opacity  duration-300 group-hover:opacity-0" />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                            <div className="relative size-12 rounded-full border-[3px] bg-white/20 border-white  flex items-center justify-center">
                                <FaPlay className="text-white text-lg ml-0.5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
