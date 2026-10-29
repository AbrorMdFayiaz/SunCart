import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TopSection = () => {
  return (
    <div>
        <section className='flex justify-between pb-10'>
            <article>
                <h3 className='text-orange-500 text-base font-semibold'>Most Wanted</h3>
                <h1 className='text-black text-2xl font-black'>Popular Summer Products</h1>
            </article>
            <Link href={"/products"} className="inline-block my-auto text-orange-500 rounded-2xl  to-violet-600 border-none hover:text-orange-700 text-base font-semibold"><span>View All Products</span> <FaArrowRight className='inline-block' /></Link>
        </section>
    </div>
  )
}

export default TopSection