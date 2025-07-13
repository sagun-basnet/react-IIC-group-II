import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-red-400 flex justify-between items-center px-4 ">
      <h1 className="text-[3rem] font-bold">LOGO</h1>
      <ul className="myFlex gap-4">
        <Link to="/">
          <li className="text-lg font-bold cursor-pointer">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-lg font-bold cursor-pointer">About</li>
        </Link>
        <Link to="/contact">
          <li className="text-lg font-bold cursor-pointer">Contact</li>
        </Link>
        <Link to="/service">
          <li className="text-lg font-bold cursor-pointer">Service</li>
        </Link>
      </ul>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="hover:bg-blue-700 p-2 px-4 rounded-md bg-blue-500 font-bold">
            Login
          </button>
        </Link>
        <button className="p-2 px-4 rounded-md bg-red-600 font-bold">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
