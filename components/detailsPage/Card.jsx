"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ id }) => {
  const [item, SetItem] = useState("");
  useEffect(() => {
    const dataHandler = async () => {
      const res = await fetch(
        `https://json-server-for-suncart-website.onrender.com/products/${id}`,
      );
      const data = await res.json();
      console.log(data, "dataCard");
      SetItem(data);
      console.log("a");
    };
    dataHandler();
  }, [id]);
  return (
    <div className="bg-base-200 py-10 px-3 sm:px-0">
      <article className="card bg-base-100 shadow-sm container mx-auto flex justify-between">
        <div className="flex flex-col sm:flex-row  gap-12 items-center p-8">
          {/* Left Section : Image */}

          <section className="my-auto">
            <figure className="relative">
              {item.image ? (
                <Image
                  src={item.image || ""}
                  alt="Shoes"
                  height={1200}
                  width={800}
                  className="rounded-xl"
                ></Image>
              ) : (
                <span className="loading loading-spinner text-warning"></span>
              )}
              <p className="absolute top-3 left-3 badge rounded-2xl bg-white text-black font-bold">
                {item.category}
              </p>
            </figure>
          </section>

          {/*  Left Section : Info */}

          <section className="space-y-4">
            {/* Brand & Product Name */}
            <p className="text-orange-600 font-bold">{item.brand}</p>
            <h2 className="card-title font-black text-xl md:text-3xl">
              {item.name}
            </h2>

            {/* 2 Badges - Rating & Stock */}
            <section className="flex gap-4 flex-col sm:flex-col md:flex-row ">
              <p className="badge rounded-2xl text-orange-800 bg-orange-100 border-orange-200 font-bold">
                <FaStar className="text-yellow-400" />
                {item.rating} Rating
              </p>
              <p className="badge rounded-2xl bg-green-100 border-green-200 text-green-900 font-bold">
                {item?.stock
                  ? `In Stock (${item.stock} available)`
                  : "Not Available"}
              </p>
            </section>

            {/* Price */}

            <article className=" flex items-end">
              <h3 className="font-black text-xl md:text-3xl">${item.price} </h3>
              <p className="text-gray-400 text-sm md:text-base font-bold ml-1">
                USD (Free Shipping)
              </p>
            </article>

            {/* Product Description */}
            <p>{item.description}</p>
            {/* Divider */}
            <div className="divider"></div>
            <section className="grid grid-cols-4  gap-4 py-4">
              {/* 2 Buttons - Add To Cart & Buy Now */}
              <button
                onClick={() => {
                  toast.success("Product Added to Cart Successfully");
                }}
                className="text-md font-bold col-span-2 xl:col-span-3 btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none py-6 lg:text-base"
              >
                <FaCartShopping /> Add to Cart
              </button>
              <button
                className="text-md font-bold xl:col-span-1 col-span-2 btn rounded-2xl bg-black border-none text-white py-6  lg:text-base"
                onClick={() => {
                  toast.success("Order Placed Successfully");
                }}
              >
                Buy Now
              </button>
            </section>
            {/* Garuntee Info */}
            <h1 className="w-full rounded-2xl bg-orange-50 border-orange-100 border text-orange-800 p-3 text-center font-bold  text-sm md:text-base">
              Verified Authentic Summer Product. 30-day money-back guarantee
              included.
            </h1>
          </section>
          {/* end */}
        </div>
      </article>
      <ToastContainer />
    </div>
  );
};

export default Card;
