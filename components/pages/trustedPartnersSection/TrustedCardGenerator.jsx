import { Card } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const TrustedCardGenerator = ({name,image}) => {
  return (
    <div>
          <Card className=" gap-2 bg-base-100 p-6 rounded-2xl h-full">
            <div className=' p-2.5 w-fit rounded-xl text-2xl mx-auto h-full'>
                <Image alt='Logo of trusted Partners' className=' border-2 border-orange-200 w-20 rounded-xl' width={400} height={400} src={image}></Image>
            </div>
            <Card.Header>
              <Card.Title className='text-xl font-bold pt-2 pb-3.5'>{name}</Card.Title>
              <Card.Description className='font-medium text-gray-500' >UV Eyewear Leader</Card.Description>
            </Card.Header>
          </Card>
    </div>
  )
}

export default TrustedCardGenerator