'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function StudyAbroadStatsMobile({ stats }) {
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 2500,           // time between slides (ms)
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <Carousel
      className="md:hidden"
      opts={{
        loop: true,  
        align: "center",
      }}
      plugins={[autoplayRef.current]}
    >
      <CarouselContent>
        {stats.map((item, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-2">
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-4">
                  <p className="text-primary-red text-2xl font-semibold">
                    {item.value}
                  </p>
                  <p className="text-sm mt-1 text-center">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
