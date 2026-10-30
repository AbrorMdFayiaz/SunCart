import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import CardGenerator from './CardGenerator'


const Cards = async () => {
  const res = await  fetch("https://json-server-for-suncart-website.onrender.com/products");
  const data = await res.json() ;
  return (
    <div className='grid grid-cols-3 gap-5'>

      {
        data.map((item,i)=> <CardGenerator item={item} key={i}></CardGenerator> )
      }
    </div>
  )
}

export default Cards