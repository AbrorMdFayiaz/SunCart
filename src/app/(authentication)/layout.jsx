import React from 'react'

const layout = ({children}) => {
  return (
    <div className='bg-base-200'>
        <div className='container mx-auto p-10'>
            {children}
        </div>
    </div>
  )
}

export default layout