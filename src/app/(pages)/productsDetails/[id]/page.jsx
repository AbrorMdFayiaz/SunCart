import React from 'react'
import Detail from '../../../../../components/detailsPage/Detail'

const page = async ({params}) => {
  const { id } = await params
  // const post = await getPost(slug)
  console.log( id , "params")
  return (
    <div>
        <Detail id={id} ></Detail>
    </div>
  )
}

export default page