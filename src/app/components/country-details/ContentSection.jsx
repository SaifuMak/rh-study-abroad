import React from 'react'
import IntroSection from './IntroSection'
import StudyHighlights from './StudyHighlights'
import WhyStudyIn from './WhyStudyIn'
import WorkRightsStayBack from './WorkRightsStayBack'
import IntakesSection from './IntakesSection'
import FAQ from './FAQ'

function ContentSection({ country }) {
  return (
    <>
      <IntroSection data={country?.details?.intro} country={country?.name} />
      <StudyHighlights data={country?.details?.features} />
      <WhyStudyIn data={country?.details?.whyStudyIn} />
      <WorkRightsStayBack />
      <IntakesSection />
      <FAQ />
    </>
  )
}

export default ContentSection