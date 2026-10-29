"use client"
import React from 'react'
import NavLink from './NavLink';
// import { usePathname } from 'next/navigation';

const NavMiddlePortion = () => {
    const navLinks = ["Home","Products","My Profile"];
    const navRoutes = ["/", "/products","/profile"]

    // console.log(route , "routtt");
  return (
    <div>
        <ul className='flex gap-5'>
        {
            navLinks.map((item , i)=>{
                return <NavLink key={i} className='text-gray-600 text-2xl font-medium' item={item} route={navRoutes[i]} ></NavLink>
            } )
        }
        </ul>
    </div>
  )
}

export default NavMiddlePortion