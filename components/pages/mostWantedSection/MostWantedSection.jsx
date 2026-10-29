import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TopSection from './TopSection'
import Cards from './Cards'

const MostWantedSection = () => {
  return (
    <div className='bg-base-200 py-15'>
        <div className=' container mx-auto'>
          <TopSection></TopSection>
          <Cards></Cards>
        </div>
    </div>
  )
}

export default MostWantedSection
