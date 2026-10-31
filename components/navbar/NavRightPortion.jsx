"use client"
import { authClient } from '@/app/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

const NavRightPortion = () => {

  const router = useRouter();

  const { data: session } = authClient.useSession();
  console.log(session?.user,"see")
  const user=session?.user;

  // signout functionality
  const signOutHandler = async ()=>{
    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.replace("/"); // redirect to login page
    },
  },
});


  }
  return (
    <div className='flex gap-7 font-bold'>
        <Link href={"/profile"} className='bg-[#fff7ed] rounded-full flex gap-3 p-2 pr-5 border-2 border-orange-200'>
            <div className='rounded-full border-2 border-orange-500 w-10 h-10 overflow-hidden shrink-0'><Image className='rounded-full object-contain' src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYc_nH36xssx6tM83og18mzFq7OtM8fZ2-YR2ggUZk6g&s=10" } width={40} height={40} alt='profile picture' ></Image></div>
            <section className='text-gray-600  my-auto'>{user?.name}</section>
        </Link>
        <button onClick={()=>signOutHandler()} className='flex gap-1.5 justify-center items-center hover:bg-[#fef2f2] p-4 rounded-3xl'>
            <FiLogOut className='font-bold' /><span> Logout</span>
        </button>
    </div>
  )
}

export default NavRightPortion