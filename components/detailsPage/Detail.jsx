"use client"
import React from 'react'
import DetailsTop from './DetailsTop'
import Card from './Card'
import { PiSignInBold } from 'react-icons/pi'
import { authClient } from '@/app/lib/auth-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Detail = ({id}) => {
    const { data: session } = authClient.useSession();
    console.log(session?.user, "see");

    const params= usePathname();
  return (
    <div className="">
        <DetailsTop></DetailsTop>
        {
            !session? 
      <div className="bg-base-200 px-3 sm:px-0 p-10">
        <section className="container mx-auto text-center bg-base-100 card w-fit p-15">
          <h1 className="text-orange-400 font-black text-3xl">User Not Logged In!!</h1>
          <p className="text-gray-500 font-bold pt-16 pb-2">Sign In Below to Get the Details of the Product.</p>
          <Link
            href={`/signin?callbackUrl=${encodeURIComponent(params)}`}  
            className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-6 text-white font-bold text-base"
          >
            <PiSignInBold />
            Sign In
          </Link>
        </section>
      </div>
      :
      <Card id={id} ></Card>
        }
    </div>
  )
}

export default Detail
