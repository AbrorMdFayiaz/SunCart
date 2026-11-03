import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TopSection = () => {
  return (
    <div>
        <section className='flex justify-between pb-10 items-start'>
            <article className='space-y-4'>
                <h3 className='text-orange-500 text-[10px]  sm:text-base font-semibold'>Most Wanted</h3>
                <h1 className='text-black text-sm sm:text-2xl font-black '>Popular Summer Products</h1>
            </article>
            <Link href={"/products"} className="border-none mb-auto inline-block text-orange-500 rounded-2xl  to-violet-600  hover:text-orange-700 text-[10px]  sm:text-base font-semibold"><span>View All Products</span> <FaArrowRight className='inline-block' /></Link>
        </section>
    </div>
  )
}

export default TopSection