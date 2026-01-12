'use client'
import React from 'react'
import TopBar from '../components/TopBar'
import MainHeader from '../components/MainHeader'
import SmoothScroll from '../components/SmoothScroll'
import Footer from '../components/Footer'
import ContentSection from '../components/country-details/ContentSection'

function CountryDetailsClient() {
    return (

        <SmoothScroll>
            <div className=" fixed top-0 w-full z-999">
                <TopBar isDark={true} />
                <MainHeader />
            </div>
            <div className="overflow-x-hidden">
                <ContentSection />
               
                <Footer />
            </div>
        </SmoothScroll>
    )
}

export default CountryDetailsClient