import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const FooterPortion4 = () => {
  return (
    <div className='space-y-4'>
        <h1 className='text-white text-xl font-semibold'>Contact Us</h1>
        <ul className='flex flex-col gap-3'>
            <Link href="/"><FaLocationDot className='inline-block text-orange-400' /> 123 Coastal Highway, Summer Bay, CA 90291</Link>
            <Link href="/"><IoCall className='inline-block text-orange-400'  /> +1 (555) 786-6322</Link>
            <Link href="/"><IoIosMail className='inline-block text-orange-400' /> support@suncart.com</Link>
        </ul>
    </div>
  )
}

export default FooterPortion4




