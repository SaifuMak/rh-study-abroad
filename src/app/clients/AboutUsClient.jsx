import React from 'react'
import IntroSection from '../components/about-us/IntroSection'
import TopBar from '../components/TopBar'
import MainHeader from '../components/MainHeader'
import SmoothScroll from '../components/SmoothScroll'

function AboutUsClient() {
    return (

        <SmoothScroll>
            <div className=" fixed top-0 w-full z-999">
                <TopBar isDark={true} />
                <MainHeader />
            </div>
            <div className="overflow-x-hidden">
                <IntroSection/>
            </div>
        </SmoothScroll>
    )
}

export default AboutUsClient