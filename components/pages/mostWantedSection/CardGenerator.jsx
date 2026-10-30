import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const CardGenerator = ({item:a}) => {
  return (
    <div>
        <article className="card bg-base-100 shadow-sm h-full">
            <section className='relative h-full'>
                <div className="badge bg-blue-950 rounded-2xl  font-bold text-white absolute top-13 right-13"><FaStar className='text-yellow-400'/>{a.rating}</div>
                <div className="badge absolute top-13 left-13 text-black font-bold">{a.category}</div>
                <figure className="px-10 pt-10 flex">
                    <Image
                      src={a.image}
                      alt="Shoes"
                      height={600}
                      width={600}
                      className="rounded-xl align-middle" ></Image>
                </figure>
            </section>
          <div className="card-body ">
            <p className='text-orange-600 font-medium'>{a.brand}</p>
            <h2 className="card-title font-bold">{a.name}</h2>
            <p>{a.description}</p>
            <div className="divider"></div>
            <section className='flex justify-between'>
                <article className=''>
                    <p>Price</p>
                    <h3 className='font-black text-2xl'>${a.price}</h3>
                </article>
              <Link href={`/productsDetails/${a.id}`} className="btn bg-orange-100 rounded-xl text-orange-500 hover:bg-orange-500 hover:text-white">View Details</Link>
            </section>
          </div>
        </article>
    </div>
  )
}

export default CardGenerator