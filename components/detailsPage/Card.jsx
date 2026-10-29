import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="bg-base-200 py-10">
      <article className="card bg-base-100 shadow-sm container mx-auto flex justify-between">
        <div className=" flex gap-12 items-center p-8">
          {/* Left Section : Image */}

          <section className="my-auto">
            <figure className="">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                height={1200}
                width={800}
                className="rounded-xl"
              ></Image>
            </figure>
          </section>

          {/*  Left Section : Info */}

          <section className="space-y-4">
          {/* Brand & Product Name */}
            <p className="text-orange-600 font-bold">AlohaVibe</p>
            <h2 className="card-title font-black text-3xl">
              UV Protection Sunglasses
            </h2>

            {/* 2 Badges - Rating & Stock */}
            <section
              className="
space-x-4"
            >
              <p className="badge rounded-2xl text-orange-800 bg-orange-100 border-orange-200 font-bold">
                <FaStar className="text-yellow-400" />
                4.7 Rating
              </p>
              <p className="badge rounded-2xl bg-green-100 border-green-200 text-green-900 font-bold">
                In Stock (25 available)
              </p>
            </section>

            {/* Price */}

            <article className=" flex items-end">
              <h3 className="font-black text-3xl">$28 </h3>
              <p className="text-gray-400 text-base font-bold ml-1">
                {" "}
                USD (Free Shipping)
              </p>
            </article>

            {/* Product Description */}
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            {/* Divider */}
            <div className="divider"></div>
            <section className="grid grid-cols-4 gap-4 py-4">
              {/* 2 Buttons - Add To Cart & Buy Now */}
              <Link
                href={"/products"}
                className="text-base font-bold col-span-3 btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none py-6"
              >
                <FaCartShopping /> Add to Cart
              </Link>
              <Link
                href={"/profile"}
                className="text-base font-bold col-span-1 btn rounded-2xl bg-black border-none text-white py-6"
              >
                Buy Now
              </Link>
            </section>
            {/* Garuntee Info */}
            <h1 className="w-full btn rounded-2xl bg-orange-50 border-orange-100 border text-orange-800 py-6">
              Verified Authentic Summer Product. 30-day money-back guarantee
              included.
            </h1>
          </section>
          {/* end */}
        </div>
      </article>
    </div>
  );
};

export default Card;
