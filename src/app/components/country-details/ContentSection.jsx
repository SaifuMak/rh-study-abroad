import React from 'react'
import IntroSection from './IntroSection'
import StudyHighlights from './StudyHighlights'
import WhyStudyIn from './WhyStudyIn'
import WorkRightsStayBack from './WorkRightsStayBack'
import IntakesSection from './IntakesSection'
import FAQ from './FAQ'

function ContentSection() {
  return (
    <>
      <IntroSection />
      <StudyHighlights />
      <WhyStudyIn />
      <WorkRightsStayBack/>
      <IntakesSection/>
      <FAQ/>
    </>
  )
}

export default ContentSection