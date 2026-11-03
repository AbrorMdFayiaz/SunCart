"use client";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const NavRightPortion = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  console.log(session?.user, "see");
  const user = session?.user;

  // signout functionality
  const signOutHandler = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/");
          toast.success("Logged out successfully.");

        },
      },
    });
  };
  return (
    <div className="flex gap-1 sm:gap-3 font-bold items-center">
      {session ? (
        // User Icon , name and LogOut button - showed if session exists
        <>
          <Link
            href={"/profile"}
            className="bg-[#fff7ed] rounded-full flex gap-3 p-1.5 pr-3 border-2 border-orange-200"
          >
            <div className="rounded-full border-2 border-orange-500 w-7.5 h-7.5 overflow-hidden shrink-0">
              <Image
                className="rounded-full object-contain"
                src={
                  user?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYc_nH36xssx6tM83og18mzFq7OtM8fZ2-YR2ggUZk6g&s=10"
                }
                width={30}
                height={30}
                alt="profile picture"
              ></Image>
            </div>
            <section className="text-gray-600 my-auto hidden lg:flex">{user?.name}</section>
          </Link>
          <button
            onClick={() => signOutHandler()}
            className="btn gap-1.5 justify-center items-center hover:bg-amber-400 p-4 rounded-3xl"
          >
            <FiLogOut className="font-bold" />
            <span className="hidden sm:inline"> Logout</span>
          </button>
        </>
      ) : (
        // signIn and Regester button - showed if session doesn't exists

        <>
          <Link
            href={"/signin"}
            className="btn btn-primary rounded-2xl bg-white border-none text-black p-4 shadow-md hover:bg-orange-400 hover:text-white flex gap-1.5 justify-center items-center"
          >
            Log In
          </Link>
          <Link
            href={"/signup"}
            className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-4"
          >
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default NavRightPortion;
