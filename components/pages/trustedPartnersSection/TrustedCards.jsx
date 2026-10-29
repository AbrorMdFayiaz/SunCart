import React from 'react'
import TrustedCardGenerator from './TrustedCardGenerator'

const TrustedCards = () => {
  return (
    <div className='grid grid-cols-3 gap-4 pt-10'>
        <TrustedCardGenerator></TrustedCardGenerator>
        <TrustedCardGenerator></TrustedCardGenerator>
        <TrustedCardGenerator></TrustedCardGenerator>
    </div>
  )
}

export default TrustedCards