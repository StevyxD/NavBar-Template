import React, { useState } from "react";
import Button from "./Button/Button";
const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="bg-white py-4 md:px-10 px-7 flex justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 font-[Poppins]">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto /* this is to increase white background*/ z-[-1] left-0 w-full bg-white md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in 
           `}
        >
          <li
            link="#"
            className="mx-2 text-gray-700 text-xl hover:text-gray-400 duration-400 cursor-pointer md:my-0 my-7"
          >
            Home
          </li>
          <li
            link="#"
            className="mx-2 text-gray-700 text-xl hover:text-gray-400 duration-400 cursor-pointer md:my-0 my-7"
          >
            Service
          </li>
          <li
            link="#"
            className="mx-2 text-gray-700 text-xl hover:text-gray-400 duration-400 cursor-pointer md:my-0 my-7"
          >
            About Us
          </li>
          <li
            link="#"
            className="mx-2 text-gray-700 text-xl hover:text-gray-400 duration-400 cursor-pointer md:my-0 my-7"
          >
            Blogs
          </li>
          <li
            link="#"
            className="mx-2 text-gray-700 text-xl hover:text-gray-400 duration-400 cursor-pointer md:my-0 my-7"
          >
            Contact
          </li>
          <Button>Get Started</Button>
          <Button>Read More</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
