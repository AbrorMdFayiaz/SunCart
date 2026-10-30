import React from 'react'
import DetailsTop from './DetailsTop'
import Card from './Card'

const Detail = ({id}) => {
  return (
    <div>
        <DetailsTop></DetailsTop>
        <Card id={id} ></Card>
    </div>
  )
}

export default Detail