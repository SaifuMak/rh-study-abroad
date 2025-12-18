'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { countries } from "@/app/data/countries"

export function CountriesCarousal() {
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 2500,           // time between slides (ms)
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <Carousel
      className=" "
      opts={{
        loop: true,
        align: "center",
      }}
      plugins={[autoplayRef.current]}
    >
      <CarouselContent>
        {countries.map((item, index) => (
          <CarouselItem key={index} className="basis-1/5  ">
            <div className="">
              <Card className='py-0  px-3 border-none shadow-none bg-transparent ' >
                <CardContent className=" px-0  ">
                  <div className=" w-full h-[350px] ">
                    <img src={item.image} alt={item.name} className="w-full  rounded-2xl h-full object-cover " />
                  </div>
                  <p className="mt-3 text-xl">{item.name}</p>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
export default CountriesCarousal