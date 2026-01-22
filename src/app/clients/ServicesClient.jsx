'use client'
import React from 'react'
import TopBar from '../components/TopBar'
import MainHeader from '../components/MainHeader'
import SmoothScroll from '../components/SmoothScroll'
import IntroSection from '../components/services/IntroSection'
import ServiceSection from '../components/services/ServiceSection'
import ContactSection from '../components/services/ContactSection'
import Footer from '../components/Footer'

function ServicesClient() {
    return (

        <SmoothScroll>
            <div className=" fixed top-0 w-full z-999">
                <TopBar isDark={true} />
                <MainHeader />
            </div>
            <div className="overflow-x-hidden">
                <IntroSection />
                <ServiceSection />
                <ContactSection/>

                <Footer />
            </div>
        </SmoothScroll>
    )
}

export default ServicesClient