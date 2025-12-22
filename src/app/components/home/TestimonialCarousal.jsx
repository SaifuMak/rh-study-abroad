'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { FaPlay } from "react-icons/fa"

const images = [
  "/images/testimonials/img1.jpg",
  "/images/testimonials/img2.jpg",
  "/images/testimonials/img3.jpg",
  "/images/testimonials/img4.jpg",
  "/images/testimonials/img1.jpg",
  "/images/testimonials/img2.jpg",
  "/images/testimonials/img3.jpg",
  "/images/testimonials/img4.jpg",
]

export default function TestimonialCarousal() {

  const autoplayRef = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <section className="w-full md:hidden py-8   ">
      <div className=" w-11/12 mx-auto">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
        >
          <CarouselContent className="-ml-6">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-1/2  "
              >
                <div className="relative group  rounded-xl overflow-hidden">

                  {/* Image */}
                  <img
                    src={img}
                    alt={`testimonial-${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <div className="relative size-10 rounded-full border-[3px] border-white bg-transparent flex items-center justify-center">
                      <FaPlay className="text-white text-xs ml-0.5" />
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  )
}
