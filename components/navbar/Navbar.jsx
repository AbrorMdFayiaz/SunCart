import React from 'react'
import NavLeftPortion from './NavLeftPortion'
import NavMiddlePortion from './NavMiddlePortion'
import NavRightPortion from './NavRightPortion'

const Navbar = () => {
  return (
    <div className='flex justify-between py-7 bg-base-100 container mx-auto items-center'>
      <NavLeftPortion></NavLeftPortion>
      <NavMiddlePortion></NavMiddlePortion>
      <NavRightPortion></NavRightPortion>
    </div>
  )
}

export default Navbar