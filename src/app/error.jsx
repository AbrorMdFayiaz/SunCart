"use client"
const error = () => {
  return (
    <div className=" h-dvh text-center flex">
            <section className="m-auto">
      <div className="text-orange-400 font-black text-3xl">404 | Page Not Found.</div>
      <h1 className="pt-7 pb-4 text-gray-400 font-bold text-xl">Something Went Wrong.</h1>
        <h1 className="text-base text-gray-800 font-semibold">Try Again Later.</h1>
    </section>
    </div>
  )
}

export default error