import React from 'react'
import TrustedTop from './TrustedTop'
import TrustedCards from './TrustedCards'

const TrustedPartnersSection = () => {
  return (
    <section className='bg-base-200 p-10'>
         <div className='text-center container mx-auto'>
             <TrustedTop></TrustedTop>
             <TrustedCards></TrustedCards>
         </div>
    </section>
  )
}

export default TrustedPartnersSection