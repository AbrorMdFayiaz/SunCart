import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import CardGenerator from './CardGenerator'

const Cards = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
        <CardGenerator></CardGenerator>
        <CardGenerator></CardGenerator>
        <CardGenerator></CardGenerator>
        <CardGenerator></CardGenerator>
    </div>
  )
}

export default Cards