import React from 'react'
import Banner from '../../../components/pages/homePage/Banner'
import MostWantedSection from '../../../components/pages/mostWantedSection/MostWantedSection'
import ExpertAdvice from '../../../components/pages/ExpertAdviceSection.jsx/ExpertAdvice'
import TrustedPartnersSection from '../../../components/pages/trustedPartnersSection/TrustedPartnersSection'

const page = () => {
  return (
    <div>
        <Banner></Banner>
        <MostWantedSection></MostWantedSection>
        <ExpertAdvice></ExpertAdvice>
        <TrustedPartnersSection></TrustedPartnersSection>
    </div>
  )
}

export default page