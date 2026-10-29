import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'

const layout = ({children}) => {
  return (
    <div>
        <div className="">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
    </div>
  )
}

export default layout