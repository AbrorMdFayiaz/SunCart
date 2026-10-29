import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar, FaUserEdit } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const ProfilePage = () => {
  return (
    <div>
      <div className="bg-base-200  p-10 ">
        <article className="card bg-base-100 shadow-sm container mx-auto max-w-200 rounded-2xl">
          <div className="card-body ">
            <article className="flex items-center gap-5">
              <div className="rounded-full border-6 border-orange-500 w-40 h-40 overflow-hidden shrink-0">
                <Image
                  className="rounded-full object-contain"
                  src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D`}
                  width={400}
                  height={400}
                  alt="profile picture"
                ></Image>
              </div>
              <section className="space-y-3">
                <div className="badge bg-orange-100 text-orange-700 font-bold text-base p-4 rounded-2xl">
                  Summer VIP Member
                </div>
                <br />
                <h1 className="text-black font-black text-3xl my-auto">
                  Alex Johnson
                </h1>
                <Link
                  href="/"
                  className="block mt-3 text-xl text-gray-600 font-semibold"
                >
                  <IoIosMail className="inline-block text-orange-400" />{" "}
                  alex.johnson@suncart.com
                </Link>
              </section>
            </article>

            <div className="divider"></div>

            <article className="grid grid-cols-3 gap-4">
              {/* 1 */}
              <div className="">
                <Card className=" gap-2  bg-orange-50 p-6 rounded-2xl">
                  <Card.Header>
                    <Card.Description className="text-orange-600 font-bold">
                      Saved Addresses
                    </Card.Description>
                    <Card.Title className="text-xl font-bold pt-2 pb-3.5">
                      2 Locations
                    </Card.Title>
                  </Card.Header>
                </Card>
              </div>

              {/* 2 */}
              <div className="">
                <Card className=" gap-2 bg-base-200 p-6 rounded-2xl">
                  <Card.Header>
                    <Card.Description className="font-medium text-gray-500">
                      Saved Addresses
                    </Card.Description>
                    <Card.Title className="text-xl font-bold pt-2 pb-3.5">
                      2 Locations
                    </Card.Title>
                  </Card.Header>
                </Card>
              </div>
              {/* 3 */}
              <div className="">
                <Card className=" gap-2 bg-base-200 p-6 rounded-2xl">
                  <Card.Header>
                    <Card.Description className="font-medium text-gray-500">
                      Saved Addresses
                    </Card.Description>
                    <Card.Title className="text-xl font-bold pt-2 pb-3.5">
                      2 Locations
                    </Card.Title>
                  </Card.Header>
                </Card>
              </div>
            </article>

            <div className="divider"></div>

            <section className="flex justify-between">
              <Link
                href={"/products"}
                className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-6 text-white font-bold text-base"
              >
                {" "}
                <FaUserEdit /> Update Information
              </Link>

              <button className="flex gap-1.5 justify-center items-center bg-[#fef2f2] p-4 px-8 rounded-3xl text-orange-600 font-bold text-base">
                Logout
              </button>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProfilePage;
