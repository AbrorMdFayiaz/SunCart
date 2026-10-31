import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <section className="text-center my-auto">
      <div className="text-orange-400 font-black text-3xl">Page Not Found.</div>
      <h1 className="pt-7 pb-4 text-gray-400 font-bold text-xl">Go to HomePage to Continue.</h1>
      <Link
        href={"/"}
        className="btn btn-primary rounded-2xl bg-linear-to-br from-orange-300 to-violet-600 border-none p-6 text-2xl font-extrabold"
      >
        Home
      </Link>
    </section>
  );
};

export default notfound;
