'use client'

import React from 'react'
import IntroSection from '../components/about/IntroSection'
import TopBar from '../components/TopBar'
import MainHeader from '../components/MainHeader'
import SmoothScroll from '../components/SmoothScroll'
import WhoWeAre from '../components/about/WhoWeAre'
import MissionVision from '../components/about/MissionVision'
import GallerySection from '../components/about/GallerySection'
import Footer from '../components/Footer'

function AboutUsClient() {
    return (

        <SmoothScroll>
            <div className=" fixed top-0 w-full z-999">
                <TopBar isDark={true} />
                <MainHeader />
            </div>
            <div className="overflow-x-hidden">
                <IntroSection/>
                <WhoWeAre/>
                <MissionVision/>
                <GallerySection/>
                <Footer/>
            </div>
        </SmoothScroll>
    )
}

export default AboutUsClient