import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const CardGenerator = () => {
  return (
    <div>
        <article className="card bg-base-100 shadow-sm">
            <section className='relative'>
                <div className="badge bg-blue-950 rounded-2xl  font-bold text-white absolute top-13 right-13"><FaStar className='text-yellow-400'/>4.7</div>
                <div className="badge absolute top-13 left-13 text-black font-bold">Accessories</div>
                <figure className="px-10 pt-10">
                    <Image
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      height={600}
                      width={600}
                      className="rounded-xl" ></Image>
                </figure>
            </section>
          <div className="card-body ">
            <p className='text-orange-600 font-medium'>AlohaVibe</p>
            <h2 className="card-title font-bold">UV Protection Sunglasses</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="divider"></div>
            <section className='flex justify-between'>
                <article className=''>
                    <p>Price</p>
                    <h3 className='font-black text-2xl'>$28</h3>
                </article>
              <Link href={"/productsDetails/o1"} className="btn bg-orange-100 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white">View Details</Link>
            </section>
          </div>
        </article>
    </div>
  )
}

export default CardGenerator