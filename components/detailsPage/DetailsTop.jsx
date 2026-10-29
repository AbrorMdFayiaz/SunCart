import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const DetailsTop = () => {
  return (
    <div className=' bg-base-200 pt-5'>
        <article className='container mx-auto '>
            <Link href={"/products"} className='hover:text-orange-600 hover:font-bold my-auto'> <FaArrowLeft className='inline-block my-auto'></FaArrowLeft> Back to Products</Link>
        </article>
    </div>
  )
}

export default DetailsTop