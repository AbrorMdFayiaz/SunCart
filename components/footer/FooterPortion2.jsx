import Link from 'next/link'
import React from 'react'

const FooterPortion2 = () => {
  return (
    <div className='space-y-4'>
        <h1 className='text-white text-xl font-semibold'>Quick Links</h1>
        <ul className='flex flex-col gap-3'>
            <Link href="/">Home Page</Link>
            <Link href="/products">Summer Products</Link>
            <Link href="/profile">My Profile</Link>
            <Link href="/">Sign In / Register</Link>
        </ul>
    </div>
  )
}

export default FooterPortion2