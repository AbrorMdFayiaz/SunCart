import Link from 'next/link'
import React from 'react'
import { FaSun } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from 'react-icons/io'

const FooterPortion1 = () => {
  return (
    <div className='space-y-4'>
            <div className='flex gap-4 items-center'>
                <section><div className='p-3.5 rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 w-fit text-white'><FaSun className='text-3xl' /></div></section>
                <section className='font-bold text-3xl '>
                    <span className='text-white'>Sun</span>
                    <span className='text-orange-400'>Cart</span>
                </section>
            </div>
            <p>Your ultimate destination for curated summer essentials. Stay protected, look stylish, and embrace the sun in total confidence.</p>
            <ul className='flex gap-4'>
                <Link href={""}><IoLogoInstagram className='w-10 h-10 text-base-200 bg-gray-700 p-2 rounded-full' /></Link>
                <Link href={""}><IoLogoTwitter className='w-10 h-10 text-base-200 bg-gray-700 p-2 rounded-full' /></Link>
                <Link href={""}><IoLogoFacebook className='w-10 h-10 text-base-200 bg-gray-700 p-2 rounded-full' /></Link>
                <Link href={""}><IoLogoPinterest className='w-10 h-10 text-base-200 bg-gray-700 p-2 rounded-full' /></Link>
            </ul>
    </div>
  )
}

export default FooterPortion1