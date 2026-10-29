import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({className, item,route}) => {
    const currentRoute = usePathname();
    // let activePathStyle="";
    // if(route==currentRoute){
    //     const activePathStyle=" "
    // }

  return (
    <Link href={route} className={`text-base font-extrabold ${className} ${ route==currentRoute?"border-b-3 px-1 border-yellow-500":""} `}>{item}</Link>
  )
}

export default NavLink;