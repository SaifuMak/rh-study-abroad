import CountryDetailsClient from "@/app/clients/CountryDetailsClient";
import { countries } from "@/app/data/countries";
import { notFound } from "next/navigation"

export  default async function Country({ params }) {

    const {country} = await params

    const SelectedCountry = countries[country]

    if (!SelectedCountry) return notFound()

    return (

        <CountryDetailsClient country={SelectedCountry} />

    );
}
