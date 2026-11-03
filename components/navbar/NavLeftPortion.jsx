import Link from 'next/link'
import React from 'react'
import { FaSun } from 'react-icons/fa'

const NavLeftPortion = () => {
  return (
    <Link className='flex gap-1 sm:gap-2' href={"/"}>
        <section><div className='p-2 sm:p-3.5 rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 w-fit text-white'><FaSun className='text-xl sm:text-3xl'/></div></section>
        <section className='font-bold text-xl sm:text-3xl flex flex-col items-baseline justify-center gap-1 sm:gap-2'>
            <h1>
              <span className='text-black'>Sun</span>
            <span className='text-orange-400'>Cart</span>
            </h1>
            <p className='text-[8px] sm:text-xs text-orange-800 font-semibold'>SUMMER<span className='pl-1'>ESSENTIALS</span></p>
        </section>
    </Link>
  )
}

export default NavLeftPortion