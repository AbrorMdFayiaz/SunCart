import React from 'react'
import CardGenerator from './CardGenerator'
import { MdWaterDrop } from 'react-icons/md'
import { FaHatCowboy, FaShieldAlt } from 'react-icons/fa'

const Cards = () =>{
  const cardDatas = [
    {
      icon: <MdWaterDrop className='text-orange-600'/>,
      title: "Hydration Tips",
      description: "Learn how to stay properly hydrated during the summer months."
    },
    {
      icon: <FaHatCowboy className='text-orange-600'/>,
      title: "Sun Protection",
      description: "Discover the best ways to protect yourself from harmful UV rays."
    },
    {
      icon: <FaShieldAlt className='text-orange-600'/>,
      title: "Safety Measures",
      description: "Important safety tips for enjoying the outdoors in the heat."
    }
  ];
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10'>
      {cardDatas.map((item, i) => (
        <CardGenerator
          key={i}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}

    </div>
  )
}

export default Cards