import { Avatar, Card } from '@heroui/react'
import React from 'react'
import { MdWaterDrop } from 'react-icons/md'

const CardGenerator = ({icon}) => {
  return (
    <div>
      <Card className=" gap-2 bg-base-100 p-6 rounded-2xl">
        <div className='bg-orange-200 p-2.5 w-fit rounded-xl text-2xl'>
        {icon}
        </div>
        <Card.Header>
          <Card.Title className='text-xl font-bold pt-2 pb-3.5'>Hydration is Key</Card.Title>
          <Card.Description className='font-medium text-gray-500' >Drink at least 3 liters of water daily. Infuse your water with citrus or mint for a refreshing antioxidant boost under the hot sun.</Card.Description>
        </Card.Header>
      </Card>
    </div>
  )
}

export default CardGenerator