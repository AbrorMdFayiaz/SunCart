import React from 'react'
import TrustedCardGenerator from './TrustedCardGenerator'

const TrustedCards = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10'>
        <TrustedCardGenerator name={"SUNGLASSES"} smallDescription={"Premium sunglasses"} image={"https://cdn.creativefabrica.com/2022/09/03/sunglasses-or-eyeglass-company-logo-Graphics-37681824-1.jpg"}></TrustedCardGenerator>
        <TrustedCardGenerator name={"SUMMER"} smallDescription={"Essential summer products"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwteeXPSd3vdkkG-4bcFXuj8Kx3vZyoWwlMyjxskyBzg&s=10"}></TrustedCardGenerator>
        <TrustedCardGenerator name={"RELAXING"} smallDescription={"Summer premium products"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNKhNegsqbYXRZx4Ba7Hdcm8WHrCbkdld5KwfbdM2Dg&s=10"}></TrustedCardGenerator>
    </div>
  )
}

export default TrustedCards

