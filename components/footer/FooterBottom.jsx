import Link from 'next/link'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className='border-t-2 border-gray-600 mt-9 pt-7 flex-none md:flex justify-between space-y-2'>
        <p className='pb-5'>
            © 2026 SunCart Inc.All rights reserved.
        </p>
        <ul className='space-x-3 flex flex-col gap-6 sm:flex-none md:flex-row md:items-center md:gap-6 '>
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
            <Link href="">Cookie Policy</Link>
        </ul>
    </div>
  )
}

export default FooterBottom