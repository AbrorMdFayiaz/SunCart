import React from 'react'
import CardGenerator from './CardGenerator'
import { MdWaterDrop } from 'react-icons/md'
import { FaHatCowboy, FaShieldAlt } from 'react-icons/fa'

const Cards = () => {
  return (
    <div className='grid grid-cols-3 gap-6 pt-10'>
        <CardGenerator icon={<MdWaterDrop  className='text-orange-600'/>} ></CardGenerator>
        <CardGenerator icon={<FaHatCowboy  className='text-orange-600'/>} ></CardGenerator>
        <CardGenerator icon={<FaShieldAlt  className='text-orange-600'/>} ></CardGenerator>
    </div>
  )
}

export default Cards