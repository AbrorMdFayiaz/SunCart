import Link from 'next/link'
import React from 'react'

const FooterPortion3 = () => {
  return (
    <div className='space-y-4'>
        <h1 className='text-white text-xl font-semibold'>Top Categories</h1>
        <ul className='flex flex-col gap-3'>
            <Link href="/">UV Sunglasses</Link>
            <Link href="/">Skincare & SPF</Link>
            <Link href="/">Skincare & SPF</Link>
            <Link href="/">Beach Accessories</Link>
        </ul>
    </div>
  )
}

export default FooterPortion3