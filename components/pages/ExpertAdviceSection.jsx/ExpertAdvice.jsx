import React from 'react'
import ExpertTop from './ExpertTop'
import Cards from './Cards'

const ExpertAdvice = () => {
  return (
    <div className='bg-orange-50 py-20'>
        <div className='container mx-auto space-y-4'>
            <ExpertTop></ExpertTop>
            <Cards></Cards>
        </div>
    </div>
  )
}

export default ExpertAdvice