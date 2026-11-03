import React from "react";
import NavLeftPortion from "./NavLeftPortion";
import NavMiddlePortion from "./NavMiddlePortion";
import NavRightPortion from "./NavRightPortion";

const Navbar = () => {
  return (
    <div className="py-7 bg-base-100 flex flex-col items-center gap-5 ">
      <section className="flex justify-between   container mx-auto items-center px-2 sm:px-0">
        <NavLeftPortion></NavLeftPortion>
        <article className="hidden sm:flex justify-center items-center w-full">
          <NavMiddlePortion></NavMiddlePortion>
        </article>
        <NavRightPortion></NavRightPortion>
      </section>
      <section className="inline sm:hidden">
        <NavMiddlePortion></NavMiddlePortion>
      </section>
    </div>
  );
};

export default Navbar;
