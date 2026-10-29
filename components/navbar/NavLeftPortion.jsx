import Link from 'next/link'
import React from 'react'
import { FaSun } from 'react-icons/fa'

const NavLeftPortion = () => {
  return (
    <Link className='flex gap-4' href={"/"}>
        <section><div className='p-3.5 rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 w-fit text-white'><FaSun className='text-3xl'/></div></section>
        <section className='font-bold text-3xl '>
            <span className='text-black'>Sun</span>
            <span className='text-orange-400'>Cart</span>
            <p className='text-[12px] text-orange-800 font-semibold'>SUMMER ESSENTIALS</p>
        </section>
    </Link>
  )
}

export default NavLeftPortion