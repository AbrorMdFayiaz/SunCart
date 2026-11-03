import React from 'react'
import FooterPortion1 from './FooterPortion1'
import FooterPortion2 from './FooterPortion2'
import FooterPortion3 from './FooterPortion3'
import FooterPortion4 from './FooterPortion4'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='bg-blue-950 py-10 text-base text-gray-400 sm:px-0 px-6'>
        <div className='container mx-auto'>
            <section className=' font-medium space-y-4 sm:grid lg:grid-cols-4 sm:gap-2.5'>
                <FooterPortion1></FooterPortion1>
                <FooterPortion2></FooterPortion2>
                <FooterPortion3></FooterPortion3>
                <FooterPortion4></FooterPortion4>
            </section>
            <FooterBottom></FooterBottom>
        </div>
    </div>
  )
}

export default Footer