import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex px-36 py-4 justify-between items-center bg-[#000000]">
      <div className="flex">
        <h1 className="text-2xl font-bold text-white">Vote.</h1>
      </div>
      <div className="flex gap-10 items-center">
        <Link to="/">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Home
          </h1>
        </Link>
        <Link to="/elections">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Elections
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;