import React from 'react'
import CardGenerator from '../../../../components/pages/mostWantedSection/CardGenerator'

const page = async () => {
  const res = await  fetch("https://json-server-for-suncart-website.onrender.com/products");
  const data = await res.json() ;
  return (
    <div className='bg-base-200'>
          <div className='container mx-auto space-y-7 py-12'>
      <h1 className='text-3xl font-black text-orange-400'>Explore All Summer Essentials</h1>
      <section className='grid grid-cols-4 gap-4'>
        {
          data.map((item,i)=> <CardGenerator key={i} item={item}></CardGenerator> )
        }
      </section>
    </div>
    </div>
  )
}

export default page