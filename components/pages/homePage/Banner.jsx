import React from 'react'
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bg-linear-150 from-orange-50 to-orange-200'>
        <div className="hero min-h-screen container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt="Tailwind CSS hero component"
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
                <p className='animate__animated animate__bounce  animate__fast'>Hot Deals 🔥 Summer Sale 50% OFF</p>
              <h1 className="text-5xl font-bold">Elevate Your <span className='bg-linear-to-br from-orange-300 to-violet-600 text-transparent bg-clip-text'>Summer Vibe</span></h1>
              <p className="py-6">
                Discover our exclusive collection of seasonal sunglasses, trendy beach apparel, and nourishing skincare essentials designed for unforgettable adventures.
              </p>
              <section className='space-x-2.5'>
                <Link href={"/products"} className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-6">Explore Collection <FaArrowRight /></Link>
                <Link href={"/profile"} className="btn btn-primary rounded-2xl bg-white border-none text-black p-6">My Profile</Link>
              </section>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner