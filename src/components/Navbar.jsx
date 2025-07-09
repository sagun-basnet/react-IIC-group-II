import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[5rem] bg-red-400 flex justify-between items-center px-4 ">
      <h1 className="text-[3rem] font-bold">LOGO</h1>
      <ul className="myFlex gap-4">
        <li className="text-lg font-bold cursor-pointer">Home</li>
        <li className="text-lg font-bold cursor-pointer">About</li>
        <li className="text-lg font-bold cursor-pointer">Contact</li>
        <li className="text-lg font-bold cursor-pointer">Service</li>
      </ul>
      <div className="flex gap-4">
        <button className="hover:bg-blue-700 p-2 px-4 rounded-md bg-blue-500 font-bold">
          Login
        </button>
        <button className="p-2 px-4 rounded-md bg-red-600 font-bold">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
