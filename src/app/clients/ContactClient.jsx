'use client'
import React from 'react'
import TopBar from '../components/TopBar'
import MainHeader from '../components/MainHeader'
import SmoothScroll from '../components/SmoothScroll'
import IntroSection from '../components/contact-us/IntroSection'
import Map from '../components/contact-us/Map'
import Footer from '../components/Footer'
import GetInTouch from '../components/contact-us/GetInTouch'

function ContactClient() {
    return (

        <SmoothScroll>
            <div className=" fixed top-0 w-full z-999">
                <TopBar isDark={true} />
                <MainHeader />
            </div>
            <div className="overflow-x-hidden">
                <IntroSection />
                <GetInTouch/>
                <Map/>
                
                <Footer />
            </div>
        </SmoothScroll>
    )
}

export default ContactClient