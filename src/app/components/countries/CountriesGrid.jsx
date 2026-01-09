import Image from "next/image"
import { countries } from "@/app/data/countries"

export default function CountriesGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 gap-10">
            {countries.map((country, index) => (
                <div
                    key={index}
                    className="relative  h-[350px] lg:h-[350px] xl:h-[420px] rounded-3xl overflow-hidden group"
                >
                    {/* Image */}
                    <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />

                    {/* Bottom content */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <h3 className="text-white text-lg xl:text-xl font-medium">
                            {country.name}
                        </h3>

                        <button className="px-4 py-1 text-xs md:text-sm  hover:bg-white/30 bg-white/10 text-white border rounded-sm">
                            Read More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
