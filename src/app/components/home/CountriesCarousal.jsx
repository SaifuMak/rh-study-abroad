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
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const [api, setApi] = React.useState(null)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full ">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[autoplayRef.current]}
      >
        <CarouselContent>
          {countries.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/3 xl:basis-1/5 2xl:basis-1/5">
              <Card className="py-0  lg:px-4 xl:px-1 2xl:px-3 border-none shadow-none bg-transparent">
                <CardContent className="px-0">
                  <div className="w-full lg:h-[330px] xl:h-[320px] 2xl:h-[360px] lg:h-[310px] h-[280px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-2xl xl:object-cover"
                    />
                  </div>
                  <p className="mt-3 lg:text-xl text-white">{item.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* INDICATOR LINES */}
      <div className="flex md:ml-3 max-w-[200px]  md:max-w-[400px] max-md:mx-auto  gap-2 mt-5 md:mt-10 md:w-3/12">
        {countries.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[3px] flex-1 rounded-full transition-all duration-300 cursor-pointer
        ${index === current ? "bg-white" : "bg-white/30 hover:bg-white/60"}
      `}
          />
        ))}
      </div>

    </div>
  )
}

export default CountriesCarousal
