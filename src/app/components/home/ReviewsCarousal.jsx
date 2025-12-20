'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { sansita } from '../../fonts';


const reviews = [
    {
        name: "Karan M.",
        date: "04 July 2025",
        initial: "K",
        color: "bg-green-700",
        rating: 5,
        text:
            "RH Study Abroad made my dream of studying in the UK come true. Their process was smooth and stress-free!",
    },
    {
        name: "Rohit SH.",
        date: "04 July 2025",
        initial: "R",
        color: "bg-purple-700",
        rating: 5,
        text:
            "Thanks to RH, I got into my top-choice university in Australia. They supported me every step of the way.",
    },
    {
        name: "Divya Rai.",
        date: "04 July 2025",
        initial: "D",
        color: "bg-blue-600",
        rating: 4,
        text:
            "From visa help to prep sessions, RH was always there. I’m now studying in the USA—grateful for their expert team!",
    },
    {
        name: "Sneha J.",
        date: "04 July 2025",
        initial: "S",
        color: "bg-orange-500",
        rating: 5,
        text:
            "They treated my journey like their own. I highly recommend RH to any student dreaming of studying abroad.",
    },
    {
        name: "Karan M.",
        date: "04 July 2025",
        initial: "K",
        color: "bg-green-700",
        rating: 5,
        text:
            "RH Study Abroad made my dream of studying in the UK come true. Their process was smooth and stress-free!",
    },
    {
        name: "Rohit SH.",
        date: "04 July 2025",
        initial: "R",
        color: "bg-purple-700",
        rating: 5,
        text:
            "Thanks to RH, I got into my top-choice university in Australia. They supported me every step of the way.",
    },
    {
        name: "Divya Rai.",
        date: "04 July 2025",
        initial: "D",
        color: "bg-blue-600",
        rating: 4,
        text:
            "From visa help to prep sessions, RH was always there. I’m now studying in the USA—grateful for their expert team!",
    },
    {
        name: "Sneha J.",
        date: "04 July 2025",
        initial: "S",
        color: "bg-orange-500",
        rating: 5,
        text:
            "They treated my journey like their own. I highly recommend RH to any student dreaming of studying abroad.",
    },
]

export default function ReviewsCarousel() {
    const autoplayRef = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const [api, setApi] = React.useState(null)
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => setCurrent(api.selectedScrollSnap()))
    }, [api])

    return (
        <section className="w-full py-8 md:py-16 xl:py-20 bg-[#f3f3f3] rounded-3xl">
            <div className="xl:max-w-10/12 max-w-11/12 mx-auto px-6">

                {/* HEADING */}
                <h2 className={`${sansita.className} text-center heading mb-8 md:mb-12 xl:mb-20`}>
                    Google Reviews
                </h2>

                {/* CAROUSEL */}
                <Carousel
                    setApi={setApi}
                    opts={{ align: "start", loop: true }}
                    plugins={[autoplayRef.current]}
                >
                    <CarouselContent className="-ml-6">
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                            >
                                <Card className="rounded-2xl h-full border-none shadow-none">
                                    <CardContent className="xl:p-5 p-5 flex flex-col h-full">
                                        {/* HEADER */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-3 items-center">
                                                <div
                                                    className={` size-7 shrink-0 md:size-10 rounded-full text-white flex items-center justify-center font-semibold ${review.color}`}
                                                >
                                                    {review.initial}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{review.name}</p>
                                                    <p className="text-xs text-gray-400">{review.date}</p>
                                                </div>
                                            </div>

                                            <img
                                                src="/images/home/google-logo.png"
                                                alt="Google"
                                                className="size-5 shrink-0 md:size-8"
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <p className="text-gray-700 text-sm mt-4 leading-relaxed flex-1">
                                            “{review.text}”
                                        </p>

                                        {/* STARS */}
                                        <div className="flex gap-1  mt-4">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-lg ${i < review.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                        }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


                {/* INDICATOR LINES */}
                <div className="flex justify-center  gap-2 mt-10 2xl:mt-16 max-w-[200px]  md:max-w-xs mx-auto">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-[3px] flex-1 rounded-full transition-all
                                ${index === current
                                    ? "bg-[#771D40]"
                                    : "bg-[#7a1d2b]/30"
                                }
                                  `}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
