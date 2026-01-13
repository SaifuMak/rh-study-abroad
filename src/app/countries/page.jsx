import CountriesClient from "../clients/CountriesClient";


export const metadata = {
    title: "Study Abroad Destinations | RH Study Abroad",
    description:
        "Find the best countries to study abroad with RH Study Abroad. Compare destinations, universities, costs, and career opportunities with expert counseling support.",
    openGraph: {
        title: "Study Abroad Destinations | RH Study Abroad",
        description:
            "Browse popular study abroad countries and universities with RH Study Abroad.",
        url: "https://rhstudyabroad.com/countries",
        siteName: "RH Study Abroad",
        type: "website",
    },
}

export default function Countries() {

    return (

        <CountriesClient />

    );
}
