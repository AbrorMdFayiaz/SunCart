import React from "react";
import "animate.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-linear-150 from-orange-50 to-orange-200">
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div>
            <div className="animate__animated animate__bounce  animate__slow animate__infinite text-orange-400 font-extrabold py-6">
              Hot Deals 🔥 Summer Sale 50% OFF
            </div>
            <h1 className="text-5xl font-bold">
              Elevate Your{" "}
              <span className="bg-linear-to-br from-orange-300 to-violet-600 text-transparent bg-clip-text">
                Summer Vibe
              </span>
            </h1>
            <p className="py-6">
              Discover our exclusive collection of seasonal sunglasses, trendy
              beach apparel, and nourishing skincare essentials designed for
              unforgettable adventures.
            </p>
            <section className="space-x-2.5">
              <Link
                href={"/products"}
                className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-6"
              >
                Explore Collection <FaArrowRight />
              </Link>
              <Link
                href={"/profile"}
                className="btn btn-primary rounded-2xl bg-white border-none text-black p-6"
              >
                My Profile
              </Link>
            </section>
          </div>
          <img
            alt="Tailwind CSS hero component"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            className="max-w-xl rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
